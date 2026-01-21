<template>
  <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div class="character-details-card background-size-cover display-flex background-size-cover
    card-image border-radius-12px flex-one border-card-color margin-1vh display-flex-row align-items-content-justify-content
    image-illustration-right original-character-contain height-45VH width-100-100"
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