<template>
  <div
    class="card border-none card-all-my-characters background-none align-items-content-justify-content width-190-vh"
  >
    <card-header
      v-bind:label="'Tous Mes personnages'"
      v-bind:route="'/CreateAnOriginalCharacter'"
      v-bind:NameLink="'Nouveau personnage'"
    />
    <div class="card-body height-90-vh">
      <div
        class="character-container padding-0 list-all-characters-container padding-2-vh-0-0-1vh"
      >
        <div
          id="original-characters-list"
          class="row row-cols-1 row-cols-md-4 g-4 width-190-vh"
        >
          <filter-component
            @getCurrentName="getCurrentName"
            @onSelectClan="onSelectClan"
            @onSelectGrade="onSelectGrade"
          />
          <my-characters-card v-if="allCharacters" v-bind:allMyCharacters="allMyCharacters" />          
          <my-characters-card v-if="allSearchedCharacter" v-bind:allMyCharacters="searchCharacter" />
        </div>
        <div class="row pagination-row-container margin--5vh-0-0-0">
          <div clss="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <Pagination
              v-if="!showspinner && nav.pages > 0"
              v-bind:nav="nav"
              v-bind:filters="filters"
              :getDatas="useFiltered ? 'CharacterFilteredPagination' : 'CharacterPagination'"
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
import functions from "../../../services/functions";
import CardHeader from "../GenericComponent/CardHeader.vue";
import CharacterService from "../../../services/CharacterService";
import Pagination from "../../Components/GenericComponent/Pagination.vue";
import FilterComponent from "../GenericComponent/FilterComponent.vue";
import MyCharactersCard from "./MyCharactersCard.vue";

export default {
  name: "OriginaleCharacterByUser",
  components: {
    Pagination,
    CardHeader,
    FilterComponent,
    MyCharactersCard
  },
  data() {
    return {
      usr: this.$store.state.auth.user.usrID,
      NbAllCharacters: null,
      allMyCharacters: [],
      filters: [],
      width: 1750,
      nav: {
        current: 0,
        pages: 0,
        step: 8,
      },
      showspinner: false,
      searchCharacter:{},
      allCharacters: true,
      allSearchedCharacter : false,      
      useFiltered: false,

    };
  },
  watch: {
    nameSearch(newVal) {
      if (!newVal || newVal.trim() === "") {
        this.useFiltered = false;
        this.nav.current = 0;
        this.getAllOriginalCharactersByUser(this.nav);
      } else {
        this.useFiltered = true;
        this.nav.current = 0;
        this.getOriginalCharacterByName(this.nameSearch, this.nav);
      }
    },
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      try {
        await this.CountNbOriginaleCharacterByUser(this.usr);
        await this.GetOriginaleCharacterByUser(this.usr, this.nav);
      } catch (error) {
        console.error("Erreur dans init :", error);
      }
    },
    async CountNbOriginaleCharacterByUser(user) {
      try {
        const response = await CharacterService.CountNbOriginaleCharacterByUser(user);
        this.NbAllCharacters = response.data.ob.count;
        functions.CalcPagination(this.NbAllCharacters, this.nav);
      } catch (error) {
        console.error("Erreur dans CountNbOriginaleCharacterByUser :", error);
      }
    },
    async CountNbOriginaleCharacterByName(id){
      this.allCharacters = false
      this.allSearchedCharacter = true
      if (!id || id.trim() === "") {
        this.allCharacters = true
        this.allSearchedCharacter = false
        await this.initPage();
        return;
      }
      try{
        const response = await CharacterService.CountNbOriginaleCharacterByName(id)
        this.nav.pages = functions.CalcPagination(
          response.data.ob.ob.count,
          this.nav,
          this.nav.step
        );
        await this.GetOriginalCharacterByName(id, this.nav)
      } catch (error) {
        console.error("Erreur dans CountNbOriginaleCharacterByUser :", error);
      }
    },
    async CharacterPagination(page) {
      this.nav.current = page;
      await this.GetOriginaleCharacterByUser(this.usr, this.nav);
    },    
    async CharacterFilteredPagination(page) {
      this.nav.current = page;
      await this.getOriginalCharacterByName(this.nameSearch, this.nav);
    },
    async GetOriginalCharacterByName(id, nav){
      try{
        const responseData = await CharacterService.GetOriginalCharacterByName(id, nav)
        this.searchCharacter = responseData.data.ob
        console.log(this.searchCharacter)
      }
      catch (error){
        console.error("Erreur dans CountNbOriginaleCharacterByUser :", error);
      }
    },
    async getCurrentName(e) {
      try{
        await this.CountNbOriginaleCharacterByName(e)
      }
      catch (error){
        console.error("Erreur dans CountNbOriginaleCharacterByUser :", error);
      }
    },
    async GetOriginaleCharacterByUser(user, nav) {
      if (window.innerWidth >= this.width) {
        this.nav.step = 8;
      } else {
        this.nav.step = 8;
      }
      try {
        const response = await CharacterService.GetOriginaleCharacterByUser(
          user,
          nav
        );
        this.allMyCharacters = response.data.ob;
        console.log(this.allMyCharacters)
      } catch (error) {
        console.error("Erreur dans GetOriginaleCharacterByUser :", error);
      }
    },
  },
};
</script>