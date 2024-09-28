
<template>
  <div class="dashboard-max-card-container background-color-main-lineart flex-one card display-flex-column fiction-container">
    <CardHeader v-bind:Title="'Lire toutes mes fictions'" />
    <div class="card-body">
      <SearchBarComponent 
        v-bind:For="'SearchCharacter'"
        v-bind:label="'Sélectionner un personnage'"
        v-bind:characters="characters"
        @form-character="getSearchedCharacter"
      />
      <Spinner v-if="showspinner" />
      <AllCardsFictions v-else :allFictions="allFictions" />
      <div class="row pagination-container">
      <Pagination
        v-if="!showspinner"
        :nav="nav"
        :filters="filters"
        :getDatas="'FictionPagination'"
        @FictionPagination="FictionPagination"
      />
    </div>
    </div>
  </div>
</template>
<script>
import CharacterService from "../../../services/CharacterService";
import AllMyFictionService from "../../../services/AllMyFictionService";
import CardHeader from "../../Components/GenericComponent/CardHeader.vue";
import SearchBarComponent from "../Components/SearchBarComponent.vue";
import Pagination from "../../Components/GenericComponent/Pagination.vue";
import AllCardsFictions from "./AllCardsFictions.vue";
import Spinner from "../../Components/GenericComponent/Spinner.vue";

export default {
  name: "GameLayout",
  components: {
    Pagination,
    SearchBarComponent,
    AllCardsFictions,
    CardHeader,
    Spinner,
  },
  data() {
    return {
      userCurrent: this.$store.state.auth.user.usrID,
      characters: {},
      allFictions:{},
      NbAllMyGamesFictions: 0,      
      showspinner: false,
      filters: [],
      nav: {
        current: 0,
        pages: 0,
        step: 6,
      },
    };
  },
  created() {
    this.usrId = this.userCurrent; 
    this.initDataMyFictions(); 
    this.GetAllNamesAndIdsCharacters();
  },
  methods: {
    getSearchedCharacter(e) {
      console.log(e);
    },
    GetAllNamesAndIdsCharacters() {
      CharacterService.GetAllNamesAndIdsCharacters()
        .then((response) => {
          this.characters = response.data.ob;
        })
        .catch((e) => {
          console.log(e);
        });
    },    
    async initDataMyFictions() {
      this.showspinner = true;
      console.log("Démarrage du chargement des fictions...", this.nav);
      try{
        await this.countAllMyFictions();    
        await this.GetAllFictionsByUser(this.userCurrent, this.nav);
        console.log("Fictions chargées :", this.allFictions); // Vérifiez ici si les fictions sont bien chargées
      }catch (error) {
        console.error("Erreur lors du chargement des fictions :", error);
      }
        this.showspinner = false;
    },
    async FictionPagination(page) {
      console.log("Page : ", page)
      this.nav.current = page;
      console.log("FictionPagination", this.nav)
      this.GetAllFictionsByUser(this.userCurrent, this.nav);
    },

    async countAllMyFictions() {
      try {
        const response = await AllMyFictionService.CountAllMyFictions(this.userCurrent);
        this.NbAllMyGamesFictions = response.data.ob;
        this.nav.pages = Math.ceil(this.NbAllMyGamesFictions / this.nav.step);
        console.log("countAllMyFictions", this.nav)
      } catch (error) {
        console.error(error);
      }
    },

    async GetAllFictionsByUser(usr) {     
      try {
        const response = await AllMyFictionService.GetAllFictionsByUser(usr, this.nav);       
        this.allFictions = response.data.ob;
        
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>