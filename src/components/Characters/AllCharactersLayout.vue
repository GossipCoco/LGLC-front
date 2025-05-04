<template>
  <div
    class="card card-all-my-characters background-none align-items-content-justify-content width-190-vh"
  >
    <div
      class="card-header border-radius-12px background-color-dark-green-01 display-flex-row align-items-content-justify-content width-190-vh"
    >
      <h1 class="text-white poppins-text">Tous les personnages</h1>
      <router-link
        to="/CreateAnOriginalCharacter"
        class="btn btn-lg btn-primary margin-0-0-0-2vh"
      >
        Nouveau personnage
      </router-link>
    </div>
    <div class="card-body height-90-vh">
      <div class="character-container padding-0 list-all-characters-container padding-2-vh">
        <div class="row width-190-vh">
          <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-12">
            <character-card
              v-bind:characters_props="allCharacters"
              v-if="!showMyCharacter"
            />
          </div>          
          <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">

          </div>
        </div>
        <div class="row pagination-container-row">
          <div class="pagination-container">
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
  </div>
</template>
<script>
import functions from "../../services/functions";
import CharacterService from "../../services/CharacterService";
import ClansService from "../../services/ClansServices";
import GradeService from "../../services/GradeService";
import CharacterCard from "./CharacterComponent/CharacterCard.vue";
import Pagination from "../Components/GenericComponent/Pagination.vue";

export default {
  name: "AllCharacters",
  components: { CharacterCard, Pagination },
  data() {
    return {
      labelFilter: "Chercher des fictions par",
      usr: this.$store.state.auth.user.usrID,
      userCurrent: this.$store.state.auth.user.usrID,
      showMyCharacter: false,
      allMyCharacter: {},
      NbAllCharacters: null,
      allCharacters: {},
      grades: {},
      filters: [],
      width: 1700,
      nav: {
        current: 0,
        pages: 0,
        step: 6,
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
    this.GetAllClans();
    this.GetAllGrade();
  },
  methods: {
    getCurrentName(e) {
      console.log(e);
    },
    getclans(e) {
      console.log(e);
    },
    getgrades(e) {
      console.log(e);
    },

    GetAllClans() {
      ClansService.getAllClans()
        .then((response) => {
          this.clans = response.data.ob;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    GetAllGrade() {
      GradeService.getAllGrades()
        .then((response) => {
          this.grades = response.data.ob;
        })
        .catch((e) => {
          console.log(e);
        });
    },

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
      if (window.innerWidth >= this.width) {
        this.nav.step = 6;
      } else if (window.innerWidth < this.width) {
        this.nav.step = 6;
      }
      CharacterService.getAllCharacters({ nav })
        .then((response) => {
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