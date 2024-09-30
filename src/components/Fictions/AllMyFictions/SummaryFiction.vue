<template>
  <div class="card-body">
    <SearchBarComponent
      :For="'SearchCharacter'"
      :label="'Sélectionner un personnage'"
      :characters="characters"
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
</template>
<script>
import CharacterService from "../../../services/CharacterService";
import SearchBarComponent from "../Components/SearchBarComponent.vue";
import Pagination from "../../Components/GenericComponent/Pagination.vue";
import FictionService from "../../../services/FictionService";
import AllCardsFictions from "./AllCardsFictions.vue";
import Spinner from "../../Components/GenericComponent/Spinner.vue";
export default {
  name: "SummaryFiction",
  props: ["typePage"],
  components: { AllCardsFictions, SearchBarComponent, Pagination, Spinner },
  data() {
    return {
      userCurrent: this.$store.state.auth.user.usrID,
      characters: {},
      allFictions: {},
      NbAllMyGamesFictions: 0,
      showspinner: false,
      filters: [],
      nav: {
        current: 0,
        pages: 0,
        step: 8,
      },
    };
  },
  created() {
    this.usrId = this.userCurrent; 
    this.initData();   
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
    async initData() {
      this.showspinner = true;
      console.log("Démarrage du chargement des fictions...");
      try {
        await this.countAllFictions();
        await this.getAllFictions(this.nav);
        console.log("Fictions chargées :", this.allFictions); // Vérifiez ici si les fictions sont bien chargées
      } catch (error) {
        console.error("Erreur lors du chargement des fictions :", error);
      }
      this.showspinner = false;
    },
    async FictionPagination(page) {
      this.nav.current = page;
      await this.getAllFictions(this.nav);
    },
    async countAllFictions() {
      try {
        const response = await FictionService.CountAllFictionsOnBases();
        console.log("Nombre total de fictions :", response.data.ob); 
        this.NbAllFictions = response.data.ob.count;
        console.log("NbAllFictions", this.NbAllFictions)
        this.nav.pages = Math.ceil(this.NbAllFictions / this.nav.step);
        console.log("Après calcul:", this.nav.pages)
      } catch (error) {
        console.error(error);
      }
    },
    async getAllFictions(nav) {
      try {
        const response = await FictionService.GetAllFictionsOnBase(nav);
        console.log(response)
        this.allFictions = response.data.ob;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
