<template>
  <div
    class="card card-image-layout clan-detail-layout mb-3 background-color-white display-flex-row"
  >
    <div class="row g-0">
      <div
        class="card-image clan-detail-card background-color-white border-card-color  display-flex-row align-items-content-justify-content background-size-cover"
        v-bind:style="{ backgroundImage: 'url(' + location.Image + ')' }"
      ></div>
      <div class="col-8 col-md-8 display-flex-column flex-one location-clan-card-details">
        <div class="card background-color-main-lineart location-clan-card">
        <div class="card-header">{{ location.Name }}</div>
        <div class="card-body background-color-main-lineart details-infos-characters poppins-text text-white location-clan-body card-details-body">         
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
export default {
  name: "LocationDetails",
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
          console.log(response);
          this.location = response.data.ob;
          console.log(this.location);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>