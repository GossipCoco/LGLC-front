<template>
  <div class="character-details background-color-main-lineart card mb-3">
    <div class="parallax">
      <div class="parallax-layer parallax-layer-back width-100-percent">
        <div class="row g-0">
          <CharacterImageDetail v-bind:Image="background">
            <img
                class="height-auto width-100-percent"
                :src="image"
                :alt="image"
              />
          </CharacterImageDetail>
          <div class="col-8 col-md-8">
            <div class="card-body background-color-main-lineart details-infos-characters poppins-text text-white">
              <div class="row">
                <div class="col-5">
                  <h1 class="card-title cinzel">{{ currentName }}</h1>
                </div>
                <ButtonCreationCharacter v-bind:class="'col-3'"/>
                <div class="col-4">                  
                  <p class="card-text text-align-justify poppins-text text-white">
                    <router-link
                      to="/allCharacters"
                      type="button"
                      class="btn btn-primary file-character-btn"
                    >
                      Retour à la liste des personnages
                    </router-link>
                  </p>                  
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="information-global-character">
                    <div class="display-flex-row character-info-general-container">
                      <TableInformationCharacter
                        v-bind:NameClan="NameClan"
                        v-bind:genre="genre"
                        v-bind:Grade="Grade"
                        v-bind:kitty="kitty"
                        v-bind:apprentice="apprentice"
                        v-bind:warrior="warrior"
                      />
                      
                      <div class="clan-logo-container">
                        <router-link type="button" class="btn btn-primary" :to="'/clan/'+ClanId">
                          <img
                            :src="'/images/clans/' + Symbol"
                            class="height-auto width-100-percent"
                          />
                        </router-link>
                      </div>
                    </div>
                    <CharacterTabs
                    v-bind:Description="description"
                    v-bind:Personnality="personnality"
                    v-bind:Biography="character.Biography"
                    v-bind:Relation="Relation"
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
</template>
<script>
import CharacterService from "../../../services/CharacterService";
import CharacterImageDetail from "../GenericComponent/CharacterImageDetail.vue";
import CharacterTabs from "../GenericComponent/CharacterTabs.vue";
import TableInformationCharacter from "../GenericComponent/TableInformationCharacter.vue";
import ButtonCreationCharacter from "../../Components/FormComponent/ButtonCreationCharacter.vue";
export default {
  name: "CharacterDetails",
  components: {TableInformationCharacter, ButtonCreationCharacter, CharacterTabs, CharacterImageDetail},
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
      Relation: {}
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
          this.Symbol = this.character.Clan.Symbol;
          this.ClanId = this.character.Clan.Id
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
          this.Grade = response.data.ob.Grade.Name
          this.Relation = response.data.ob.RelationsOne

        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
