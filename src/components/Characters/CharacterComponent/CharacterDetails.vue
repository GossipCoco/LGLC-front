<template>
  <div class="character-details card mb-3">
    <div class="parallax">
      <div class="parallax-layer parallax-layer-back">
        <div class="row g-0">
          <div class="col-4 col-md-4">
            <div class="parallax">
              <div class="parallax__layer parallax__layer--back">
                <div
                  class=" character-details-card background-size-cover diaplay-flex background-size-cover card-image border-card-color"
                  v-bind:style="{
                    backgroundImage:
                      'url(/images/Backgrounds/' + background + ')',
                  }"
                >
                  <div class="vegetal-container">
                    <div class="parallax__layer parallax__layer--base">
                      <img
                        class="img-fluid"
                        :src="image"
                        :alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-8 col-md-8">
            <div class="card-body background-color-main-lineart details-infos-characters">
              <div class="row">
                <div class="col-10">
                  <h1 class="card-title">{{ currentName }}</h1>
                </div>
                <div class="col-2">
                  <p class="card-text">
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
                      <div class="display-flex-column flex-one">
                        <table class="table table-borderless">
                          <tr>
                            <td><strong>Clan:</strong></td>
                            <td>{{ NameClan }}</td>
                          </tr>                          <tr>
                            <td><strong>Genre:</strong></td>
                            <td>{{ genre }}</td>
                          </tr>
                          <tr>
                            <td><strong>Grade:</strong></td>
                            <td>{{ Grade }}</td>
                          </tr>
                          <tr></tr>
                          <tr>
                            <td><strong>Chaton:</strong></td>
                            <td>{{ kitty }}</td>
                          </tr>
                          <tr>
                            <td><strong>Apprenti:</strong></td>
                            <td>{{ apprentice }}</td>
                          </tr>
                          <tr>
                            <td><strong>Guerrier:</strong></td>
                            <td>{{ warrior }}</td>
                          </tr>
                        </table>
                      </div>
                      <div class="clan-logo-container">
                        <router-link type="button" class="btn btn-primary" :to="'/clan/'+ClanId">
                          <img
                          :src="'/images/clans/' + Symbol"
                          class="img-fluid"
                        />
                      </router-link>

                      </div>
                    </div>
                    <div class="accordion" id="characterDetailsAccordion">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                          <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="true"
                            aria-controls="collapseTwo"
                          >
                            Description
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          class="accordion-collapse collapse show"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#characterDetailsAccordion"
                        >
                          <div
                            class="accordion-body">
                            <div v-html="description"></div>                            
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item" v-if="personnality != null">
                        <h2 class="accordion-header" id="headingZero">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseZero"
                            aria-expanded="false"
                            aria-controls="collapseZero"
                          >
                            Personnalité
                          </button>
                        </h2>
                        <div 
                          id="collapseZero"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingZero"
                          data-bs-parent="#characterDetailsAccordion"
                        >
                          <div class="accordion-body">
                            <div v-html="personnality"></div>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                          <button
                            class="accordion-button  collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            Biographie
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#characterDetailsAccordion"
                        >
                          <div class="accordion-body">
                            <div v-html="Biography"></div>
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
    </div>
  </div>
</template>
<script>
import CharacterService from "../../../services/CharacterService";
export default {
  name: "CharacterDetails",
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
          console.log(this.character)
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
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
