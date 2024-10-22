<template>
  <div
    class="height-fixe character-container list-all-characters-container"
  >
    <div
      class="row row-filter background-color-dark-green-01 display-flex vertical-align-middle"
    >
      <div
        class="col-2 display-flex-row align-items-content-justify-content vertical-align-middle"
        style="height: 5rem"
      >
        <p class="text-white">{{ labelFilter }}</p>
      </div>
      <InputName
        v-bind:col="'col-2'"
        v-bind:forId="'inputName'"
        v-bind:label="'Nom actuel du personnage'"
        v-bind:getNameData="'getCurrentName'"
        @getCurrentName="getCurrentName"
      />
      <GenericSelect
        v-bind:col="'col-2'"
        v-bind:For="'SearchClan'"
        v-bind:label="'Clan'"
        v-bind:formdata="'getclans'"
        v-bind:clans="clans"
        @getclans="getclans"
      />
      <GenericSelect
        v-bind:col="'col-2'"
        v-bind:For="'SearchGrade'"
        v-bind:label="'Grade'"
        v-bind:formdata="'getgrade'"
        @getgrade="getgrades"
      />
    </div>
    <character-card
      v-bind:characters_props="allCharacters"
      v-if="!showMyCharacter"
    />
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
</template>
<script>
import functions from "../../services/functions";
import CharacterService from "../../services/CharacterService";
import ClansService from "../../services/ClansServices";
import GradeService from "../../services/GradeService";

import GenericSelect from "../Components/FormComponent/GenericSelect.vue";
import InputName from "../Components/FormComponent/InputName.vue";
import CharacterCard from "./CharacterComponent/CharacterCard.vue";
import Pagination from "../Components/GenericComponent/Pagination.vue";

export default {
  name: "AllCharacters",
  components: { CharacterCard, Pagination, GenericSelect, InputName },
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