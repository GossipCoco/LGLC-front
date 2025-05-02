<template>
  <div class="col-3 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
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
        <div v-html="Summary" class="text-white text-align-justify poppins-text"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["Summary"],
};
</script>