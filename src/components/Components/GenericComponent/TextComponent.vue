<template>
    <div v-html="text"></div>
</template>
<script>
export default {
    name:'TextComponent',
    props:['text']
}
</script>