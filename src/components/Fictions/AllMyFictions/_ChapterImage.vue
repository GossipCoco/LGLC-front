<template>
    <div class="chapter-image-content width-50-vh background-size-cover"
        v-bind:style="{ backgroundImage: 'url(' + ImageChapter + ')' }">
    </div>
</template>
<script>
export default {
    name: 'ChapterImage',
    props:['ImageChapter']
}
</script>