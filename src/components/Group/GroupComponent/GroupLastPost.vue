<template>
  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4"  v-for="(posts, index) in Post" :key="index">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <div>
          <h2>{{ posts.Title }}</h2>
          <p class="text-align-justify">
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