<template>
  <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12  card-global">
    <div class="card background-lineart border-none fiction-card">      
      <TitleHeaderDashboard v-bind:title="'Mes 3 dernières fictions'" v-bind:type="'fictions'" v-bind:route="'/createANewFiction'" v-bind:nameRoute="'Nouvelle fiction'"/>
      <div class="card-body all-last-three-fictions-container display-flex-column align-items-content-justify-content">
        <div v-for="(game, index) in GamesAndFictions" :key="index">
          <div v-for="(fiction, index) in game.Fiction" :key="index" class="display-flex-row list-all-fictions-globale--container">
            <ImageRondDashboard v-bind:src=" fiction.Image" v-bind:alt="fiction.Image" />
            <div class="title-text-novel flex-one display-flex-column justify-content-left">
              <p><router-link class="poppins-text text-dark-green font-size-1em" :to="'/fiction/' + fiction.Title">{{ fiction.Title }}</router-link></p>
              <div v-html="truncateText(fiction.Summary, 40)" class="text-white text-align-justify poppins-text"></div>
            </div>
          </div>
        </div>        
      </div>
    </div>
  </div>
</template>
<script>
import GameService from '../../../services/GameService'
import TitleHeaderDashboard from '../../Components/SpecificComponent/TitleHeaderDashboard.vue';
import ImageRondDashboard from '../../Components/SpecificComponent/ImageRondDashboard.vue';
export default {
  name: 'LastFiveFictions',
  components:{TitleHeaderDashboard, ImageRondDashboard},
  data() {
    return {
      usrId: this.$store.state.auth.user.usrID,
      GamesAndFictions: {},
      fictionInfo: {},
    }
  },
  created() {
    this.GetFiveLastGameByUser(this.usrId);
  },
  methods: {
    truncateText(text, maxLength) {
      if (text.length <= maxLength) {
        return text;
      }
      return text.substring(0, maxLength) + '...';
    },
    GetFiveLastGameByUser(e) {
      GameService.GetFiveLastGameByUser(e)
        .then((response) => {
          this.GamesAndFictions = response.data.ob
        })
        .catch((error) => {
          console.error(error);
        });
    },
  }
}
</script>