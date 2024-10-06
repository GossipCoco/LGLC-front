<template>
  <div
    class="character-container-global clans-location-container"
    style="overflow-y: scroll"
  >
    <div class="display-flex-row card-group clan-group">
      <div v-for="(clan, index) in clans" :key="index">
        <div class="card location-clan-background-width-container">
          <div
            class="card-image clan-card background-size-contain"
            v-bind:style="{
              backgroundImage: 'url(' + clan.Image + ')',
            }"
          ></div>
          <div class="card-header">
            <div class="display-flex align-items-content-justify-content">
              <div class="d-grid gap-2 col-8 mx-auto">
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