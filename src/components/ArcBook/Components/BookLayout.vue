<template>
  <div class="row">
    <CarouselArc v-bind:arc="arc" />
    <div class="col-8 col-sm-12 col-md-8 col-lg-8 col-xxl-8">
        <h2>{{ arc.Title }}</h2>
        <div v-html="arc.Summary" class="text-align-justify"></div>        
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