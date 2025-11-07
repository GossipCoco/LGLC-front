<template>
  <article class="card post-card border-none background-lineart poppins-text text-white padding-1-vh">
    <!-- Header -->
    <header class="d-flex align-items-center gap-2 mb-2">
      <img :src="'/images/Avatars/'+post.User?.Avatar" alt="" class="rounded-circle avatar" />
      <div class="d-flex flex-column">
        <strong>{{ post.User?.UserName || 'Anonyme' }}</strong>
        <small class="opacity-75">{{ formatDate(post.CreatedAt) }}</small>
      </div>
      <span v-if="post.IsPinned" class="ms-auto badge bg-success">📌 Épinglé</span>
    </header>

    <!-- Titre -->
    <h2 class="h5 mb-2">{{ post.Title }}</h2>

    <!-- Contenu tronqué -->
    <div :class="['content', { collapsed: !expanded }]" v-html="post.Content"></div>
    <button v-if="shouldCollapse" class="link" @click="expanded = !expanded">
      {{ expanded ? 'Afficher moins' : 'Lire la suite' }}
    </button>

    <!-- Méta + actions -->
    <footer class="d-flex align-items-center gap-3 mt-2 opacity-85">
      <span>💬 {{ commentCount }}</span>
      <span v-if="post.Group?.Name">🏷️ {{ post.Group.Name }}</span>
      <button class="btn btn-sm btn-outline-light ms-auto" @click="$emit('open', post.Id)">Ouvrir</button>
    </footer>
  </article>
</template>

<script>
export default {
  name: 'PostCardComponent',
  props: {
    post: { type: Object, required: true },
    clampLines: { type: Number, default: 10 }
  },
  data() {
    return { expanded: false };
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