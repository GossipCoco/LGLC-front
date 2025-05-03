<template>
  <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 card-global">
    <div class="card background-lineart border-none fiction-card all-fictions-card">
      <TitleHeaderDashboard v-bind:title="'Lire des fictions'"  v-bind:type="'fictions'" v-bind:route="'/AllExistingFictionsLayout'" v-bind:nameRoute="'Lire des fictions'"/>
      <div class="card-body padding-2-vh display-flex-column">        
          <div
            class="list-fictions-dashboard display-flex-row list-all-fictions-globale--container width-100-vh last-all-list-fiction-container padding-2-vh"
            v-for="(fiction, index) in fiveGames"
            :key="index"
          >
              <ImageRondDashboard
                v-bind:src="fiction.Image"
                v-bind:alt="fiction.Image"
              />
            <div class="summary-title-text font-variant-small-caps text-ternary-green">
              <p>
                <span class="link-to-fiction-text">
                  <router-link class="poppins-text text-ternary-green font-size-1-25 font-weight-600" :to="'/fiction/' + fiction.Title">
                    {{ fiction.Title }}
                  </router-link> </span
                ><br />
                <span class="text-white font-variant-normal poppins-text" v-html="truncateText(fiction.Summary, 160)"></span>
              </p>
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