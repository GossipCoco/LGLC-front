<template>
  <div class="col-xxl-7 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 card-global">
    <div class="card background-lineart border-none fiction-card all-fictions-card">
      <TitleHeaderDashboard v-bind:title="'Lire des fictions'"  v-bind:type="'fictions'" v-bind:route="'/AllExistingFictionsLayout'" v-bind:nameRoute="'Lire des fictions'"/>
      <div class="card-body display-flex-column">
        <div v-for="(game, index) in fiveGames" :key="index" class="margin-liss-allfictions-dashboard">
          <div
            class="list-fictions-dashboard display-flex-row list-all-fictions-globale--container last-all-list-fiction-container"
            v-for="(fiction, index) in game.Fiction"
            :key="index"
          >
              <ImageRondDashboard
                v-bind:src="fiction.Image"
                v-bind:alt="fiction.Image"
              />
            <div class="summaray-title-text  flex-one align-items-content-justify-content">
              <p>
                <span class="link-to-fiction-text">
                  <router-link class="poppins-text text-dark-green" :to="'/fiction/' + fiction.Title">
                    {{ fiction.Title }}
                  </router-link> </span
                ><br />
                <span class="text-white " v-html="truncateText(fiction.Summary, 50)"></span>
              </p>
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
  name: "ListAllFictions",
  components: { TitleHeaderDashboard, ImageRondDashboard },
  data() {
    return {
      fiveGames: {},
      nav: {
        current: 0,
        pages: 0,
        step: 5,
      },
    };
  },
  created() {
    this.GetAllLastFiveGames(this.nav);
  },
  methods: {
    truncateText(text, maxLength) {
      if (text.length <= maxLength) {
        return text;
      }
      return text.substring(0, maxLength) + "...";
    },
    GetAllLastFiveGames(nav) {
      GameService.GetAllLastFiveGames(nav)
        .then((response) => {
          this.fiveGames = response.data.ob;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>