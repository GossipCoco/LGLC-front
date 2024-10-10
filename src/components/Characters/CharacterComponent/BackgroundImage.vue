<template>
    <div
    class="character-details-card background-size-cover display-flex background-size-cover card-image background-size-cover border-card-color"
    v-bind:style="{
        backgroundImage: 'url(' + Image + ')',
    }"
    >
    <slot></slot></div>
</template>
<script>
export default {
    name: 'BackgroundImage',
    props:['Image']
}
</script>