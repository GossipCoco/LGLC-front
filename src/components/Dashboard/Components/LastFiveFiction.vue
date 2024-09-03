<template>
  <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12  card-global">
    <div class="card  fiction-card">      
      <TitleHeaderDashboard v-bind:title="'Mes 2 dernières fiction'" />
      <div class="card-body">
        <div v-for="(game, index) in GamesAndFictions" :key="index">
          <div v-for="(fiction, index) in game.Fiction" :key="index" class="display-flex-row list-all-fictions-globale--container">
            <div class="rond-image-illustration">
              <ImageRondDashboard v-bind:src="'/images/Fictions/' + fiction.Image" v-bind:alt="fiction.Image" />
            </div>
            <div class="summaray-title-text">
              <p><router-link :to="'/fiction/' + fiction.Title">{{ fiction.Title }}</router-link><br>
                <span v-html="truncateText(fiction.Summary, 55)"></span>
              </p>
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
          this.GamesAndFictions = response.data.data
        })
        .catch((error) => {
          console.error(error);
        });
    },
  }
}
</script>