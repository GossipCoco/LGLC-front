<template>
  <div class="display-flex card-header display-flex-row">
    <div class="row" style="width: 100%;">
      <div class="col-10">
        <h2 class="display-flex flex-one align-items-content-justify-content">{{ Title }}</h2>
      </div>
      <div class="col-2">
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