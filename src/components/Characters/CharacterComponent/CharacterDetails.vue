<template>
  <div class="character-details card mb-3">
    <div class="parallax">
      <div class="parallax-layer parallax-layer-back">
        <div class="row g-0">
          <div class="col-4 col-md-4">
            <div class="parallax">
              <div class="parallax__layer parallax__layer--back">
                <div class="card-image"
                  v-bind:style="{ backgroundImage: 'url(/images/Backgrounds/' + background + ')' }">
                  <div class="vegetal-container">
                    <div class="parallax__layer parallax__layer--base">
                    <img class="img-fluid" :src="'/images/Characters/' + image" :alt="image" />
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-8 col-md-8">
            <div class="card-body details-infos-characters">
              <div class="row">
                <div class="col-8">
                  <h2 class="card-title">{{ currentName }}</h2>
                </div>
                <div class="col-4">
                  <p class="card-text">
                    <router-link to="/allCharacters" type="button" class="btn btn-primary">
                      Retour à la liste des personnages
                    </router-link>
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="information-global-character">
                    <div class="character-info-general-container">
                      <div class="identity-character-container">                        
                        <p><span>Clan : </span>{{ NameClan }}</p>
                        <p><span>Chaton : </span>{{ kitty }}</p>
                        <p><span>Apprenti : </span>{{ apprentice }}</p>
                        <p><span>Guerrier : </span>{{ warrior }}</p>
                        <p class="card-text" v-html="genre"></p>
                      </div>
                      <div class="clan-logo-container">
                        <img :src="'/images/clans/' + Symbol" class="img-fluid" />
                      </div>
                    </div>
                    <p class="card-text" v-html="description"></p>
                    <p class="card-text" v-html="personnality"></p>
                    <p class="card-text biographie-text" v-html="Biography">
                    </p>
                    <p class="card-text">
                      <small class="text-muted"></small>
                    </p>
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
    }
  },
  created() {

  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.url = this.$route.params.id;
    this.getCharacter(this.url);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const layers = document.querySelectorAll('.parallax__layer');
      layers.forEach(layer => {
        const depth = layer.getAttribute('data-depth');
        const movement = -(window.scrollY * depth);
        const translate3d = 'translate3d(0, ' + movement + 'px, 0)';
        layer.style.transform = translate3d;
      });
    },
    getCharacter(id ){
      CharacterService.getCharacterByName(id)
        .then((response) => {
          this.character = response.data.ob
          console.log(this.character)
          this.Symbol = this.character.Clan.Symbol
          this.NameClan = this.character.Clan.Name
          this.image = response.data.ob.Image
          this.background = response.data.ob.Clan.Image
          this.currentName = response.data.ob.CurrentName
          this.genre = response.data.ob.Genre
          this.age = response.data.ob.Age
          this.kitty = response.data.ob.KitName
          this.apprentice = response.data.ob.ApprenticeName
          this.warrior = response.data.ob.WarriorName
          this.description = response.data.ob.Description
          this.Biography = response.data.ob.Biography
          this.personnality = response.data.ob.Personnality
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
