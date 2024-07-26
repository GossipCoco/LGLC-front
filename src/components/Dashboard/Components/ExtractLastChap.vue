<template>
  <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-12 col-sm-12 col-xs-12 card-global">
    <div class="card fiction-card">
      <TitleHeaderDashboard v-bind:title="'Mes derniers chapitres'" />
      <div class="card-body">
        <div
          class="list-all-fictions-globale--container"
          v-for="(chapter, index) in FiveLastChapters"
          :key="index"
        >
          <div class="rond-image-illustration">
            <ImageRondDashboard
              v-bind:src="'/images/Fictions/' + chapter.Image"
              v-bind:alt="chapter.Image"
            />
          </div>
          <div class="summaray-title-text">
            <p>
              {{ chapter.Fiction.Title }}
            </p>
            <p>
              <router-link :to="'/chapter/' + chapter.Title">
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