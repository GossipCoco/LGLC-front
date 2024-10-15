<template>
  <div class="card card-image-layout clan-detail-layout mb-3 background-color-white display-flex-row ">
    <div
      class="card-image clan-detail-card background-color-white border-card-color background-size-cover"
      v-bind:style="{
        backgroundImage: 'url(' + location.Image + ')',
      }"
    ></div>
    <div class="card-body background-color-main-lineart details-infos-characters">
      <h5 class="card-title">{{ location.Name }}</h5>
      <div class="card-text">
        <div v-html="location.Description"></div>
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
    this.GetLocationById(this.url)
  },
  methods: {
    GetLocationById(id) {
      ClansServices.GetLocationById(id)
        .then((response) => {
            console.log(response)
          this.location = response.data.ob;
          console.log(this.location)
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>