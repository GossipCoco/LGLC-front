<template>
    <div class="dashboard-max-card-container card fiction-container">
        <CardHeader v-bind:Title="'Ma messagerie'"/>
    </div>
</template>
<script>
import CardHeader from '../../Components/GenericComponent/CardHeader.vue'

export default {
    name: 'Messagerie',
    components: {CardHeader}
}
</script>