<template>
  <div id="original-characters-list" class="row row-cols-1 row-cols-md-2 g-4 all-my-characters-container">
    <div class="col card-character-container" v-for="(character, index) in allMyCharacters" :key="index">
      <div class="card-group display-flex">
        <div class="card individual-character-card">
          <BackgroundImage v-bind:Image="character.Image" />
          <CharacterCardBody v-bind:id="character.Id" v-bind:name="character.UserName" v-bind:route="'/OriginaleCharacterDetails/'"/>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <Pagination
        v-if="!showspinner && nav.pages > 0"
        v-bind:nav="nav"
        v-bind:filters="filters"
        v-bind:getDatas="'CharacterPagination'"
        @CharacterPagination="CharacterPagination"
      />
    </div>
  </div>
</template>
<script>
import functions from "../../../services/functions";
import CharacterService from "../../../services/CharacterService";
import Pagination from "../../Components/GenericComponent/Pagination.vue";
import BackgroundImage from "./BackgroundImage.vue";
import CharacterCardBody from "./CharacterCardBody.vue";
export default {
  name: "OriginaleCharacterByUser",
  components: { Pagination, BackgroundImage, CharacterCardBody },
  data() {
    return {
      usr: this.$store.state.auth.user.usrID,
      NbAllCharacters: null,
      allMyCharacters: {},
      filters: [],
      nav: {
        current: 0,
        pages: 0,
        step: 8,
      },
      showspinner: false,
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
    init() {
      console.log(this.usr);
      this.CountNbOriginaleCharacterByUser(this.usr);
      this.GetOriginaleCharacterByUser(this.usr, this.nav);
    },
    CountNbOriginaleCharacterByUser(user) {
      CharacterService.CountNbOriginaleCharacterByUser(user)
        .then((response) => {
          console.log(response.data.ob);
          this.showspinner = false;
          this.NbAllCharacters = response.data.ob.count;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    CharacterPagination(page) {
      this.nav.current = page;
      console.log(this.nav);
      this.GetOriginaleCharacterByUser(this.usr, this.nav);
    },
    GetOriginaleCharacterByUser(user, nav) {
      CharacterService.GetOriginaleCharacterByUser(user, nav)
        .then((response) => {
          this.allMyCharacters = response.data.ob;
          functions.CalcPagination(
            this.NbAllCharacters,
            this.showPagination,
            this.nav,
            this.loading
          );
          console.log(this.nav);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>