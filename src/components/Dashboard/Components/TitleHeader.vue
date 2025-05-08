<template>
    <div class="card welcome-dashboard-container background-lineart border-none">
        <div class="card-body display-flex-row align-items-content-justify-content title-dashboard-container-header">
            <h1 class=" font-variant-small-caps cinzel text-white">Bienvenue sur votre tableau de bord                
                {{ User }}</h1>
             <div class="image-messenger-container">
                <router-link :to="'/user/messagerie/'+User" class="display-flex-row message-sent-container" >
                    <img src="/images/icons/envelope-solid.svg" class="border-radius-100 height-10-vh" loading="lazy"/>
                    <div class="mini-rond-messages padding-1-vh-0-0-0 border-radius-100 background-color-active display-flex align-items-content-justify-content text-dark-green">
                        <p class="text-white">{{ NbUnreadMessage }}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import UserService from '../../../services/UserService';
export default {
    name: "TitleHeader",
    props: ['UserName', 'Avatar', 'User', 'usrId'],
    data(){
        return{
            NbUnreadMessage: null
        }
    },
    created(){
        this.CountUnreadMessages(this.usrId)
    },
    methods:{
        CountUnreadMessages(id){
            UserService.CountUnreadMessages(id)
            .then((response) => {
                console.log(response)
                this.NbUnreadMessage = response.data.ob
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }


}
</script>