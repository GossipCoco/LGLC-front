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
      <div
        class="character-container padding-0 list-all-characters-container padding-2-vh"
      >
        <div class="row width-190-vh">
          <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-12">
            <div
              class="card background-color-dark-green-01 margin-2vh-0-0-0 height-80-vh"
            >
              <div class="card-header">
                <hh3 class="text-white poppins-text">Filtrer</hh3>
              </div>
              <div class="card-body">
                <div class="row">
                  <div
                    class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"
                  >
                    <input-component
                      v-bind:forId="'inputName'"
                      v-bind:label="'Nom du personnage'"
                      v-bind:getNameData="'getCurrentName'"
                      @getCurrentName="getCurrentName"
                    />
                    <select-component
                      :label="'Filtrer par Clan'"
                      :forId="'selectClan'"
                      :options="clans"
                      :optionKey="'Id'"
                      :optionLabel="'Name'"
                      @selectChange="onSelectClan"
                    />
                  </div>
                </div>
                <div class="row">
                  <div
                    class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-12"
            v-if="ListAllCharacter && !useFiltered"
          >
            <character-card v-bind:characters_props="allCharacters" />
          </div>
          <div
            class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-12"
            v-if="useFiltered"
          >
            <searched-character-card
              v-bind:SearchedCharacter="filteredCharacters"
            />
          </div>
        </div>
        <div class="row pagination-container-row">
          <div class="pagination-container">
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
  </div>
</template>
<script>
import functions from "../../services/functions";
import CharacterService from "../../services/CharacterService";
import ClansServices from "../../services/ClansServices";
import CardHeader from "./GenericComponent/CardHeader.vue";
import CharacterCard from "./CharacterComponent/CharacterCard.vue";
import Pagination from "../Components/GenericComponent/Pagination.vue";
import InputComponent from "./GenericComponent/InputComponent.vue";
import SelectComponent from "./GenericComponent/SelectComponent.vue";
import SearchedCharacterCard from "./GenericComponent/SearchedCharacterCard.vue";

export default {
  name: "AllCharacters",
  components: {
    CharacterCard,
    Pagination,
    InputComponent,
    SelectComponent,
    CardHeader,
    SearchedCharacterCard,
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
      searchClan: "",
      nav: {
        current: 0,
        pages: 0,
        step: 6,
      },
      allMyCharacter: {},
      allCharacters: {},
      clans: {},
      grades: {},
      NameCharacterSearch: {},
      filters: [],
      filteredCharacters: [],
      navClans: {
        current: 0,
        pages: 0,
        step: 100,
      },
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
    async initPage() {
      this.showspinner = true;
      try {
        await this.countAllCharacter();
        await this.getAllCharacters(this.nav);
        await this.getAllClans(this.navClans);
      } catch (error) {
        console.error("Error initializing page:", error);
      } finally {
        this.showspinner = false;
      }
    },
    async onSelectClan(clanId){
      console.log(clanId)
      try{
        this.selectedClan = clanId
        await this.CountNbCharactersByClan(clanId)
      }catch (error) {
        console.error("Error initializing page:", error);
      } 
    },    
    async CountNbCharactersByClan(id){
      try{
        const response = await CharacterService.CountNbCharactersByClan(id)
        console.log(response.data.ob)
      }catch (e) {
        console.log(e);
      }
    },
    async getAllClans(nav) {
      try {
        const response = await ClansServices.getAllClans(nav);
        this.clans = response.data.ob;
        console.log(this.clans);
      } catch (e) {
        console.log(e);
      }
    },
    async CharacterFilteredPagination(page) {
      this.nav.current = page;
      try {
        const response = await CharacterService.getCharacterByNameSearch(
          this.nameSearch,
          this.nav
        );
        this.filteredCharacters = response.data.ob;
        this.useFiltered = true;
      } catch (error) {
        console.error("Error in filtered pagination:", error);
      }
    },
    async getCurrentName(e) {
      this.nameSearch = e;
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
        const response = await CharacterService.CountCharacterByNameSearch(
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
    async getAllCharacters(nav) {
      if (window.innerWidth >= this.width) {
        this.nav.step = 8;
      } else if (window.innerWidth < this.width) {
        this.nav.step = 8;
      }
      try {
        const response = await CharacterService.getAllCharacters({ nav });
        this.allCharacters = response.data.ob;
        console.log(this.allCharacters);
        this.showspinner = false;
        this.nav.pages = functions.CalcPagination(
          this.NbAllCharacters,
          this.nav,
          this.nav.step
        );
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>