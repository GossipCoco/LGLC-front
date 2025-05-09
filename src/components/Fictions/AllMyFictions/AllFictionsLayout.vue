
<template>
  <div class="border-none background-none flex-one card display-flex-column width-190-vh overflowY-X-hidden height-100-vh all-fictions-container-global">
    <CardHeader v-bind:Title="'Lire toutes mes fictions'" />
    <div class="card-body height-80-vh">
      <div class="row">
         <div class="col-2 col-xl-2 col-xxl-2 col-lg-2 col-md-2 col-sm-12 col xs-12">
          <div class="card background-color-dark-green-01 margin-2vh-0-0-0 height-80-vh">
            <div class="card-header">
              <h3 class="text-white poppins-text">Filtrer</h3>
            </div>
            <div class="card-body height-85-vh">
              <div class="row"></div>
            </div>
          </div>
        </div> 
        <div class="col-10 col-xl-10 col-xxl-10 col-lg-10 col-md-10 col-sm-12 col xs-12">
          <Spinner v-if="showspinner" />
          <AllCardsFictions v-else :allFictions="allFictions" />
        </div>        
      </div>
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
import FictionService from "../../../services/FictionService";
import CardHeader from "../../Components/GenericComponent/CardHeader.vue";
import Pagination from "../../Components/GenericComponent/Pagination.vue";
import AllCardsFictions from "./AllCardsFictions.vue";
import Spinner from "../../Components/GenericComponent/Spinner.vue";

export default {
  name: "GameLayout",
  components: {
    Pagination,
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
      width: 1700,
      nav: {
        current: 0,
        pages: 0,
        step: 12,
      },
    };
  },
  created() {
    this.usrId = this.userCurrent; 
    this.initDataMyFictions(); 
    this.GetAllNamesAndIdsCharacters();
  },
  methods: {
    getInfo(e) {
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
        if(window.innerWidth >= this.width){
          this.nav.step = 12
        }else if(window.innerWidth < this.width)
        {
          this.nav.step = 8
        }
        await this.GetAllFictionsByUser(this.userCurrent, this.nav);
      }
      catch (error) {
        console.error("Erreur lors du chargement des fictions :", error);
      }
        this.showspinner = false;
    },
    async FictionPagination(page) {
      this.nav.current = page;
      if(window.innerWidth >= this.width){
          this.nav.step = 12
        }else if(window.innerWidth < this.width)
        {
          this.nav.step = 8
        }
      this.GetAllFictionsByUser(this.userCurrent, this.nav);
    },
    async countAllMyFictions() {
      try {
        const response = await FictionService.CountAllMyFictions(this.userCurrent);
        this.NbAllMyGamesFictions = response.data.ob.count;
        if(window.innerWidth >= this.width){
          this.nav.step = 12
        }else if(window.innerWidth < this.width)
        {
          this.nav.step = 8
        }
        this.nav.pages = Math.ceil(this.NbAllMyGamesFictions / this.nav.step);
      } catch (error) {
        console.error(error);
      }
    },
    async GetAllFictionsByUser(usr) {     
      try {
        const response = await FictionService.GetAllFictionsByUser(usr, this.nav);       
        this.allFictions = response.data.ob;        
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>