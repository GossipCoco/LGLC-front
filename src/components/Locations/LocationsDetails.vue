<template>
  <div class="card card-image-layout clan-detail-layout mb-3 background-color-white display-flex-row">
    <div class="row g-0">
      <cardImageBackground v-bind:Image=" location.Image"/>
      <div class="col-8 col-md-8 display-flex-column flex-one location-clan-card-details">
        <div class="card background-color-main-lineart location-clan-card">
          <CardHeader v-bind:Title="location.Name" />        
        <div class="card-body location-clan-body text-white background-color-main-lineart details-infos-characters poppins-text text-white">         
          <div class="card-text text-align-justify">
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