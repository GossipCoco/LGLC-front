<template>
  <div
    id="existing-character"
    class="overflowY-auto character-details width-100-100 height-90 background-none border-none padding-2-vh card mb-3"
  >
    <div class="row">
      <CharacterImageDetail v-bind:Image="background">
        <h1 class="card-title cinzel text-white">{{ currentName }}</h1>
        <img
          class="height-auto display-block width-30-vh overflow-hidden"
          :src="image"
          :alt="image"
        />
      </CharacterImageDetail>
    </div>
    <div class="row">
      <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div
          class="card border-none height-85 background-color-main-lineart details-infos-characters border-radius-12px poppins-text text-white margin--1vh-0-0-0-0"
        >
          <div class="card-body height-85">
            <div class="row display-flex-row">
              <div class="col-9"></div>
              <div class="col-3 display-flex-column">
                <router-link
                  to="/allCharacters"
                  type="button"
                  class="btn btn-primary text-align-justify poppins-text text-white file-character-btn margin-0-0-2vh-0"
                >
                  Tous les personnages
                </router-link>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="information-global-character">
                  <div
                    class="display-flex-row character-info-general-container"
                  >
                    <div class="row">
                      <div
                        class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"
                      >
                        <CharacterTabs                        
                          v-bind:ClanId="ClanId"
                          v-bind:symboleClan="symboleClan"
                          v-bind:NameClan="NameClan"
                          v-bind:genre="genre"
                          v-bind:Grade="Grade"
                          v-bind:kitty="kitty"
                          v-bind:apprentice="apprentice"
                          v-bind:warrior="warrior"
                          v-bind:Description="description"
                          v-bind:Personnality="personnality"
                          v-bind:Biography="character.Biography"
                          v-bind:Relation="Relation"
                          v-bind:Fictions="Fictions"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CharacterService from "../../../services/CharacterService";
import CharacterImageDetail from "../GenericComponent/CharacterImageDetail.vue";
import CharacterTabs from "../GenericComponent/CharacterTabs.vue";

export default {
  name: "CharacterDetails",
  components: {
    CharacterTabs,
    CharacterImageDetail,
  },
  data() {
    return {
      url: "",
      character: {},
      image: null,
      background: null,
      currentName: null,
      kitty: null,
      apprentice: null,
      warrior: null,
      genre: null,
      age: null,
      description: null,
      grade: null,
      Biography: null,
      personnality: null,
      NameClan: null,
      symboleClan: null,
      ClanId: null,
      Grade: null,
      Relation: {},
      Fictions: {},
    };
  },
  created() {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.url = this.$route.params.id;
    this.getCharacter(this.url);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const layers = document.querySelectorAll(".parallax__layer");
      layers.forEach((layer) => {
        const depth = layer.getAttribute("data-depth");
        const movement = -(window.scrollY * depth);
        const translate3d = "translate3d(0, " + movement + "px, 0)";
        layer.style.transform = translate3d;
      });
    },
    getCharacter(id) {
      CharacterService.getCharacterByName(id)
        .then((response) => {
          this.character = response.data.ob;
          this.symboleClan = this.character.Clan.Symbol;
          this.ClanId = this.character.Clan.Id;
          this.NameClan = this.character.Clan.Name;
          this.image = response.data.ob.Image;
          this.background = response.data.ob.Clan.Image;
          this.currentName = response.data.ob.CurrentName;
          this.genre = response.data.ob.Genre;
          this.age = response.data.ob.Age;
          this.kitty = response.data.ob.KitName;
          this.apprentice = response.data.ob.ApprenticeName;
          this.warrior = response.data.ob.WarriorName;
          this.description = response.data.ob.Description;
          this.Biography = response.data.ob.Biography;
          this.personnality = response.data.ob.Personnality;
          this.Grade = response.data.ob.Grade.Name;
          this.Relation = response.data.ob.RelationsOne;
          this.Fictions = response.data.ob.GameCharacters;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
