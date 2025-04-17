<template>
  <div class="character-container  overflowY-scroll overflowX-hidden clans-location-container">
    <div class="display-flex-row card-group clan-group">
      <div v-for="(clan, index) in clans" :key="index">
        <div class="card background-color-dark-green-01 location-clan-background-width-container">
          <div
            class="card-image clan-card height-20-rem background-size-cover"
            v-bind:style="{
              backgroundImage: 'url(' + clan.Image + ')',
            }"
          ></div>
          <div class="card-header display-flex-row align-items-content-justify-content">
            <div class="display-flex align-items-content-justify-content">
              
                <router-link
                  type="button"
                  class="btn btn-primary"
                  :to="'/clan/' + clan.Id"
                  >{{ clan.Name }}</router-link
                >
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
import ClanService from "../../services/ClansServices";
export default {
  name: "AllClans",
  data() {
    return {
      imageChar: "",
      clans: {},
    };
  },
  mounted() {
    this.getAllClans();
  },
  methods: {
    truncateText(text, maxLength) {
      if (text.length <= maxLength) {
        return text;
      }
      return text.substring(0, maxLength) + "...";
    },
    getAllClans() {
      ClanService.getAllClans()
        .then((response) => {
          this.clans = response.data.ob;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>