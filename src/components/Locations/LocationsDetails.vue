<template>
  <div
    class="card card-image-layout clan-detail-layout mb-3 background-color-white display-flex-row"
  >
    <div class="row g-0">
      <div
        class="card-image clan-detail-card background-color-white border-card-color  display-flex-row align-items-content-justify-content background-size-cover"
        v-bind:style="{ backgroundImage: 'url(' + location.Image + ')' }"
      ></div>
      <div class="col-8 col-md-8 flex-one">
        <div
          class="card-body white-text background-color-main-lineart details-infos-characters"
        >
          <h5 class="card-header">{{ location.Name }}</h5>
          <div class="card-text text-align-justify">
            <div class="text-align-justify"  v-html="location.Description"></div>
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