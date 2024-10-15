<template>
  <div class="card card-image-layout clan-detail-layout display-flex-row mb-3">
    <div
      class="card-image clan-detail-card background-color-white border-card-color background-size-cover"
      v-bind:style="{
        backgroundImage: 'url(' + clan.Image + ')',
      }"
    ></div>
    <div class="card-body background-color-main-lineart details-infos-characters">
      <h5 class="card-title">{{ clan.Name }}</h5>
      <div class="card-text">
        <p>{{ clan.Description }}</p>
        <div class="display-flex-row flex-one align-items-content-justify-content all-characters-list-containers">
          <CharactersListe v-bind:characters="clan.Warriors" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ClanService from "../../services/ClansServices";
import CharactersListe from "../Components/GenericComponent/CharactersListe.vue";
export default {
  name: "ClanDetails",
  components:{ CharactersListe }, 
  data() {
    return {
      url: "",
      clan: {},
      CurrentName: null,
      Image: null,
    };
  },
  created() {
    this.url = this.$route.params.id;
  },
  mounted() {
    this.getClan();
  },
  methods: {
    getClan() {
      ClanService.getClanByName(this.url)
        .then((response) => {
          this.clan = response.data.ob;
          console.log(this.clan)
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
