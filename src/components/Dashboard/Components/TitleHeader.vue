<template>
    <div class="card">
        <div class="card-body title-dashboard-container-header">
            <h1>Bienvenue sur votre tableau de bord</h1>
            <!-- <div class="h1-title-dashboard" v-html="UserName"></div> -->        
            <img :src="'/images/Avatars/' + Avatar" class="card-img-top" alt="avatar">
        </div>
    </div>
</template>
<script>
export default {
    name: "TitleHeader",
    props: ['UserName', 'Avatar']
}
</script>