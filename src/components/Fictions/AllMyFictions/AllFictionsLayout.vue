<template>
  <div
    class="dashboard-max-card-container background-color-main-lineart flex-one card display-flex-column fiction-container"
  >
    <CardHeader v-bind:Title="'Lire toutes mes fictions'" />
    <div class="card-body">
      <SearchBarComponent 
        v-bind:For="'SearchCharacter'"
        v-bind:label="'Sélectionner un personnage'"
        v-bind:characters="characters"
        @form-character="getSearchedCharacter"
      />
      <AllCardsFictions v-bind:games="games" />
      <div class="row pagination-container">
        <div class="row bottom-top-dashboard">
          <Spinner v-if="showspinner" />
        </div>
        <Pagination
          v-if="!showspinner"
          v-bind:nav="nav"
          v-bind:filters="filters"
          v-bind:getDatas="'GamesPagination'"
          @GamesPagination="GamesPagination"
        />
      </div>
    </div>
  </div>
</template>
<script>
import CharacterService from "../../../services/CharacterService";
import GameService from "../../../services/GameService";
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
      usrId: this.$store.state.auth.user.usrID,
      characters: {},
      NbAllMyGamesFictions: 0,
      games: [],
      filters: [],
      showspinner: false,
      nav: {
        current: 0,
        pages: 0,
        step: 6,
      },
    };
  },
  created() {
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
      await this.countAllGames();
      await this.getAllGames(this.nav);
      this.showspinner = false;
    },
    async GamesPagination(page) {
      this.nav.current = page;
      await this.getAllGames(this.nav);
    },
    async countAllGames() {
      try {
        const response = await GameService.CountAllMyFictions(
          this.$store.state.auth.user.usrID
        );
        // console.log(response.data)
        this.NbAllMyGamesFictions = response.data.ob;
        // console.log(this.NbAllMyGamesFictions)
        this.nav.pages = Math.ceil(this.NbAllMyGamesFictions / this.nav.step);
      } catch (error) {
        console.error(error);
      }
    },
    async getAllGames(nav) {
      try {
        const response = await GameService.getAllGamesByUser(
          this.$store.state.auth.user.usrID,
          nav
        );
        this.games = response.data.ob;
        // console.log(this.games)
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>