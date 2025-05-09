<template>
  <div class="row top-left-dashboard">
    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 card-global">
      <div class="card background-lineart border-none arc-card last-arc-container height-40-vh margin-0-0-0-1vh">
        <TitleHeaderDashboard
          v-bind:title="'Dernier arc en cours'"
          v-bind:type="'chapters'"
        />
        <div class="card-body new-current-arc-container padding-2-vh text-white height-30-vh">
          <h2 class="align-items-content-justify-content">
            <router-link            
            class="poppins-text color-clear-green-01"
            :to="'/OneArc/'+ Id">
                  {{ Title }}
             </router-link>
          </h2>
          <div class="summary-book-dashboard display-flex-row align-items-content-justify-content width-70-vh margin--0-0--4">
            <img :src="Image" width="20%" class="border-radius-12px"/>
            <div v-html="Summary" class="text-white text-align-justify overflowY-scroll summmary-book-height-dashboard poppins-text text-white padding-1-vh"></div>
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
        Id: null,
        Image: null,
        Title: null,
        Summary: null
    };
  },
  mounted() {
    ArcBookService.GetCurrentArc()
      .then(response => {        
        this.currentArc = response.data.ob;
        this.Id = this.currentArc.Id
        this.Image = this.currentArc.Image
        this.Title = this.currentArc.Title
        this.Summary = this.currentArc.Summary
      })
      .catch(err => {
        console.error("Erreur lors de la récupération de l'arc :", err);
      });
  }
};
</script>