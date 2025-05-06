<template>
  <div class="col-6 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
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