<template>
    <div class="dashboard-max-card-container background-color-main-lineart flex-one card display-flex-column fiction-container">
        <CardHeader v-bind:Title="'Mes fiches personnages'"/>
    </div>
</template>
<script>
import CardHeader from '../../Components/GenericComponent/CardHeader.vue'

export default {
    name: 'GamerUserLayout',
    components: {CardHeader}
}
</script>