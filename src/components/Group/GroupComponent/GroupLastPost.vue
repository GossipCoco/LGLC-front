<template>
  <div
    class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3"
    v-for="(posts, index) in Post"
    :key="index"
  >
    <div class="card background-lineart height-50-vh">
      <div
        class="card-header text-center text-white width-40-vh height-20-vh display-flex display-flex-column flex-wrap-wrap"
      >
        <h4 class="card-title text-white">{{ posts.Title }}</h4>
        <p class="card-title text-white font-size-0-65">
          {{ posts.User.UserName }}
          <small class="opacity-75">{{ formatDate(posts.CreatedAt) }}</small>
          <span v-if="posts.IsPinned" class="ms-auto badge bg-success"
            >📌 Épinglé</span
          >
        </p>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-12 mb-3 height-20-vh">
            <p v-html="truncateText(posts.Content, 200)" class="text-white"></p>
          </div>
        </div>
        <footer class="d-flex align-items-center gap-3 mt-2 opacity-85">
          <router-link
                :to="'/PostComment/' + posts.Id"
                class="btn btn-primary"
                >Voir plus</router-link
              >
        <router-link :to="'/NewResponseToPost/'+ posts.Id" class="btn btn-primary">💬 Commentez</router-link>
        <span>💬 {{ commentCount }}</span>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GroupLastPost",
  props: ["Post"],
  computed: {
    commentCount() {
      console.log(this.Post);
      return this.Post.commentCount ?? (Array.isArray(this.Post.Comments) ? this.Post.Comments.length : 0);
    },
    shouldCollapse() {
      // Laisse la main au CSS; le bouton est toujours visible, tu peux le cacher si pas nécessaire
      return true;
    }
  },
  methods: {
    formatDate(d) {
      try {
        return new Date(d).toLocaleString();
      } catch {
        return d || "";
      }
    },
    truncateText(text, maxLength) {
      if (text.length <= maxLength) {
        return text;
      }
      return text.substring(0, maxLength) + "...";
    },
  },
};
</script>