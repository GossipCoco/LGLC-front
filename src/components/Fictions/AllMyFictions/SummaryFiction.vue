<template>
  <div class="card-body">
    <SearchBarComponent
      :For="'SearchCharacter'"
      :label="'Sélectionner un personnage'"
      :characters="characters"
      @form-info="getInfo"
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
import GameService from "../../../services/GameService";
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
      allFictions: {},
      NbAllMyGamesFictions: 0,
      showspinner: false,
      filters: [],
      allAuthors: {},
      width: 1920,
      searchedCharacter: null,
      nav: {
        current: 0,
        pages: 0,
        step: 16,
      },
    };
  },
  created() {
    this.usrId = this.userCurrent;
    this.initData();
    this.GetAllNamesAndIdsCharacters();
  },
  methods: {
    getStepByScreenWidth(width) {
      if (width >= 4400) {
        return 20; // Très grands écrans
      } else if (width >= 1920) {
        return 16; // Grand écran standard
      } else if (width >= 1600) {
        return 16; // Écran intermédiaire        
      }else if (width >= 1400) {
        return 8; // Écran intermédiaire
      } else if (width >= 1366) {
        return 8; // Portable classique
      } else {
        return 8; // Tablettes / petits écrans
      }
    },
    getInfo(e, w) {
      console.log(e, w);
      this.searchedCharacter = e;
      this.GetAllGamesByCharacter(this.searchedCharacter);
    },
    GetAllGamesByCharacter(searchedCharacter) {
      GameService.GetAllGamesByCharacter(searchedCharacter)
        .then((response) => {
          console.log(response.data.ob);
        })
        .catch((e) => {
          console.log(e);
        });
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
      try {
        await this.countAllFictions();

        const screenWidth = window.innerWidth;
        this.nav.step = this.getStepByScreenWidth(screenWidth);

        await this.getAllFictions(this.nav);
      } catch (error) {
        console.error("Erreur lors du chargement des fictions :", error);
      }
      this.showspinner = false;
    },
    async FictionPagination(page) {
      this.nav.current = page;

      const screenWidth = window.innerWidth;
      this.nav.step = this.getStepByScreenWidth(screenWidth);

      await this.getAllFictions(this.nav);
    },

    async countAllFictions() {
      try {
        const response = await FictionService.CountAllFictionsOnBases();
        this.NbAllFictions = response.data.ob.count;

        const screenWidth = window.innerWidth;
        this.nav.step = this.getStepByScreenWidth(screenWidth);

        this.nav.pages = Math.ceil(this.NbAllFictions / this.nav.step);
      } catch (error) {
        console.error(error);
      }
    },

    async getAllFictions(nav) {
      try {
        const response = await FictionService.GetAllFictionsOnBase(nav);
        this.allFictions = response.data.ob;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
