<template>
    <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xxl-2 image-book-container display-flex-row align-items-content-justify-content">
        <img :src="Illustration" :alt="Title" class="image-book border-radius-100 height-20-vh width-20-vh" />
    </div>
</template>
<script>
    export default{
        name: 'BookImage',
        props: ['Illustration', 'Title']
    }
</script>