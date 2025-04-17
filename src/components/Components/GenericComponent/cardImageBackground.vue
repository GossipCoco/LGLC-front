<template>
    <div class="card-image clan-detail-card background-color-white border-card-color
      image-illustration-right display-flex-row align-items-content-justify-content
      background-size-cover"
      v-bind:style="{ backgroundImage: 'url(' + Image + ')',}">
      <slot></slot>
    </div>
</template>
<script>
export default {
    name:'cardImageBackground.vue',
    props:['Image']
}
</script>