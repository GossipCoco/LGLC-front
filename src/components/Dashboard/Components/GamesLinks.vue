<template>
  <div
    class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 card-global"
  >
    <div
      class="card height-60-vh background-lineart border-none fiction-card game-container"
    >
      <TitleHeaderDashboard
        v-bind:title="'Nos jeux'"
        v-bind:type="'chapters'"
      />
      <div class="card-body height-60-vh ">
        <div class="row">
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div class="display-flex-column align-items-content-justify-content padding-2-vh">
              <div class="display-flex-column align-items-content-justify-content">
                <div class="display-flex-row align-items-content-justify-content">
                  <img loading="lazy" src="../../../../public/images/Game/puzzle.png"/>
                  <p>
                    <router-link class="text-white poppins-text" to="/puzzle">
                      Jeu du puzzle
                    </router-link>
                  </p>
                </div>
                <div class="display-flex-column align-items-content-justify-content">
                  <p class="text-white poppins-text">
                    Résous des puzzles en temps record et gagne des points
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div class="display-flex-column align-items-content-justify-content">
              <div class="display-flex-column align-items-content-justify-content">
                <div class="display-flex-row align-items-content-justify-content">
                  <img loading="lazy" src="../../../../public/images/Game/mouse01.png"/>
                  <p>
                    <router-link class="text-white poppins-text" to="/mouseShot"
                      >Attrape la souris!
                    </router-link>
                  </p>
                </div>
                <div class="display-flex-column align-items-content-justify-content">
                  <p class="text-white poppins-text">
                    Fais preuve d'habilité pour capturer un maximum de sours et
                    gagne des points
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div class="display-flex-column align-items-content-justify-content padding-2-vh">
              <div class="display-flex-column align-items-content-justify-content">
                <div class="display-flex-row align-items-content-justify-content">
                  <img loading="lazy" src="../../../../public/images/Game/treasure.png"/>
                  <p>
                    <router-link class="text-white poppins-text" to="/TreasureHunt">
                      Chasse au trésor
                    </router-link>
                  </p>
                </div>
                <div class="display-flex-column align-items-content-justify-content">
                  <p class="text-white poppins-text">
                    Trouve tous les trésors et gagne des points
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div class="display-flex-column align-items-content-justify-content">
              <div class="display-flex-column align-items-content-justify-content">
                <div class="display-flex-row align-items-content-justify-content">
                  <img loading="lazy" src="../../../../public/images/Game/dice.png"/>
                  <p>
                    <router-link class="text-white poppins-text" to="/rollOfDice"
                      >Jeu de Dé
                    </router-link>
                  </p>
                </div>
                <div class="display-flex-column align-items-content-justify-content">
                  <p class="text-white poppins-text">
                    Réalise un beau score et gagne des points
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div class="display-flex-column align-items-content-justify-content">
              <div class="display-flex-column align-items-content-justify-content">
                <div class="display-flex-row align-items-content-justify-content">
                  <img loading="lazy" src="../../../../public/images/Game/oie01.png"/>
                  <p>
                    <router-link class="text-white poppins-text" to="/GooseGameLayout">Jeu de l'Oie</router-link>
                  </p>
                </div>
                <div class="display-flex-column align-items-content-justify-content">
                  <p class="text-white poppins-text">
                    Joue au jeu de l'oie, trouve des trésors et gagne des points
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div class="display-flex-column align-items-content-justify-content">
              <div class="display-flex-column align-items-content-justify-content">
                <div class="display-flex-row align-items-content-justify-content">
                  <img loading="lazy" src="../../../../public/images/Game/quête.png"/>
                  <p>
                    <router-link class="text-white poppins-text" to="/Quest">Quêtes</router-link>
                  </p>
                </div>
                <div class="display-flex-column align-items-content-justify-content">
                  <p class="text-white poppins-text">
                    Réalise et accomplis des quêtes pour gagner des points
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TitleHeaderDashboard from "../../Components/SpecificComponent/TitleHeaderDashboard.vue";
export default {
  name: "GamesLinks",
  components: { TitleHeaderDashboard },
};
</script>