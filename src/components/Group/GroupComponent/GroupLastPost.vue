<template>
  <div
    class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3"
    v-for="(posts, index) in Post"
    :key="index"
  >
    <div class="card background-lineart height-70-vh">
      <div
        class="card-header text-center text-white width-40-vh height-20-vh display-flex display-flex-column flex-wrap-wrap"
      >
        <h4 class="card-title text-white">{{ posts.Title }}</h4>
        <p class="card-title text-white font-size-0-65">
          {{ posts.User.UserName }}
        </p>
      </div>
      <div class="card-body">
        <p
          class="text-align-justify text-white"
          v-html="truncateText(posts.Content, 255)"
        ></p>
        <p>
          <router-link :to="'/PostComment/' + posts.Id" class="btn btn-primary"
            >Voir plus</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GroupLastPost",
  props: ["Post"],
  methods: {
    truncateText(text, maxLength) {
      if (text.length <= maxLength) {
        return text;
      }
      return text.substring(0, maxLength) + "...";
    },
  },
};
</script>