<template>
    <div class="card welcome-dashboard-container background-lineart border-none">
        <div class="card-body display-flex-row align-items-content-justify-content title-dashboard-container-header">
            <h1 class=" font-variant-small-caps cinzel text-white">Bienvenue sur votre tableau de bord                
                {{ User }}</h1>
             <ImageRondDashboard v-bind:src="'/images/Avatars/' + Avatar" v-bind:alt="Avatar" v-bind:classe="'card-img-top mini-rond-avatar-image'" v-bind:edit="true"/>
             <div class="image-messenger-container">
                <router-link :to="'/user/messagerie/'+User" class="display-flex-row message-sent-container" >
                    <img src="/images/icons/envelope-solid.svg"  loading="lazy"/>
                    <div class="mini-rond-messages background-color-active display-flex align-items-content-justify-content text-dark-green">
                        <p class="text-white">{{ NbMessages }}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import ImageRondDashboard from '../../Components/SpecificComponent/ImageRondDashboard.vue';
export default {
    name: "TitleHeader",
    components: {ImageRondDashboard},
    props: ['UserName', 'Avatar', 'User', 'NbMessages', 'usrId']

}
</script>