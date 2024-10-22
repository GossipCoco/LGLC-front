<template>
  <div class="col-12 col-md-4 col-lg-4">
    <div
      class="single-timeline-content d-flex wow fadeInLeft"
      data-wow-delay="0.3s"
      style="
        visibility: visible;
        animation-delay: 0.3s;
        animation-name: fadeInLeft;
      "
    >
      <div class="timeline-text">
        <div v-html="Summary" class="text-white text-align-justify"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["Summary"],
};
</script>