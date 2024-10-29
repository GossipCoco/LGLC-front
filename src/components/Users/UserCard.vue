<template>
    <div class="dashboard-max flex-one card display-flex-column height-100 background-color-main-lineart margin-3-rem">
        <CardHeader v-bind:Title="url" />
        <UserInformations v-bind:user="url"></UserInformations>
    </div>
</template>
<script>
import UserInformations from './Components/UserInformations.vue';
import CardHeader from '../Components/GenericComponent/CardHeader.vue';
export default {
    name: 'UserCard',
    components: {
        UserInformations,
        CardHeader
    },    
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