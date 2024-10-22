<template>
    <div class="card background-lineart border-none">
        <div class="card-body display-flex-row align-items-content-justify-content title-dashboard-container-header">
            <h1 class=" font-variant-small-caps cinzel">Bienvenue sur votre tableau de bord {{ User }}</h1>
             <ImageRondDashboard v-bind:src="'/images/Avatars/' + Avatar" v-bind:alt="Avatar" v-bind:classe="'card-img-top mini-rond-avatar-image'"/>
             <div class="image-messenger-container">
                <router-link :to="'/user/messagerie/'+User" class="display-flex-row message-sent-container" >
                    <img src="/images/icons/envelope-solid.svg"/>
                    <div class="mini-rond-messages text-dark-green"><p>{{ NbMessages }}</p></div>
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
    props: ['UserName', 'Avatar', 'User', 'NbMessages']

}
</script>