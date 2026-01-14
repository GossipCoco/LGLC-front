<template>
  <div
    class="col-xxl-3 col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 card-global"
  >
    <div class="card height-60-vh background-lineart border-none fiction-card">
      <TitleHeaderDashboard
        v-bind:title="'Mes 4 dernières fictions'"
        v-bind:type="'fictions'"
        v-bind:route="'/createANewFiction'"
        v-bind:nameRoute="'Nouvelle fiction'"
      />
      <div
        class="card-body all-last-three-fictions-container padding-0 margin-0-rem display-flex-column align-items-content-justify-content"
      >
        <div v-for="(fiction, index) in GamesAndFictions" :key="index" class="title-text-novel display-block flex-one display-flex-column justify-content-left">
          <div class="title-text-novel  padding-0 flex-one display-flex-row justify-content-left">
          <ImageRondDashboard
            v-bind:src="fiction.Image"
            v-bind:alt="fiction.Image"
            v-bind:edit="false"
            v-bind:ImgClass="'width-10-vh height-10-vh'"
          />
          <div
            class="title-text-novel margin-0-0-0-1vh padding-0 font-variant-small-caps display-block flex-one display-flex-column justify-content-left"
          >
            <p class="poppins-text margin-0-rem width-35-vh">
              <router-link
                class="poppins-text text-ternary-green font-size-1em"
                :to="'/fiction/' + fiction.Title"
              >
                {{ fiction.Title }}
              </router-link>
            </p>
            <div v-html="truncateText(fiction.Summary, 50)" class="font-size-1 text-white text-align-justify poppins-text width-35-vh"></div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GameService from "../../../services/GameService";
import TitleHeaderDashboard from "../../Components/SpecificComponent/TitleHeaderDashboard.vue";
import ImageRondDashboard from "../../Components/SpecificComponent/ImageRondDashboard.vue";
export default {
  name: "LastFiveFictions",
  components: { TitleHeaderDashboard, ImageRondDashboard },
  data() {
    return {
      usrId: this.$store.state.auth.user.usrID,
      GamesAndFictions: {},
      fictionInfo: {},
    };
  },
  created() {
    this.GetFiveLastGameByUser(this.usrId);
  },
  methods: {
    truncateText(text, maxLength) {
      if (text.length <= maxLength) {
        return text;
      }
      return text.substring(0, maxLength) + "...";
    },
    GetFiveLastGameByUser(e) {
      GameService.GetFiveLastGameByUser(e)
        .then((response) => {
          this.GamesAndFictions = response.data.ob;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>