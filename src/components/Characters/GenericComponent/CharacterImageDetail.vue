<template>
  <div class="col-4 col-md-4">
    <div
      class="character-details-card background-size-cover display-flex background-size-cover card-image border-card-color original-character-contain"
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