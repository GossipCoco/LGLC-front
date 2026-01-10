<template>
<div class="row row-cols-4 row-cols-md-4 g-4">
  <div class="col">
    <div class="card">
      <img src="/images/Backgrounds/Warriors_043355.png" class="card-img-top" alt="Warriors_043355.png">
      <div class="card-body">
        <router-link to="/rollOfDice">Jeu de dés</router-link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/images/Backgrounds/Warriors_043355.png" class="card-img-top" alt="Warriors_043355.png">
      <div class="card-body">
        <router-link to="/puzzle">Puzzles</router-link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/images/Backgrounds/Warriors_043355.png" class="card-img-top" alt="Warriors_043355.png">
      <div class="card-body">
        <router-link to="/mouseShot">Attrape la souris</router-link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/images/Backgrounds/Warriors_043355.png" class="card-img-top" alt="Warriors_043355.png">
      <div class="card-body">
        <router-link to="/GooseGameLayout">Jeu de l'oie</router-link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/images/Backgrounds/Warriors_043355.png" class="card-img-top" alt="Warriors_043355.png">
      <div class="card-body">
        <router-link to="/TreasureHunt">Chasse au trésor</router-link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/images/Backgrounds/Warriors_043355.png" class="card-img-top" alt="Warriors_043355.png">
      <div class="card-body">
        <router-link to="/Quest">Quêtes</router-link>
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