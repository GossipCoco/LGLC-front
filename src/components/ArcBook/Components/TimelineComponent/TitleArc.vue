<template>
  <div v-if="position === 'left'">
    <div
      class="timeline-date wow fadeInLeft"
      data-wow-delay="0.1s"
      style="
        visibility: visible;
        animation-delay: 0.1s;
        animation-name: fadeInLeft;
      "
    >
      <p>{{ Title }}</p>
    </div>
  </div>
  <div v-else>
    <div class="row">
          <div class="col-12 display-flex-row align-items-content-justify-content">
            <h2>{{ Title }}</h2>
          </div>
        </div>
  </div>
</template>
<script>
export default {
  name: "TimelineArc",
  props: ["Title", "position"],
};
</script>