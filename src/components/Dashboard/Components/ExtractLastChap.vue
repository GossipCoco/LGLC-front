<template>
  <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 card-global">
    <div class="card background-lineart border-none fiction-card">
      <TitleHeaderDashboard v-bind:title="'Mes 4 derniers chapitres'" v-bind:type="'chapters'"/>
      <div class="card-body last-chapter-card display-flex-column align-items-content-justify-content">
        <div
          class="display-flex-row list-all-fictions-globale--container three-last-chapters-container"
          v-for="(chapter, index) in FiveLastChapters"
          :key="index"
        >
            <ImageRondDashboard
              v-bind:src=" chapter.Image"
              v-bind:alt="chapter.Image"
            />
          <div class="summaray-title-text flex-one display-flex-column align-items-content-justify-content">
            <p>
              <span class="last-chapter-text poppins-text font-size-1-25 font-weight-600 font-variant-small-caps">{{ chapter.Fiction.Title }}</span>
            </p>
            <p>
              <router-link class="last-chapter-text poppins-text font-size-1-25 font-weight-600 font-variant-small-caps text-white" :to="'/chapter/' + chapter.Title">
                {{ chapter.Title }}
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FictionService from "../../../services/FictionService";
import TitleHeaderDashboard from "../../Components/SpecificComponent/TitleHeaderDashboard.vue";
import ImageRondDashboard from "../../Components/SpecificComponent/ImageRondDashboard.vue";
export default {
  name: "ExtractLastChap",
  components: { TitleHeaderDashboard, ImageRondDashboard },
  data() {
    return {
      usr: this.$store.state.auth.user.usrID,
      FiveLastChapters: {},
      Title: null,
      Fiction: null,
    };
  },
  created() {
    this.GetFiveLastChapByUser(this.usr);
  },
  methods: {
    GetFiveLastChapByUser(user) {
      FictionService.GetFiveLastChapByUser(user)
        .then((response) => {
          this.FiveLastChapters = response.data.ob;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>