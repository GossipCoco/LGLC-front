<template>
    <div class="chapter-image-content flex-one background-size-cover"
        v-bind:style="{ backgroundImage: 'url(' + ImageChapter + ')' }">
    </div>
</template>
<script>
export default {
    name: 'ChapterImage',
    props:['ImageChapter']
}
</script>