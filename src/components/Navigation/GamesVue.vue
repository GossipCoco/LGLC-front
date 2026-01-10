<template>
<div class="row row-cols-4 row-cols-md-4 g-4">
  <div class="col">
    <div class="card">
      <img src="/images/Backgrounds/Warriors_043355.png" class="card-img-top" alt="Warriors_043355.png">
      <div class="card-body">
        <router-link to="/OriginaleCharacterByUser">Mes Personnages</router-link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/images/Backgrounds/Warriors_043355.png" class="card-img-top" alt="Warriors_043355.png">
      <div class="card-body">
        <router-link :to="'/allFictions/' + usrId">Mes fictions</router-link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/images/Backgrounds/Warriors_043355.png" class="card-img-top" alt="Warriors_043355.png">
      <div class="card-body">
        <router-link to="/AllExistingFictionsLayout">Lire des fictions</router-link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/images/Backgrounds/Warriors_043355.png" class="card-img-top" alt="Warriors_043355.png">
      <div class="card-body">
        <router-link to="/createANewFiction">Nouvelle fiction</router-link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/images/Backgrounds/Warriors_043355.png" class="card-img-top" alt="Warriors_043355.png">
      <div class="card-body">
        <router-link to="/CreateAnOriginalCharacter">Créer un personnage</router-link>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
    name: "CreationVue",
    data() {
    return {
      usrId: this.$store.state.auth.user.usrID,
    }
}
}
</script>