<template>
  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4"  v-for="(posts, index) in Post" :key="index">
    <div class="card  background-lineart">
      <div class="card-body">
        <div class="display-flex display-flex-column align-items-content-justify-content margin-bottom-1vh">
          <h2 class="card-title text-white">{{ posts.Title }}</h2>
          <p class="card-title text-white font-size-0-65">{{ posts.User.UserName }}</p>
        </div>
        <div>
          <p class="text-align-justify text-white" v-html="truncateText(posts.Content, 255)">  
          </p>
          <p>
            <router-link :to="'/PostComment/' + posts.Id" class="btn btn-primary"
              >Voir plus</router-link>
          </p>
        </div>
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