<template>
  <div class="row top-left-dashboard">
    <div
      class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 card-global"
    >
      <div
        class="card background-lineart border-none arc-card last-arc-container height-50-vh"
      >
        <TitleHeaderDashboard
          v-bind:title="'Dernier arc en cours'"
          v-bind:type="'chapters'"
        />
        <div class="card-body last-chapter-card new-current-arc-container padding-2-vh text-white">
            <div v-if="currentArc">
                <h2 class="white-text">Arc actuel : {{ currentArc.Title }}</h2>
                <div class="display-flex-row">
                  <img :src="currentArc.Image" width="25%" class="border-radius-12px"/>
                  <div v-html="currentArc.Summary" class="poppins-text padding-1-vh"></div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ArcBookService from "../../../services/ArcBookService";
import TitleHeaderDashboard from "../../Components/SpecificComponent/TitleHeaderDashboard.vue";
export default {
  name: "NewArc",
  components: { TitleHeaderDashboard },
  data() {
    return {
        currentArc: null,
    };
  },
  mounted() {
    ArcBookService.GetCurrentArc()
      .then(response => {
        console.log("Current Arc reçu :", response.data);
        this.currentArc = response.data.ob;
      })
      .catch(err => {
        console.error("Erreur lors de la récupération de l'arc :", err);
      });
  }
};
</script>