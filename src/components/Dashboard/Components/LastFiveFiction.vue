<template>
  <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12  card-global">
    <div class="card background-lineart border-none fiction-card">      
      <TitleHeaderDashboard v-bind:title="'Mes 3 dernières fictions'"  v-bind:type="'fictions'"/>
      <div class="card-body display-flex-column align-items-content-justify-content">
        <div v-for="(game, index) in GamesAndFictions" :key="index">
          <div v-for="(fiction, index) in game.Fiction" :key="index" class="display-flex-row list-all-fictions-globale--container">
            <div class="rond-image-illustration">
              <ImageRondDashboard v-bind:src=" fiction.Image" v-bind:alt="fiction.Image" />
            </div>
            <div class="summaray-title-text">
              <p><router-link :to="'/fiction/' + fiction.Title">{{ fiction.Title }}</router-link><br>
                <span v-html="truncateText(fiction.Summary, 55)"></span>
              </p>
            </div>
          </div>
        </div>
        <p><router-link type="button" class="btn btn-primary" to="/createANewFiction">Créer une nouvelle fiction</router-link></p>
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