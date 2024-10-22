<template>
  <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 card-global">
    <div class="card background-lineart border-none fiction-card game-container">
        <TitleHeaderDashboard
            v-bind:title="'Nos jeux'"
            v-bind:type="'chapters'"
        />
        <div class="card-boy">
          <div class="display-flex-column align-items-content-justify-content">
            <div class=" display-flex-row align-items-content-justify-content">
              <img src="../../../../public/images/Game/puzzle.png">
              <p><router-link to="/puzzle">Jeu du puzzle</router-link> : Résous des puzzles en temps record et gagne des points</p>
            </div>
          </div>
          <div class="display-flex-column align-items-content-justify-content">
            <div class=" display-flex-row align-items-content-justify-content">
              <img src="../../../../public/images/Game/mouse01.png" />
              <p><router-link to="/puzzle">Attrape la souris! </router-link> : Fais preuve d'habilité pour capturer un maximum de sours et gagne des points</p>
            </div>
          </div>
          <div class="display-flex-column align-items-content-justify-content">
            <div class=" display-flex-row align-items-content-justify-content">
              <img src="../../../../public/images/Game/oie01.png" />
              <p><router-link to="/puzzle">Jeu de l'Oie</router-link> : Joue au jeu de l'oie, trouve des trésors et gagne des points</p>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import TitleHeaderDashboard from '../../Components/SpecificComponent/TitleHeaderDashboard.vue';
export default {
    name:'GamesLinks',
    components:{TitleHeaderDashboard}
}
</script>