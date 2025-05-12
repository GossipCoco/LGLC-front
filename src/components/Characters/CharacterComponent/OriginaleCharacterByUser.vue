<template>
  <div
    class="card border-none card-all-my-characters background-none align-items-content-justify-content width-190-vh"
  >
    <card-header
      v-bind:label="'Tous Mes personnages'"
      v-bind:route="'/CreateAnOriginalCharacter'"
      v-bind:NameLink="'Nouveau personnage'"
    />
    <div class="card-body width-200-vh height-90-vh">
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
          <my-characters-card v-bind:allMyCharacters="allMyCharacters" />
        </div>
        <div class="row pagination-row-container margin--5vh-0-0-0">
          <div clss="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <Pagination
              v-if="!showspinner && nav.pages > 0"
              v-bind:nav="nav"
              v-bind:filters="filters"
              v-bind:getDatas="'CharacterPagination'"
              @CharacterPagination="CharacterPagination"
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
      searchCharacter:{}
    };
  },
  created() {
    this.init();
  },
  methods: {
    truncateText(text, maxLength) {
      return text.length <= maxLength
        ? text
        : text.substring(0, maxLength) + "...";
    },
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
        console.log(e)
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
      } catch (error) {
        console.error("Erreur dans GetOriginaleCharacterByUser :", error);
      }
    },
  },
};
</script>