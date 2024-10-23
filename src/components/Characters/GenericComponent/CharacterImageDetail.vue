<template>
  <div class="col-4 col-md-4">
    <div class="character-details-card background-size-cover display-flex background-size-cover
    card-image flex-one border-card-color display-flex-row align-items-content-justify-content
    image-illustration-right original-character-contain"
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