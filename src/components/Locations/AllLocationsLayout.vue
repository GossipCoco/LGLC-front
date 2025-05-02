<template>
  <div class="padding-0 overflowX-hidden clans-location-container overflowY-auto">
    <div class="display-flex-row card-group clan-group">
      <div v-for="(location, index) in allLocations" :key="index">
        <div class="card background-color-dark-green-01 location-clan-background-width-container">
          <div
            class="card-image clan-card height-30-vh background-size-cover"
            v-bind:style="{
              backgroundImage: 'url(' + location.Image + ')',
            }"
          ></div>
          <div class="card-header display-flex-row align-items-content-justify-content">
            <div class="display-flex align-items-content-justify-content">
              <div class="d-grid gap-2 col-8 mx-auto">
                <router-link
                  type="button"
                  class="btn btn-primary margin-15vh"
                  :to="'/LocationsDetails/' + location.Id"
                  >{{ location.Name }}</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ClanServices from "../../services/ClansServices";
export default {
  name: "AllLocationsLayout",
  data() {
    return {
      allLocations: {},
    };
  },
  created() {
    this.GetAllLocations();
  },
  methods: {
    truncateText(text, maxLength) {
      if (text.length <= maxLength) {
        return text;
      }
      return text.substring(0, maxLength) + "...";
    },
    GetAllLocations() {
      ClanServices.GetAllLocations()
        .then((response) => {
          this.allLocations = response.data.ob;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>