<template>
  <div class="row">
    <CarouselArc v-bind:arc="arc" />
    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xxl-4">
      <div
        class="illustration-arc-container card-image"
        v-bind:style="{
          backgroundImage: 'url(/images/Books/' + arc.Image + ')',
        }"
      ></div>
    </div>
    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xxl-4">
      <div class="display-flex-column">
        <div v-for="(book, index) in arc.Books" :key="index">
          <p>{{ book.Title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CarouselArc from "./CarouselArc.vue";
export default {
  name: "BookLayout",
  props: ["arc"],
  components: {
    CarouselArc,
  },
};
</script>