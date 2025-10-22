<template>
  <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <div v-for="(posts, index) in Post" :key="index">
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