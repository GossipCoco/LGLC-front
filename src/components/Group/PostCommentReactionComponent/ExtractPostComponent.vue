<template>
  <div class="row">
    <div class="col-6" v-for="(posts, index) in Post" :key="index">
      <div class="card mb-3 background-lineart poppins-text text-white">
        <div class="card-body">
          <h5 class="card-title">{{ posts.Title }}</h5>
          <p v-html="truncateText(posts.Content, 500)"></p>
          <p>
            <router-link
              :to="'/PostComment/' + posts.Id"
              class="btn btn-primary"
              >Voir plus</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "ExtractPostComponent",
    props: ["Post"],
    data() {
        return {};
    },
    methods: {
        truncateText(text, maxLength) {
            return text.length <= maxLength
                ? text
                : text.substring(0, maxLength) + "...";
        },
    },
}
</script>