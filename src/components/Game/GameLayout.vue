<template>
  <div class="border-none background-color-main-lineart card">
    <div class="display-flex-row game-container  flex-one">
      <div class="button-container">
        <div class="d-grid gap-2 col-12 mx-auto">
        <router-link type="button" class="btn btn-primary" to="/rollOfDice">Jeu de dé</router-link>
        <router-link type="button" class="btn btn-primary" to="/puzzle">Puzzle</router-link>
        <router-link type="button" class="btn btn-primary" to="/mouseShot">Jeu du chat et de la souris</router-link>
        <router-link type="button" class="btn btn-primary" :to="'/allFictions/' + usrId">Mes fictions</router-link>
        <router-link type="button" class="btn btn-primary" to="/createANewFiction">Créer une nouvelle fiction</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GameLayout',
  inject: ["user"],
  data() {
    return {
      usrId: this.$store.state.auth.user.usrID,

      games: {},
      filters: [],
      nav: {
        current: 0,
        pages: 0,
        step: 6,
      },
    };
  },
  created() {

  },

}
</script>