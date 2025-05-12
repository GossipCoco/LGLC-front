<template>
    <div
    class="
    character-details-card background-size-cover display-flex background-size-cover
    card-image background-size-cover display-flex-row align-items-content-justify-content
    flex-one border-card-color image-illustration-right background-position-50-percent height-357-vh
    transform-card"
    v-bind:style="{ backgroundImage: 'url(' + Image + ')',}"
    >
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'BackgroundImage',
    props:['Image']
}
</script>