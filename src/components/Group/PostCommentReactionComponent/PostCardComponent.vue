<template>
  <article class="card post-card border-none background-lineart poppins-text text-white padding-1-vh">
    <div class="card-header">
    <!-- Header -->
      <header class="d-flex align-items-center gap-2 mb-2 display-flex display-flex-column">
        <div class="display-flex display-flex-row">
          <h2 class="h5 mb-2">{{ post.Title }}</h2>
          <img :src="'/images/Avatars/'+post.User?.Avatar" alt="" class="rounded-circle avatar" />
          <div class="d-flex flex-column">

            <strong>{{ post.User?.UserName || 'Anonyme' }}</strong>
            <small class="opacity-75">{{ formatDate(post.CreatedAt) }}</small>
          </div>
        </div>
        <span v-if="post.IsPinned" class="ms-auto badge bg-success">📌 Épinglé</span>
      </header>

    <!-- Titre -->
    
    </div>
    <!-- Contenu tronqué -->
    <div class="card-body">
      <div :class="['content', 'text-align-justify', { collapsed: !expanded }]" v-html="post.Content"></div>
    <!-- <button v-if="shouldCollapse" class="link" @click="expanded = !expanded">
      {{ expanded ? 'Afficher moins' : 'Lire la suite' }}
    </button> -->

    <!-- Méta + actions -->
      <footer class="d-flex align-items-center gap-3 mt-2 opacity-85">
        <router-link :to="'/NewResponseToPost/'+ post.Id" class="btn btn-primary">💬 Commentez</router-link>
        <span>💬 {{ commentCount }}</span>
        <span v-if="post.Group?.Name">🏷️ {{ post.Group.Name }}</span>
        <div class="row">
              <ReactionBar
      :user-id="$store.state.auth.user.usrID"
      target-type="post"
      :target-id="post.Id"
      :initial-reactions="post.Reactions || []"
      @react="onReact"
      @unreact="onUnreact"
    />
        </div>
      </footer>
    </div>
  </article>
</template>

<script>
// import data from "emoji-mart-vue-fast/data/all.json";
// import "emoji-mart-vue-fast/css/emoji-mart.css";
// import { Picker, EmojiIndex } from "emoji-mart-vue-fast/src";
// let emojiIndex = new EmojiIndex(data);
import ReactionBar from './ReactionBar.vue';
export default {
  name: 'PostCardComponent',
  components: {
    ReactionBar,
    // Picker
  },
  props: {
    post: { type: Object, required: true },
    clampLines: { type: Number, default: 10 }
  },
  data() {
    return {
      expanded: false,
      emojisOutput: '',
    };
  },
  computed: {
    commentCount() {
      return this.post.commentCount ?? (Array.isArray(this.post.Comments) ? this.post.Comments.length : 0);
    },
    shouldCollapse() {
      // Laisse la main au CSS; le bouton est toujours visible, tu peux le cacher si pas nécessaire
      return true;
    }
  },
  methods: {
    showEmoji(emoji) {
      this.emojisOutput = this.emojisOutput + emoji.native;
    },
    formatDate(d) {
      try { return new Date(d).toLocaleString(); } catch { return d || ''; }
    }
  }
};
</script>
<style scoped>
.avatar { width:34px; height:34px; object-fit:cover }
.content { line-height:1.7; }
.content.collapsed {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.link { background:none; border:none; color:#cfe; cursor:pointer; padding:0; margin-top:6px }
:deep(p){ margin:0 0 .6rem; }
</style>