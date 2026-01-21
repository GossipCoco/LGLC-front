<template>
  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-2 col-sm-2 col-xs-2">
    <div class="character-details-card background-size-cover display-flex background-size-cover
    card-image border-radius-12px flex-one border-card-color margin-1vh display-flex-row align-items-content-justify-content
    image-illustration-right original-character-contain height-80 width-80-vh"
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