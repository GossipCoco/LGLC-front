<template>
    <div>

    </div>
</template>
<script>
export default {
    name: "NewResponseToPostComponent",
    data() {
        return {
            url: "",
            Group:{},
        };
    },
    created() {
        this.url = this.$route.params.id;
    },
}
</script>