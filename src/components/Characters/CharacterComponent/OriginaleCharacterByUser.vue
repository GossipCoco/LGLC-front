<template>
  <div class="row row-cols-1 row-cols-md-3 g- all-my-characters-container">
    <div
      class="col card-character-container"
      v-for="(character, index) in allMyCharacters"
      :key="index"
    >
      <div class="card-group">
        <div class="card individual-character-card">
          <img :src="character.Image" class="card-img-top" :alt="character.UserNam" />
          <div class="card-body display-flex-row">

              <div class="col-6">
                <h5 class="card-title">{{ character.UserName }}</h5>
              </div>
              <div class="col-6 btn-position">
                <router-link class="btn btn-primary" :to="'OriginaleCharacterDetails/'+character.UserName">Lire</router-link>
              </div>

          </div>
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
import CharacterService from "../../../services/CharacterService";
import Pagination from "../../Components/GenericComponent/Pagination.vue";
import functions from "../../../services/functions";
export default {
  name: "OriginaleCharacterByUser",
  components: { Pagination },
  data() {
    return {
      usr: this.$store.state.auth.user.usrID,
      NbAllCharacters: null,
      allMyCharacters: {},
      filters: [],
      nav: {
        current: 0,
        pages: 0,
        step: 6,
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