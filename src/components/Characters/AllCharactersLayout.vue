<template>
  <div class="character-container-global">
    <div class="row row-filter">
      <div class="col-2">
        <router-link to="/CharacterCreate" type="button" class="btn btn-primary">
          Créer un nouveau personnage
        </router-link>
      </div>
      <div class="col-2">
        <button @click="showMyCharacters" type="button" class="btn btn-primary">
          Afficher mes personnages
        </button>
      </div>
      <div class="col-1">
        Filtrer :
      </div>
      <div class="col-2">
        <input type="text" class="form-control" placeholder="personnage" />
      </div>
      <div class="col-2">
        <input type="text" class="form-control" placeholder="Personnage par clan" />
      </div>
      <div class="col-2">
        <input type="text" class="form-control" placeholder="Personnage par grade" />
      </div>
      <div class="col-1">
        <button type="button" class="btn btn-primary">Rechercher</button>
      </div>
    </div>
    <div class="row all-characters-container-card" id="all-characters-container-card">
      <character-card v-bind:characters_props="allCharacters" v-if="!showMyCharacter" />
    </div>
  </div>
  <div class="row pagination-container-row">
    <div class="pagination-container">
      <div class="row bottom-top-dashboard">
        <div v-if="showspinner" class="d-flex justify-content-center">
          <div class="spinner-border text-success" role="status">
          </div>
        </div>
      </div>
      <pagination v-if="!showspinner" v-bind:nav="nav" v-bind:filters="filters" v-bind:getDatas="'CharacterPagination'"
        @CharacterPagination="CharacterPagination" />
    </div>
  </div>
</template>
<script>
import CharacterService from "../../services/CharacterService";
import CharacterCard from "./CharacterComponent/CharacterCard.vue";
import Pagination from "../Components/GenericComponent/Pagination.vue";
import functions from "../../services/functions";

export default {
  name: "AllCharacters",
  components: { CharacterCard, Pagination },
  data() {
    return {
      usr: this.$store.state.auth.user.usrID,
      userCurrent: this.$store.state.auth.user.usrID,
      showMyCharacter: false,
      allMyCharacter: {},
      NbAllCharacters: null,
      allCharacters: {},
      filters: [],
      nav: {
        current: 0,
        pages: 0,
        step: 8,
      },
      showspinner: false
    };
  },
  provide() {
    return {
      allCharacters: this.allCharacters,
    };
  },
  created() {
    this.userCurrent = this.$store.state.auth.user.usrID;
    this.initPage();
  },
  watch: {
    '$route'() {
      // This will trigger when the route changes, ensuring the data is refreshed
      this.initPage();
    }
  },
  methods: {
    initPage() {
      this.showspinner = true;
      this.getAllCharacters(this.nav);
      this.countAllCharacter();
    },
    showMyCharacters(e) {
      console.log("showMyCharacters")
      CharacterService.GetAllCharactersByUser(e)
        .then((response) => {
          console.log(response.data.ob)
        })
        .catch((e) => {
          console.log(e);
        });
    },
    CharacterPagination(e) {
      // console.log("e", e);
      this.nav.current = e;
      this.getAllCharacters(this.nav);
    },
    countAllCharacter() {
      CharacterService.CountAllCharacters()
        .then((response) => {
          console.log('NbAllCharacters', response)
          this.NbAllCharacters = response.data.ob.count;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getAllCharacters(nav) {
      CharacterService.getAllCharacters({ nav })
        .then((response) => {
          console.log(response)
          this.allCharacters = response.data.ob;
          this.showspinner = false;
          functions.CalcPagination(
            this.NbAllCharacters,
            this.showPagination,
            this.nav,
            this.loading
          );
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>