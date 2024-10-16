<template>
  <div class="display-flex card-header display-flex-row">
    <div class="row">
      <div class="col-6">
        <h2>{{ Title }}</h2>
      </div>
      <div class="col-6">
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