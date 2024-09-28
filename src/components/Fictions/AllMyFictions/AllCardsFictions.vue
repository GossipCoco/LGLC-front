<template>
  <div class="row row-cols-md-3 g-3">
    <div class="col" v-for="(fiction, index) in allFictions" :key="index">
      <div class="card fiction-summary-card">
        <div class="row">
          <div
            class="col-4 image-fiction-container-background"
            v-bind:style="{
              backgroundImage: 'url(' + fiction.Image + ')',
            }"
          ></div>
          <div class="col-8">
            <h5 class="card-title">{{ fiction.Title }}</h5>
            <div
              class="card-text"
              v-html="truncateText(fiction.Summary, 100)"
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
