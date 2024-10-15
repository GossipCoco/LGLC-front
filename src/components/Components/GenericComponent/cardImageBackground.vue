<template>
      <div
      class="card-image clan-detail-card background-color-white border-card-color background-size-cover"
      v-bind:style="{
        backgroundImage: 'url(' + Image + ')',
      }"
    ></div>
</template>
<script>
export default {
    name:'cardImageBackground.vue',
    props:['Image']
}
</script>