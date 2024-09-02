<template>
    <div class="dashboard-max  flex-one card fiction-container">
        {{ url }}
    </div>
</template>
<script>
export default {
    name: 'UserCard',
    data(){
        return {
            usr: this.$store.state.auth.user.usrID,
        }
    },
    created() {
        this.url = this.$route.params.id;
    }

}
</script>