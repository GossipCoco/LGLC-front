<template>
  <div class="character-container-global">
    <character-card v-bind:characters_props="allCharacters" />
  </div>
  <div class="pagination-container">
    <pagination
      v-bind:nav="nav"
      v-bind:filters="filters"
      v-bind:getDatas="'CharacterPagination'"
      @CharacterPagination="CharacterPagination"
    />
  </div>
</template>
<script>
import CharacterService from "../../services/CharacterService";
import CharacterCard from "./CharacterCard.vue";
import Pagination from "../Components/GenericComponent/Pagination.vue";
import functions from "../../services/functions";
export default {
  name: "AllCharacters",
  components: { CharacterCard, Pagination },
  data() {
    return {
      NbAllCharacters: null,
      allCharacters: {},
      filters: [],
      nav: {
        current: 0,
        pages: 0,
        step: 6,
      },
    };
  },
  provide() {
    return {
      allCharacters: this.allCharacters,
    };
  },
  created() {
    this.userCurrent = "gossipcoco";
    this.getAllCharacters(this.nav, this.userCurrent, this.filters);
    this.countAllCharacter();
  },
  methods: {
    CharacterPagination(e) {
      console.log("e", e);
      this.nav.current = e;
      console.log(this.nav);
      this.getAllCharacters(this.nav, this.userCurrent, this.filters);
    },
    countAllCharacter() {
      CharacterService.CountAllCharacters()
        .then((response) => {
          // console.log(response)
          this.NbAllCharacters = response.data.ob;
          console.log(this.NbAllCharacters);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getAllCharacters(nav, userCurrent, filter) {
      console.log(nav, userCurrent, filter);
      CharacterService.getAllCharacters({
        usr: userCurrent,
        nav: nav,
        filters: filter,
      })
        .then((response) => {
          this.allCharacters = response.data.ob;
          console.log(this.allCharacters);
          return functions.CalcPagination(
            this.NbAllCharacters,
            this.showPagination,
            this.nav,
            this.loading
          );
          //
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>