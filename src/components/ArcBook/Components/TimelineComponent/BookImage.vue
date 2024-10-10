<template>
    <div class="col-2 col-sm-12 col-md-2 col-lg-2 col-xxl-2 image-book-container">
        <img :src="Illustration" :alt="Title" class="image-book" />
    </div>
</template>
<script>
    export default{
        name: 'BookImage',
        props: ['Illustration', 'Title']
    }
</script>