<template>
    <div class="character-container-global clans-location-container" style="overflow-y: scroll;">
      <div class="display-flex-row card-group clan-group">
        <div v-for="(clan, index) in clans" :key="index">
          <div class="card" style="width: 30rem">
            <div
              class="card-image clan-card"
              v-bind:style="{
                backgroundImage: 'url(/images/Backgrounds/' + clan.Image + ')',
              }"
            ></div>
            <div class="card-header">{{ clan.Name }}</div>
            <div class="card-body">
              <div class="clan-description">
                <p v-html="truncateText(clan.Description, 100)">

              </p>
            </div>
            <div class="clan-link">
              <router-link type="button" class="btn btn-primary" :to="'/clan/'+clan.Id">Plus de détails</router-link>
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
      return text.substring(0, maxLength) + '...';
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