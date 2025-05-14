<template>
  <div class="card border-none card-all-my-characters background-none align-items-content-justify-content width-190-vh"
  >
    <card-header
      v-bind:label="'Tous les personnages'"
      v-bind:route="'/CreateAnOriginalCharacter'"
      v-bind:NameLink="'Nouveau personnage'"
    />
    <div class="card-body width-190-vh height-90-vh">
      <div class="character-container padding-0 list-all-characters-container padding-2-vh-0-0-1vh">
                  

        <div class="row row-cols-1 row-cols-md-2 g-4 width-190-vh">
          <filter-component
            @getCurrentName="getCurrentName"
            @onSelectClan="onSelectClan"
            @onSelectGrade="onSelectGrade"
          />

          <character-card
            v-if="ListAllCharacter && !useFiltered"
            v-bind:characters_props="allCharacters"
          />
          <searched-character-card
            v-if="useFiltered"
            v-bind:SearchedCharacter="filteredCharacters"
          />
        </div>
        <div class="row pagination-container-row">
          <pagination
            v-if="!showspinner && nav.pages > 0"
            :nav="nav"
            :filters="filters"
            :getDatas="
              useFiltered
                ? 'CharacterFilteredPagination'
                : 'CharacterPagination'
            "
            @CharacterPagination="CharacterPagination"
            @CharacterFilteredPagination="CharacterFilteredPagination"
          />
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
import SearchedCharacterCard from "./GenericComponent/SearchedCharacterCard.vue";
import FilterComponent from "./GenericComponent/FilterComponent.vue";

export default {
  name: "AllCharacters",
  components: {
    CharacterCard,
    Pagination,
    CardHeader,
    SearchedCharacterCard,
    FilterComponent,
  },
  data() {
    return {
      width: 1700,
      ListAllCharacter: true,
      showMyCharacter: false,
      showspinner: false,
      useFiltered: false,
      usr: this.$store.state.auth.user.usrID,
      userCurrent: this.$store.state.auth.user.usrID,
      NbAllCharacters: null,
      nameSearch: null,
      searchClan: "",
      nav: {
        current: 0,
        pages: 0,
        step:8,
      },
      navClans: {
        current: 0,
        pages: 0,
        step: 100,
      },
      allCharacters: {},
      filteredCharacters: [],
      clans: {},
      searchByGrade:{},
      selectedClan: null,
      filterType: null,
      selectGrade: null,
      NbGrade: null
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
    // --- INITIALISATION ---
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
    // ----- COUNT --------
    async countAllCharacter() {
      try {
        const response = await CharacterService.CountAllCharacters();
        this.NbAllCharacters = response.data.ob.count;
        functions.CalcPagination(this.NbAllCharacters, this.nav, this.nav.step);
      } catch (error) {
        console.error("Error counting characters:", error);
      }
    },
    async countFilteredCharactersByName(name) {
      try {
        const response = await CharacterService.CountNbOriginaleCharacterByName(
          name
        );
        this.NbAllCharacters = response.data.ob.count;
        this.nav.pages = functions.CalcPagination(
          this.NbAllCharacters,
          this.nav,
          this.nav.step
        );
      } catch (error) {
        console.error(error);
      }
    },

    // --- GET ELEMENT ENFANT  ---
    // --- NOM ---
    async getCurrentName(e) {
      this.nameSearch = e;
      this.filterType = "name";
      if (!this.nameSearch || this.nameSearch.trim() === "") {
        this.useFiltered = false;
        await this.initPage();
        return;
      }
      try {
        const response = await CharacterService.getCharacterByNameSearch(
          this.nameSearch,
          this.nav
        );
        this.filteredCharacters = response.data.ob;
        await this.countFilteredCharactersByName(this.nameSearch);
        this.useFiltered = true;
      } catch (e) {
        console.log(e);
        this.useFiltered = false;
      }
    },

    // --- Clan ---
    async onSelectClan(clanId) {
      if (!clanId) {
        this.useFiltered = false;
        await this.initPage();
        return;
      }
      try {
        this.selectedClan = clanId;
        this.filterType = "clan";
        const responseCount = await CharacterService.CountNbCharactersByClan(
          this.selectedClan
        );
        this.NbAllCharacters = responseCount.data.ob.count;
        this.nav.pages = functions.CalcPagination(
          this.NbAllCharacters,
          this.nav,
          this.nav.step
        );
        const responseData = await CharacterService.GetAllCharactersByClan(
          clanId,
          this.nav
        );
        this.filteredCharacters = responseData.data.ob;
        this.useFiltered = true;
      } catch (e) {
        console.log("Erreur lors du filtrage par clan :", e);
      }
    },
    // ------ GRADE ---------

    async onSelectGrade(e){
       if (!e) {
        this.useFiltered = false;
        await this.initPage();
        return;
      }
      try{        
        this.filterType = "grade";
        this.selectGrade = e
        const response = await CharacterService.CountCharacterByGrade(this.selectGrade)
        this.CountCharacterByGrade = response.data.ob.count
        this.nav.pages = functions.CalcPagination(
          this.CountCharacterByGrade,
          this.nav,
          this.nav.step
        );
        const responseData = await CharacterService.GetAllCharactersByGrade(this.selectGrade, this.nav)
        this.filteredCharacters = responseData.data.ob;
        this.useFiltered = true;
      } catch (e) {
        console.log("Erreur lors du filtrage par grade :", e);
      }
    },

    // ***** PAGINATION *****
    // --- PAGINATION GLOBALE ---
    async CharacterPagination(page) {
      this.nav.current = page;
      try {
        if (
          this.useFiltered &&
          this.nameSearch &&
          this.nameSearch.trim() !== ""
        ) {
          const response = await CharacterService.getCharacterByNameSearch(
            this.nameSearch,
            this.nav
          );
          this.filteredCharacters = response.data.ob;
        } else {
          await this.getAllCharacters(this.nav);
        }
      } catch (error) {
        console.error("Error in pagination:", error);
      }
    },

    // --- PAGINATION AVEC FILTRES ---
    async CharacterFilteredPagination(page) {
      this.nav.current = page;
      try {
        let response;
        if (this.nameSearch && this.nameSearch.trim() !== "") {
          response = await CharacterService.getCharacterByNameSearch(
            this.nameSearch,
            this.nav
          );
        } else if (this.selectedClan) {
          response = await CharacterService.GetAllCharactersByClan(
            this.selectedClan,
            this.nav
          );
        } else if (this.selectGrade){
          response = await CharacterService.GetAllCharactersByGrade(
            this.selectGrade,
            this.nav
          )
        }
        if (response) {
          this.filteredCharacters = response.data.ob;
          this.useFiltered = true;
        }
      } catch (error) {
        console.error("Error in filtered pagination:", error);
      }
    },
    // --- TOUS LES PERSONNAGES ---
    async getAllCharacters(nav) {
      try {
        const screenWidth = window.innerWidth;
        this.nav.step = functions.getStepByScreenWidth(screenWidth);
        this.nav.pages = functions.CalcPagination(
          this.NbAllCharacters,
          this.nav,
          this.nav.step
        );
        const response = await CharacterService.getAllCharacters({ nav });
        this.allCharacters = response.data.ob;
        this.showspinner = false;
     
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>