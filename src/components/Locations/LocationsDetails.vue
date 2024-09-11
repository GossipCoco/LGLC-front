<template>
  <div class="card card-image-layout clan-detail-layout mb-3 display-flex-row ">
    <div
      class="card-image clan-detail-card border-card-color"
      v-bind:style="{
        backgroundImage: 'url(/images/Backgrounds/' + location.Image + ')',
      }"
    ></div>
    <div class="card-body">
      <h5 class="card-title">{{ location.Name }}</h5>
      <div class="card-text">
        <p>{{ location.Description }}</p>
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