<template>
  <div class="card card-image-layout clan-detail-layout display-flex-row mb-3">
    <div class="row g-0">
      <cardImageBackground v-bind:Image="Image"/>
      <div class="col-8 col-md-8 flex-one">
        <div class="card-body white-text background-color-main-lineart details-infos-characters">
          <h5 class="card-header">{{ clan.Name }}</h5>
          <div class="card-text">
            <div v-html="clan.Description"></div>
            <div class="display-flex-row flex-one align-items-content-justify-content all-characters-list-containers">
              <CharactersListe v-bind:characters="clan.Warriors" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ClanService from "../../services/ClansServices";
import CharactersListe from "../Components/GenericComponent/CharactersListe.vue";
import cardImageBackground from "../Components/GenericComponent/cardImageBackground.vue";
export default {
  name: "ClanDetails",
  components: { CharactersListe, cardImageBackground },
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
          this.Image = response.data.ob.Image
          console.log(this.clan);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
