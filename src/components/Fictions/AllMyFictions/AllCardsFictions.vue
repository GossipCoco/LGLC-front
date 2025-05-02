<template>
  <div class="row row-cols-md-4 g-4 maTB-4vh-2vh height-80-vh width-180-vh">
    <div class="col" v-for="(fiction, index) in allFictions" :key="index">
      <div class="card fiction-summary-card padding-0-1-vh-0-1vh clear-green-bacground height-15-vh">
        <div class="row">
          <div
            class="col-2 col-xl-2 col-xxl-4 col-lg-12 col-md-12 col-sm-12 col xs-12 image-fiction-container height-15-vh width-10-vh background-size-cover"
            v-bind:style="{
              backgroundImage: 'url(' + fiction.Image + ')',
            }"
          ></div>
          <div class="col-10 col-xl-10 col-xxl-8 col-lg-12 col-md-12 col-sm-12 col xs-12">
            <div
              class="h5-container width-30-vh margin-0-rem display-flex-column align-items-content-justify-content"
            >
              <div class="display-flex-column text-dark-green montesserat">
                <div class="display-flex-row title-container-card width-25-vh display-block align-items-content-justify-content">
                  <h5 class="card-title text-dark-green montesserat">
                    <router-link
                      :to="'/fiction/' + fiction.Title"
                      class="text-dark-green montesserat"
                      >{{ fiction.Title }}</router-link
                    >
                  </h5>
                </div>
                <p class="author-text font-variant-small-caps">
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
              class="card-text width-30-vh text-align-justify summary-text-font display-none-responsive padding-1-vh"
              v-html="truncateText(fiction.Summary, 65)"
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
