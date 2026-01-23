<template>
  <div id="games-hub" class="margin-10vh-20vh">
    <div class="row row-cols-4 row-cols-md-4 g-4">
      <div class="col">
        <div class="card background-color-dark-green-01">
          <img
            src="/images/Backgrounds/Warriors_043355.png"
            class="card-img-top"
            alt="Warriors_043355.png"
          />
          <div class="card-body">
            <router-link to="/rollOfDice" class="text-white">Jeu de dés</router-link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card background-color-dark-green-01">
          <img
            src="/images/Backgrounds/Warriors_043355.png"
            class="card-img-top"
            alt="Warriors_043355.png"
          />
          <div class="card-body">
            <router-link to="/puzzle" class="text-white">Puzzles</router-link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card background-color-dark-green-01">
          <img
            src="/images/Backgrounds/Warriors_043355.png"
            class="card-img-top"
            alt="Warriors_043355.png"
          />
          <div class="card-body">
            <router-link to="/mouseShot" class="text-white">Attrape la souris</router-link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card background-color-dark-green-01">
          <img
            src="/images/Backgrounds/Warriors_043355.png"
            class="card-img-top"
            alt="Warriors_043355.png"
          />
          <div class="card-body">
            <router-link to="/GooseGameLayout" class="text-white">Jeu de l'oie</router-link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card background-color-dark-green-01">
          <img
            src="/images/Backgrounds/Warriors_043355.png"
            class="card-img-top"
            alt="Warriors_043355.png"
          />
          <div class="card-body">
            <router-link to="/TreasureHunt" class="text-white">Chasse au trésor</router-link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card background-color-dark-green-01">
          <img
            src="/images/Backgrounds/Warriors_043355.png"
            class="card-img-top"
            alt="Warriors_043355.png"
          />
          <div class="card-body">
            <router-link to="/Quest" class="text-white">Quêtes</router-link>
          </div>
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
    };
  },
};
</script>