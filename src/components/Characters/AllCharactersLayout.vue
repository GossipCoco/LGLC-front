<template>
  <div
    class="card border-none card-all-my-characters background-none align-items-content-justify-content width-190-vh"
  >
    <card-header
      v-bind:label="'Tous les personnages'"
      v-bind:route="'/CreateAnOriginalCharacter'"
      v-bind:NameLink="'Nouveau personnage'"
    />
    <div class="card-body width-190-vh height-90-vh">
      <div class="character-container padding-0 list-all-characters-container padding-2-vh">
        <div class="row width-190-vh">

            <filter-component
              @getCurrentName="getCurrentName"
              @onSelectClan="onSelectClan"
            />

          <character-card v-if="ListAllCharacter && !useFiltered" v-bind:characters_props="allCharacters" />
          <searched-character-card v-if="useFiltered" v-bind:SearchedCharacter="filteredCharacters" />
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
        step: 6,
      },
      navClans: {
        current: 0,
        pages: 0,
        step: 100,
      },
      allCharacters: {},
      filteredCharacters: [],
      clans: {},
      selectedClan: null,
      filterType: null,
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
    // --- CLANS ---
    async onSelectClan(clanId) {
      if (!clanId) {
        this.useFiltered = false;
        await this.initPage();
        return;
      }
      try {
        this.selectedClan = clanId;
        this.filterType = 'clan'
        const responseCount = await CharacterService.CountNbCharactersByClan(this.selectedClan);
        this.NbAllCharacters = responseCount.data.ob.count;
        this.nav.pages = functions.CalcPagination(this.NbAllCharacters, this.nav, this.nav.step);
        const responseData = await CharacterService.GetAllCharactersByClan(clanId, this.nav);
        this.filteredCharacters = responseData.data.ob;
        this.useFiltered = true;
      } catch (e) {
        console.log("Erreur lors du filtrage par clan :", e);
      }
    },
    async CharacterFilteredPagination(page) {
      this.nav.current = page;
      try {
        if (this.filterType === 'name' && this.nameSearch && this.nameSearch.trim() !== "") {
          const response = await CharacterService.getCharacterByNameSearch(this.nameSearch, this.nav);
          this.filteredCharacters = response.data.ob;
          this.useFiltered = true;
        } else if (this.filterType === 'clan' && this.selectedClan) {
          const response = await CharacterService.GetAllCharactersByClan(this.selectedClan, this.nav);
          this.filteredCharacters = response.data.ob;
          this.useFiltered = true;
        } else {
          console.warn("Aucun filtre valide défini");
          this.useFiltered = false;
          await this.initPage(); // Revenir à l'état initial si pas de filtre
        }
      } catch (error) {
        console.error("Error in filtered pagination:", error);
      }
    },

    // --- NOM ---
    async getCurrentName(e) {
      this.nameSearch = e;   
      this.filterType = 'name';
      if (!this.nameSearch || this.nameSearch.trim() === "") {
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

    async countFilteredCharactersByName(name) {
      try {
        const response = await CharacterService.CountCharacterByNameSearch(name);
        this.NbAllCharacters = response.data.ob.count;
        this.nav.pages = functions.CalcPagination(this.NbAllCharacters, this.nav, this.nav.step);
      } catch (error) {
        console.error(error);
      }
    },
    // --- PAGINATION GLOBALE ---
    async CharacterPagination(page) {
      this.nav.current = page;
      try {
        if (this.useFiltered && this.nameSearch && this.nameSearch.trim() !== "") {
          const response = await CharacterService.getCharacterByNameSearch(this.nameSearch, this.nav);
          this.filteredCharacters = response.data.ob;
        } else {
          await this.getAllCharacters(this.nav);
        }
      } catch (error) {
        console.error("Error in pagination:", error);
      }
    },

    // --- TOUS LES PERSONNAGES ---
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
        this.nav.pages = functions.CalcPagination(this.NbAllCharacters, this.nav, this.nav.step);
      } catch (e) {
        console.log(e);
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
  },
};
</script>