<template>
    <div class="card">
        <div class="card-body title-dashboard-container-header">
            <h1>Bienvenue sur votre tableau de bord</h1>
             <ImageRondDashboard v-bind:src="'/images/Avatars/' + Avatar" v-bind:alt="Avatar" v-bind:classe="'card-img-top'"/>
             <img src="/images/icons/envelope-solid.svg" />
        </div>
    </div>
</template>
<script>
import ImageRondDashboard from '../../Components/SpecificComponent/ImageRondDashboard.vue';
export default {
    name: "TitleHeader",
    components: {ImageRondDashboard},
    props: ['UserName', 'Avatar']
}
</script>