<template>
  <div class="row row-cols-md-4 g-4 margin-1-0">
    <div class="col" v-for="(fiction, index) in allFictions" :key="index">
      <div class="card fiction-summary-card">
        <div class="row">
          <div
            class="col-4 image-fiction-container-background background-size-cover"
            v-bind:style="{
              backgroundImage: 'url(' + fiction.Image + ')',
            }"
          ></div>
          <div class="col-8">
            <div class="h5-container">
            <h5 class="card-title">
              <router-link :to="'/fiction/' + fiction.Title">{{ fiction.Title }}</router-link></h5>
            <div class="display-flex-row">par &nbsp; &nbsp;<h6>{{ fiction.User.UserName }}</h6></div>
          </div>
            <div
              class="card-text summary-text-font"
              v-html="truncateText(fiction.Summary, 100)"
            >            
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "AllCardsFictions",
  props:['allFictions'],
  methods: {
    truncateText(text, maxLength) {
      return text.length <= maxLength
        ? text
        : text.substring(0, maxLength) + "...";
    },
  },
};
</script>
