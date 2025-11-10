<template>
    <div>

    </div>
</template>
<script>
export default {
    name: "NewResponseToCommentComponent",
    data() {
        return {
            url: null
        };
    },
    created() {
        this.url = this.$route.params.id;
    }
}
</script>