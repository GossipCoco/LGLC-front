<template>
    <div class="character-details-card background-size-cover display-flex background-size-cover
    card-image border-radius-12px flex-one border-card-color margin-1vh display-flex-row align-items-content-justify-content
    image-illustration-right original-character-contain height-90-vh width-80-vh"
      v-bind:style="{
        backgroundImage: 'url(' + Image + ')',
      }"
    >
      <slot></slot>
    </div>
</template>
<script>
export default {
    name: "GroupImageDetail",
    props: ["Image"],
}
</script>