<template>
    <div class="
        card-header background-lineart border-radius-12px
        background-color-dark-green-01 display-flex-row align-items-content-justify-content width-190-vh">
      <h1 class="text-white poppins-text">Tous les personnages</h1>
    <router-link
        to="/CreateAnOriginalCharacter"
        class="btn btn-lg btn-primary margin-0-0-0-2vh"
    >
        Nouveau personnage
    </router-link>
    </div>
</template>
<script>
export default {
    name: 'CardHeader',
    props:['label', 'route', 'NameLink' ]
}
</script>