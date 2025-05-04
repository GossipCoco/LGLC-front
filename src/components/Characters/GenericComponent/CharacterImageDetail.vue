<template>
  <div class="col-4 col-md-4">
    <div class="character-details-card background-size-cover display-flex background-size-cover
    card-image border-radius-12px flex-one border-card-color display-flex-row align-items-content-justify-content
    image-illustration-right original-character-contain height-90-vh width-80-vh"
      v-bind:style="{
        backgroundImage: 'url(' + Image + ')',
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "CharacterImageDetail",
  props: ["Image"],
};
</script>