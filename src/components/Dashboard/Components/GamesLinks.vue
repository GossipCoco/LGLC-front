<template>
  <div class="col-xxl-5 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 card-global">
    <div class="card background-lineart border-none fiction-card game-container">
        <TitleHeaderDashboard
            v-bind:title="'Nos jeux'"
            v-bind:type="'chapters'"
        />
        <div class="card-boy">
          <div class="display-flex-column align-items-content-justify-content">
            <div class=" display-flex-column align-items-content-justify-content">
              <img src="../../../../public/images/Game/puzzle.png">
              <div class=" display-flex-column align-items-content-justify-content">
                <p><router-link class="text-white" to="/puzzle">Jeu du puzzle</router-link></p>
                <p class="text-white"> Résous des puzzles en temps record et gagne des points</p>
            </div>
            </div>
          </div>
          <div class="display-flex-column align-items-content-justify-content">
            <div class=" display-flex-column align-items-content-justify-content">
              <img src="../../../../public/images/Game/mouse01.png" />
              <div class=" display-flex-column align-items-content-justify-content">
                <p><router-link class="text-white" to="/puzzle">Attrape la souris! </router-link></p>
                <p class="text-white">Fais preuve d'habilité pour capturer un maximum de sours et gagne des points</p>
                </div>
            </div>
          </div>
          <div class="display-flex-column align-items-content-justify-content">
            <div class=" display-flex-column align-items-content-justify-content">
              <img src="../../../../public/images/Game/oie01.png" />
              <div class=" display-flex-column align-items-content-justify-content">
                <p><router-link class="text-white" to="/puzzle">Jeu de l'Oie</router-link></p>
                <p class="text-white">Joue au jeu de l'oie, trouve des trésors et gagne des points</p>
            </div>
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