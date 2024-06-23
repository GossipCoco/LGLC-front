<template>
  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
    <div class="card  fiction-card">
      <div class="border-gradient-decoration-bottom"></div>
      <div class="card-header">
        <h4>Mes 3 dernières fictions</h4>
      </div>
      <div class="card-body">
        <div v-for="(game, index) in GamesAndFictions" :key="index">
          <div v-for="(fiction, index) in game.Fiction" :key="index" class="list-all-fictions-globale--container">
            <div class="rond-image-illustration"> <img  class="img-fluid"  :src="'/images/Fictions/' + fiction.Image" :alt="fiction.Image" /></div>
            <div class="summaray-title-text">
              <p><router-link :to="'/fiction/' + fiction.Id">{{ fiction.Title }}</router-link><br>
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
export default {
  name: 'LastFiveFictions',
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
          console.log("GetFiveLastGameByUser", response.data.data)
          this.GamesAndFictions = response.data.data
          console.log("GetFiveLastGameByUser", this.GamesAndFictions)
        })
        .catch((error) => {
          console.error(error);
        });
    },
  }
}
</script>