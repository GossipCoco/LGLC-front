<template>
  <div
    class="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 card-global"
  >
    <div class="card border-none fiction-card">
      <TitleHeaderDashboard v-bind:title="'Lire des fictions'" />
      <div
        class="card-body display-flex-column align-items-content-justify-content"
      >
        <div v-for="(game, index) in fiveGames" :key="index">
          <div
            class="list-fictions-dashboard display-flex-row list-all-fictions-globale--container"
            v-for="(fiction, index) in game.Fiction"
            :key="index"
          >
            <div class="rond-image-illustration">
              <ImageRondDashboard
                v-bind:src="fiction.Image"
                v-bind:alt="fiction.Image"
              />
            </div>
            <div class="summaray-title-text">
              <p>
                <span class="link-to-fiction-text">
                  <router-link :to="'/fiction/' + fiction.Title">
                    {{ fiction.Title }}
                  </router-link> </span
                ><br />
                <span v-html="truncateText(fiction.Summary, 35)"></span>
              </p>
            </div>
          </div>
        </div>
        <p>
          <router-link
            type="button"
            class="btn btn-primary"
            to="/AllExistingFictionsLayout"
            >Lire des fictions</router-link
          >
        </p>
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
        step: 4,
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