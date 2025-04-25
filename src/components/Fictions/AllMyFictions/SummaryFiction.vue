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
      allAuthors:{},
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
    getInfo(e, w) {
      console.log(e, w);
      this.searchedCharacter = e
      this.GetAllGamesByCharacter(this.searchedCharacter)
    },
    GetAllGamesByCharacter(searchedCharacter){
      GameService.GetAllGamesByCharacter(searchedCharacter)
      .then((response) => {
          console.log(response.data.ob)
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
        if(window.innerWidth >= 1920){
          this.nav.step = 16
        }else if(window.innerWidth < 1921 || window.innerWidth > 1601)
        {
          console.log("1", window.innerWidth)
          this.nav.step = 8
        }else if(window.innerWidth < 1600 || window.innerWidth > 1367 ||  window.innerWidth === 1440){
          console.log("2", window.innerWidth)
          this.nav.step = 10
        }
        await this.getAllFictions(this.nav);

      } catch (error) {
        console.error("Erreur lors du chargement des fictions :", error);
      }
      this.showspinner = false;
    },
    async FictionPagination(page) {
      this.nav.current = page;
      if(window.innerWidth >= this.width){
          this.nav.step = 16
        }else if(window.innerWidth < this.width || window.innerWidth > 1601)
        {
          console.log("1", window.innerWidth)
          this.nav.step = 8
        }else if(window.innerWidth > 1367 || window.innerWidth < 1600){
          console.log("2",window.innerWidth)
          this.nav.step = 10
        }

      await this.getAllFictions(this.nav);
    },
    async countAllFictions() {
      try {
        const response = await FictionService.CountAllFictionsOnBases();
        this.NbAllFictions = response.data.ob.count;
        if(window.innerWidth >= this.width){
          this.nav.step = 16
        }else if(window.innerWidth < this.width || window.innerWidth > 1601)
        {
          console.log(window.innerWidth)
          this.nav.step = 8
        }else if(window.innerWidth > 1367 || window.innerWidth < 1600){
          console.log(window.innerWidth)
          this.nav.step = 10
        }
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
