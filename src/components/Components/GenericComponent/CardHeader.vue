<template>
  <div
  class="
  display-flex card-header display-flex-row flex-one align-items-content-justify-content text-white cinzel"
  >
    <div class="row width-190-vh">
      <div class="col-8">
        <h2 class="display-flex flex-one align-items-content-justify-content text-white">{{ Title }}</h2>
      </div>
      <div class="col-4">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardHeader",
  props: ["Title"],
};
</script>