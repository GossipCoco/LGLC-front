<template>
  <div class="card-body">
    <SearchBarComponent
      v-bind:For="'SearchCharacter'"
      v-bind:label="'Sélectionner un personnage'"
      v-bind:characters="characters"
      @form-character="getSearchedCharacter"
    />
    <spinner v-if="showspinner" />
    <AllCardsFictions v-else v-bind:games="games" />
    <div class="row pagination-container">
      <Pagination
        v-if="!showspinner"
        :nav="nav"
        :filters="filters"
        :getDatas="'GamesPagination'"
        @GamesPagination="GamesPagination"
      />
    </div>
  </div>
</template>
<script>
import CharacterService from "../../../services/CharacterService";
import SearchBarComponent from "../Components/SearchBarComponent.vue";
import Pagination from "../../Components/GenericComponent/Pagination.vue";
import GameService from "../../../services/GameService";
import AllCardsFictions from "./AllCardsFictions.vue";
import Spinner from "../../Components/GenericComponent/Spinner.vue";
export default {
  name: "SummaryFiction",
  components: { AllCardsFictions, SearchBarComponent, Pagination, Spinner },
  data() {
    return {
      characters: {},
      showspinner: false,
      usrId: "",
      NbAllMyGamesFictions: 0,
      games: [],
      filters: [],
      nav: {
        current: 0,
        pages: 0,
        step: 6,
      },
    };
  },
  created() {
    this.usrId = ""; // Assurez-vous de définir ou récupérer l'ID utilisateur
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
    truncateText(text, maxLength) {
      return text.length <= maxLength
        ? text
        : text.substring(0, maxLength) + "...";
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
        const response = await GameService.countAllGames();
        console.log(response.data.ob);
        this.NbAllMyGamesFictions = response.data.ob;
        this.nav.pages = Math.ceil(this.NbAllMyGamesFictions / this.nav.step);
      } catch (error) {
        console.error(error);
      }
    },
    async getAllGames(nav) {
      try {
        const response = await GameService.getAllGames(nav);
        this.games = response.data.ob;
        console.log(this.games);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>