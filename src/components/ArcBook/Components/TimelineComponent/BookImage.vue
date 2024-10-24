<template>
    <div class="col-2 col-sm-12 col-md-2 col-lg-2 col-xxl-2 image-book-container display-flex-row align-items-content-justify-content">
        <img :src="Illustration" :alt="Title" class="image-book" />
    </div>
</template>
<script>
    export default{
        name: 'BookImage',
        props: ['Illustration', 'Title']
    }
</script>