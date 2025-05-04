<template>
  <div class="card card-image-layout clan-detail-layout location-detail-container mb-3 background-color-white display-flex-row">
    <div class="row g-0">
      <div class="col-3 col-md-3">
        <cardImageBackground v-bind:Image=" location.Image"/>
      </div>
      <div class="col-9 col-md-9 display-flex-column flex-one location-clan-card-details">
        <div class="card background-color-main-lineart location-clan-card">
          <CardHeader v-bind:Title="location.Name" />        
        <div class="card-body height-77-vh location-clan-body text-white background-color-main-lineart
         details-infos-characters border-radius-12px poppins-text text-white">         
          <div class="card-text text-align-justify">
            <router-link to="/AllLocationsLayout" class="btn btn-primary">Retour à la liste des lieux</router-link>
            <div class="text-align-justify"  v-html="location.Description"></div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import ClansServices from "../../services/ClansServices";
import cardImageBackground from "../Components/GenericComponent/cardImageBackground.vue";
import CardHeader from "../Components/GenericComponent/CardHeader.vue";
export default {
  name: "LocationDetails",
  components:{CardHeader, cardImageBackground},
  data() {
    return {
      url: null,
      location: {},
    };
  },
  created() {
    this.url = this.$route.params.id;
    this.GetLocationById(this.url);
  },
  methods: {
    GetLocationById(id) {
      ClansServices.GetLocationById(id)
        .then((response) => {
          this.location = response.data.ob;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>