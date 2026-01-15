<template>
  <div
    class="display-flex card-header display-flex-row flex-one
    align-items-content-justify-content text-white cinzel background-color-dark-green-01 width-100-100"
  >
    <div class="row width-100-100">
      <div class="col-8">
        <h2 class="display-flex flex-one align-items-content-justify-content text-white width-100-100">
          {{ Title }}
        </h2>
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
  props: ["Title", ""],
};
</script>