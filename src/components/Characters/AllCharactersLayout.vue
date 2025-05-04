<template>
  <div
    class="card card-all-my-characters background-none align-items-content-justify-content width-190-vh"
  >
    <card-header v-bind:label="'Tous les personnages'" v-bind:route="'/CreateAnOriginalCharacter'" v-bind:NameLink="'Nouveau personnage'" />
    <div class="card-body width-190-vh height-90-vh">
      <div class="character-container padding-0 list-all-characters-container padding-2-vh">
        <div class="row width-190-vh">                    
          <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-12">
            <div class="card background-color-dark-green-01 margin-2vh-0-0-0 height-80-vh">
              <div class="card-header ">
                <hh3 class="text-white poppins-text">Filtrer</hh3>
              </div>
              <div class="card-body ">
                <div class="row">
                  <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <input-component
                    v-bind:forId="'inputName'"
                    v-bind:label="'Nom du personnage'"
                    v-bind:getNameData="'getCurrentName'"
                    @getCurrentName="getCurrentName"
                    />
                </div>
              </div>
            </div>
            </div>
          </div>
          <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-12" v-if="ListAllCharacter && !useFiltered">
            <character-card
              v-bind:characters_props="allCharacters"              
            />
          </div>
          <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-12" v-if="useFiltered">
            <searched-character-card v-bind:SearchedCharacter="filteredCharacters" />
          </div>
        </div>
        <div class="row pagination-container-row">
          <div class="pagination-container">
            <pagination
              v-if="!showspinner && useFiltered && nav.pages > 0"
              v-bind:nav="nav"
              v-bind:filters="filters"
              v-bind:getDatas="'CharacterFilteredPagination'"
              @CharacterFilteredPagination="CharacterFilteredPagination"
            />
            <pagination
              v-if="!showspinner && !useFiltered && nav.pages > 0"
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
import CardHeader from "./GenericComponent/CardHeader.vue";
import CharacterCard from "./CharacterComponent/CharacterCard.vue";
import Pagination from "../Components/GenericComponent/Pagination.vue";
import InputComponent from "./GenericComponent/InputComponent.vue";
import SearchedCharacterCard from "./SearchedCharacterCard.vue";

export default {
  name: "AllCharacters",
  components: {
    CharacterCard,
    Pagination,
    InputComponent,
    CardHeader,
    SearchedCharacterCard
  },
  data() {
    return {
      width: 1700,
      ListAllCharacter: true,
      showMyCharacter: false,
      showspinner: false,
      useFiltered: false,
      labelFilter: "Chercher des fictions par",
      usr: this.$store.state.auth.user.usrID,
      userCurrent: this.$store.state.auth.user.usrID,
      NbAllCharacters: null,
      nameSearch: null,
      nbSearchCharacters: null,
      nav: {
        current: 0,
        pages: 0,
        step: 6,
      },
      allMyCharacter: {},
      allCharacters: {},
      grades: {},
      NameCharacterSearch: {},
      filters: [],
      filteredCharacters: [],
    };
  },
  provide() {
    return {
      allCharacters: this.allCharacters,
    };
  },
  async created() {
    this.userCurrent = this.$store.state.auth.user.usrID;
    await this.initPage();
  },
  methods: {
    async CharacterFilteredPagination(page) {
      this.nav.current = page;
      try {
        const response = await CharacterService.getCharacterByNameSearch(this.nameSearch, this.nav);
        this.filteredCharacters = response.data.ob;
        this.useFiltered = true;
        console.log("useFiltered:", this.useFiltered);
      } catch (error) {
        console.error("Error in filtered pagination:", error);
      }
    },
    async getCurrentName(e) {
      this.nameSearch = e;
      if (!this.nameSearch || this.nameSearch.trim() === '') {
        this.useFiltered = false;
        await this.initPage();
        return;
      }
      try {
        const response = await CharacterService.getCharacterByNameSearch(this.nameSearch, this.nav);
        this.filteredCharacters = response.data.ob;
        await this.countFilteredCharactersByName(this.nameSearch);
        this.useFiltered = true;
      } catch (e) {
        console.log(e);
        this.useFiltered = false;
      }
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
        if (this.useFiltered && this.nameSearch && this.nameSearch.trim() !== '') {
          const response = await CharacterService.getCharacterByNameSearch(this.nameSearch, this.nav);
          this.filteredCharacters = response.data.ob;
          console.log("showspinner:", this.showspinner)
          console.log("nav.pages:", this.nav.pages); 
        } else {
          await this.getAllCharacters(this.nav);
          console.log("nav.pages:", this.nav.pages); 
        }
      } catch (error) {
        console.error("Error in pagination:", error);
      }
    },
    async countAllCharacter() {
      try {
        const response = await CharacterService.CountAllCharacters();
        this.NbAllCharacters = response.data.ob.count;
        console.log(this.NbAllCharacters)
        functions.CalcPagination(this.NbAllCharacters, this.nav, this.nav.step);
      } catch (error) {
        console.error("Error counting characters:", error);
      }
    },
    async countFilteredCharactersByName(name) {
      try {
        const response = await CharacterService.CountCharacterByNameSearch(name);
        this.NbAllCharacters = response.data.ob.count;
        functions.CalcPagination(this.NbAllCharacters, this.nav, this.nav.step);
      } catch (error) {
        console.error(error);
      }
    },
    async getAllCharacters(nav) {
      if (window.innerWidth >= this.width) {
        this.nav.step = 8;
      } else if (window.innerWidth < this.width) {
        this.nav.step = 8;
      }
      try {
        const response = await CharacterService.getAllCharacters({ nav });
        this.allCharacters = response.data.ob;
        this.showspinner = false;
        functions.CalcPagination(this.NbAllCharacters, this.nav, this.nav.step);
        console.log("nav.pages:", this.nav); 

      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>