<template>
  <div class="card card-image-layout clan-detail-layout display-flex-row mb-3">
    <div class="row g-0">
      <cardImageBackground v-bind:Image="Image">
        <div
          class="col-2 display-flex-row align-items-content-justify-content"
          v-for="(character, index) in limitedCharacters"
          :key="index"
        >
          <img
            class="height-auto width-100-percent"
            :src="character.Character.Image"
            :alt="character.Characterimage"
            width="250px"
            height="350px"
          />
        </div>
      </cardImageBackground>
      <div class="col-8 col-md-8 flex-one background-color-main-lineart display-flex-column location-clan-card-details">
        <CardHeader v-bind:Title="clan.Name">
          <img :src="'/images/clans/' + clan.Symbol"/>
        </CardHeader>
        <div class="card-body text-white background-color-main-lineart details-infos-characters poppins-text text-white">
          <div class="card-text text-align-justify">
            <div class="text-align-justify poppins-text" v-html="clan.Description"></div>
            <CharactersListe v-bind:characters="clan.Warriors" />
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
import CardHeader from "../Components/GenericComponent/CardHeader.vue";
export default {
  name: "ClanDetails",
  components: { CharactersListe, cardImageBackground, CardHeader },
  data() {
    return {
      url: "",
      clan: {},
      CurrentName: null,
      Image: null,
    };
  },
  computed: {
    limitedCharacters() {
      // Limite le nombre de personnages à 3
      return this.clan.Warriors ? this.clan.Warriors.slice(0, 3) : [];
    },
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
          this.Image = response.data.ob.Image;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
