<template>
    <div class="card">
        <div class="card-body display-flex  title-dashboard-container-header">
            <h1>Bienvenue sur votre tableau de bord</h1>
             <ImageRondDashboard v-bind:src="'/images/Avatars/' + Avatar" v-bind:alt="Avatar" v-bind:classe="'card-img-top'"/>
             <div class="image-messenger-container">
                <router-link :to="'/user/messagerie/'+User" class="display-flex-row message-sent-container" >
                    <img src="/images/icons/envelope-solid.svg" />
                    <div class="mini-rond-messages"><p>{{ NbMessages }}</p></div>
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