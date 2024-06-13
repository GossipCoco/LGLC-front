<template>
  <div class="character-details card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <div class="card-image" v-bind:style="{ backgroundImage: 'url(/images/Backgrounds/' + background + ')' }">
          <img  class="img-fluid"  :src="'/images/Characters/' + image" :alt="image"/>
        </div>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <div class="row">
            <div class="col-12">
              <p class="card-text">
                <router-link to="/allCharacters" type="button" class="btn btn-primary">Retour à la liste des
                  personnages</router-link>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="information-global-character">
                <div class="character-info-general-container" v-for="(char, index) in character" :key="index">
                  <div class="identity-character-container">
                    <h5 class="card-title">{{ currentName }}</h5>
                    <p>{{ char.Warrior.Clan.Name }}</p>
                    <p class="card-text">
                      {{ char.Genre }}
                    </p>
                  </div>

                  <div class="clan-logo-container">
                    <img :src="'/images/Clans/' + char.Warrior.Clan.Symbol" class="img-fluid" />
                  </div>

                </div>
                <p class="card-text">
                  {{ description }}
                </p>
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
</template>
<script>
import CharacterService from "../../services/CharacterService";
export default {
  name: "CharacterDetails",
  data() {
    return {
      url: "",
      character: {},
      image: null,
      background: null,
      currentName: null,
      genre: null,
      age: null,
      description: null,
      grade: null,
      Biography: null,
    }
  },
  created() {

  },
  mounted() {
    this.url = this.$route.params.id;
    console.log(this.url);
    this.getCharacter();
  },
  methods: {
    getCharacter() {
      CharacterService.getCharacterByName(this.url)
        .then((response) => {
          this.character = response.data.ob
          this.image = response.data.ob[0].Image
          this.background = response.data.ob[0].Warrior.Clan.Image
          this.currentName = response.data.ob[0].CurrentName
          this.genre = response.data.ob[0].Genre
          this.age = response.data.ob[0].Age
          this.description = response.data.ob[0].Description
          this.Biography = response.data.ob[0].Biography
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
