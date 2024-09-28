<template>
  <div class="height-fixe character-container-global">
    <div class="row row-filter">
      <ButtonCreationCharacter />
      <div class="col-2">
        <button @click="showMyCharacters" type="button" class="btn btn-primary">
          Afficher mes personnages
        </button>
      </div>
      <div class="col-1">Filtrer :</div>
      <div class="col-2">
        <input type="text" class="form-control" placeholder="personnage" />
      </div>
      <div class="col-2">
        <input
          type="text"
          class="form-control"
          placeholder="Personnage par clan"
        />
      </div>
      <div class="col-2">
        <input
          type="text"
          class="form-control"
          placeholder="Personnage par grade"
        />
      </div>
      <div class="col-1">
        <button type="button" class="btn btn-primary">Rechercher</button>
      </div>
    
    <div
      class="row all-characters-container-card"
      id="all-characters-container-card"
    >
      <character-card
        v-bind:characters_props="allCharacters"
        v-if="!showMyCharacter"
      />
    </div>
    <div class="row pagination-container-row">
      <div class="pagination-container">
        <div class="row bottom-top-dashboard">
          <div v-if="showspinner" class="d-flex justify-content-center">
            <div class="spinner-border text-success" role="status"></div>
          </div>
        </div>
        <pagination
          v-if="!showspinner && nav.pages > 0"
          v-bind:nav="nav"
          v-bind:filters="filters"
          v-bind:getDatas="'CharacterPagination'"
          @CharacterPagination="CharacterPagination"
        />
      </div>
    </div>
  </div>
  </div>
  
</template>
<script>
import CharacterService from "../../services/CharacterService";
import CharacterCard from "./CharacterComponent/CharacterCard.vue";
import Pagination from "../Components/GenericComponent/Pagination.vue";
import functions from "../../services/functions";
import ButtonCreationCharacter from "../Components/FormComponent/ButtonCreationCharacter.vue";

export default {
  name: "AllCharacters",
  components: { CharacterCard, Pagination, ButtonCreationCharacter },
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
      showspinner: false,
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
  // watch: {
  //   '$route'() {
  //     // This will trigger when the route changes, ensuring the data is refreshed
  //     this.initPage();
  //   }
  // },
  methods: {
    async initPage() {
      this.showspinner = true;
      try {
        await this.countAllCharacter();
        await this.getAllCharacters(this.nav);
      } catch (error) {
        console.error("Error initializing page:", error);
      } finally {
        this.showspinner = false;
      }
    },
    showMyCharacters(e) {
      console.log("showMyCharacters");
      CharacterService.GetAllCharactersByUser(e)
        .then((response) => {
          console.log(response.data.ob);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    async CharacterPagination(page) {
      this.nav.current = page;
      try {
        await this.getAllCharacters(this.nav);
      } catch (error) {
        console.error("Error in pagination:", error);
      }
    },

    async countAllCharacter() {
      try {
        const response = await CharacterService.CountAllCharacters();
        this.NbAllCharacters = response.data.ob.count;
        functions.CalcPagination(this.NbAllCharacters, this.nav, this.nav.step);
      } catch (error) {
        console.error("Error counting characters:", error);
      }
    },
    getAllCharacters(nav) {
      CharacterService.getAllCharacters({ nav })
        .then((response) => {
          console.log(response);
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