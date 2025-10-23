<template>
    <div>
        
    </div>
</template>
<script>
export default {
    name: "CreateANewPost",
    data() {
        return {
            url: null
        };
    },
    created() {
        this.url = this.$route.params.id;
        console.log("CreateANewPost created with url:", this.url);
    }   
}
</script>