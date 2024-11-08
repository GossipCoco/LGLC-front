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
      nav: {
        current: 0,
        pages: 0,
        step: 12,
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
        }else if(window.innerWidth < 1920)
        {
          this.nav.step = 8
        }
        await this.getAllFictions(this.nav);

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
        this.NbAllFictions = response.data.ob.count;
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
