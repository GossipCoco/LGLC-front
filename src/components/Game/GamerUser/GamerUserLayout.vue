<template>
    <div class="border-none background-color-main-lineart flex-one card display-flex-column ">
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