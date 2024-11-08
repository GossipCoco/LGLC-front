<template>
  <div class="row row-cols-md-4 g-4 margin-1-0 height-all-fictions-container">
    <div class="col" v-for="(fiction, index) in allFictions" :key="index">
      <div class="card fiction-summary-card clear-green-bacground">
        <div class="row">
          <div
            class="col-4 image-fiction-container-background background-size-cover"
            v-bind:style="{
              backgroundImage: 'url(' + fiction.Image + ')',
            }"
          >
        </div>
          <div class="col-8 ">
            <div class="h5-container display-flex-column align-items-content-justify-content">
              <div class="display-flex-row text-dark-green montesserat">
                Auteur : &nbsp;
                <router-link
                  :to="'/getUserBy/' + fiction.User.UserName"
                  class="text-dark-green montesserat"
                >
                  {{ fiction.User.UserName }}
                </router-link>
              </div>
              <h5 class="card-title text-dark-green montesserat">
                <router-link :to="'/fiction/' + fiction.Title" class="text-dark-green montesserat">{{
                  fiction.Title
                }}</router-link>
              </h5>
            </div>
            <div
              class="card-text text-align-justify summary-text-font"
              v-html="truncateText(fiction.Summary, 50)"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AllCardsFictions",
  props: ["allFictions"],
  methods: {
    truncateText(text, maxLength) {
      return text.length <= maxLength
        ? text
        : text.substring(0, maxLength) + "...";
    },
  },
};
</script>
