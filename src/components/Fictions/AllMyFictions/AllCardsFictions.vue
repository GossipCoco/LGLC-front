<template>
  <div class="row row-cols-md-4 g-4">
    <div class="col" v-for="(fiction, index) in allFictions" :key="index">
      <div class="card fiction-summary-card">
        <div class="row">
          <div
            class="col-5 image-fiction-container-background"
            v-bind:style="{
              backgroundImage: 'url(' + fiction.Image + ')',
            }"
          ></div>
          <div class="col-7">
            <div class="h5-container">
            <h5 class="card-title">{{ fiction.Title }}</h5>
          </div>
            <div
              class="card-text summary-text-font"
              v-html="truncateText(fiction.Summary, 50)"
            ></div>
            <p class="card-text">
              <router-link
                type="button"
                class="btn btn-primary"
                :to="'/fiction/' + fiction.Title"
                >Lire la fiction</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    allFictions: {
      type: Array,
      required: true,
    },
  },
  methods: {
    truncateText(text, maxLength) {
      return text.length <= maxLength
        ? text
        : text.substring(0, maxLength) + "...";
    },
  },
};
</script>
