<template>
  <div class="row row-cols-md-4 g-4 margin-1-0 height-all-fictions-container height-70-vh">
    <div class="col" v-for="(fiction, index) in allFictions" :key="index">
      <div class="card fiction-summary-card clear-green-bacground">
        <div class="row">
          <div
            class="col-2 col-xl-2 col-xxl-4 col-lg-12 col-md-12 col-sm-12 col xs-12 image-fiction-container-background background-size-cover"
            v-bind:style="{
              backgroundImage: 'url(' + fiction.Image + ')',
            }"
          ></div>
          <div class="col-10 col-xl-10 col-xxl-8 col-lg-12 col-md-12 col-sm-12 col xs-12">
            <div
              class="h5-container display-flex-column align-items-content-justify-content"
            >
              <div class="display-flex-column text-dark-green montesserat">
                <div class="display-flex-row title-container-card display-block align-items-content-justify-content">
                  <h5 class="card-title text-dark-green montesserat">
                    <router-link
                      :to="'/fiction/' + fiction.Title"
                      class="text-dark-green montesserat"
                      >{{ fiction.Title }}</router-link
                    >
                  </h5>
                </div>
                <p class="author-text">
                  Auteur : &nbsp;
                  <router-link
                    :to="'/getUserBy/' + fiction.User.UserName"
                    class="text-dark-green montesserat"
                  >
                    {{ fiction.User.UserName }}
                  </router-link>
                </p>
              </div>
            </div>
            <div
              class="card-text text-align-justify summary-text-font display-none-responsive"
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
