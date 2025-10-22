<template>
  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4"  v-for="(posts, index) in Post" :key="index">
    <div class="card  background-lineart">
      <div class="card-body">
        <h5 class="card-title text-white">{{ posts.Title }}</h5>
        <div>
          <p class="text-align-justify text-white">
            {{ truncateText(posts.Content, 255) }}
          </p>
          <p></p>
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