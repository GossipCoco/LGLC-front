<template>
  <div class="height-90-vh width-185-vh">
    <div class="row">
      <div class="col-2 col-xl-2 col-xxl-2 col-lg-2 col-md-2 col-sm-12 col xs-12">
        <div class="card background-color-dark-green-01 margin-2vh-0-0-0 height-80-vh">
          <div class="card-header">
            <h3 class="text-white poppins-text">Filtrer</h3>
          </div>
          <div class="card-body">
            <div class="row"></div>
          </div>
        </div>
      </div>      
      <div class="col-10 col-xl-10 col-xxl-10 col-lg-10 col-md-10 col-sm-12 col xs-12">
        <Spinner v-if="showspinner" />
        <AllCardsFictions v-else :allFictions="allFictions" />
        <div class="row pagination-container margin-2vh">
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
  </div>
</template>
<script>
import CharacterService from "../../../services/CharacterService";
import GameService from "../../../services/GameService";
import Pagination from "../../Components/GenericComponent/Pagination.vue";
import FictionService from "../../../services/FictionService";
import AllCardsFictions from "./AllCardsFictions.vue";
import Spinner from "../../Components/GenericComponent/Spinner.vue";
export default {
  name: "SummaryFiction",
  props: ["typePage"],
  components: { AllCardsFictions, Pagination, Spinner },
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
        return 12; // Grand écran standard
      } else if (width >= 1600) {
        return 12; // Écran intermédiaire        
      }else if (width >= 1400) {
        return 10; // Écran intermédiaire
      } else if (width >= 1366) {
        return 10; // Portable classique
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
