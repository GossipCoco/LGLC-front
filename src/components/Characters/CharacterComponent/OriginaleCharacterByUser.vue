<template>
  <div class="row btn-create-character">
    <div clss="'col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12'">
      <router-link to="/CreateAnOriginalCharacter" class="btn btn-primary">
            Nouveau personnage
      </router-link>
    </div>
  </div>
  <div
    id="original-characters-list"
    class="row row-cols-1 row-cols-md-2 g-4 all-my-characters-container
    display-flex align-items-content-justify-content overflowY-X-hidden width-100-vh"
  >
    <div
      class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 card-character-container
      width-30-vh height-30-vh original-character-card-container"
      v-for="(character, index) in allMyCharacters"
      :key="index"
    >
      <div class="card-group display-flex">
        <div class="card individual-character-card height-30-vh">
          <BackgroundImage v-bind:Image="character.Image" />
          <CharacterCardBody
            v-bind:id="character.Id"
            v-bind:name="character.CurrentName"
            v-bind:route="'/OriginaleCharacterDetails/'"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="row pagination-row-container">
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
</template>
<script>
import functions from "../../../services/functions";
import CharacterService from "../../../services/CharacterService";
import Pagination from "../../Components/GenericComponent/Pagination.vue";
import BackgroundImage from "./BackgroundImage.vue";
import CharacterCardBody from "./CharacterCardBody.vue";

export default {
  name: "OriginaleCharacterByUser",
  components: {
    Pagination,
    BackgroundImage,
    CharacterCardBody,
  },
  data() {
    return {
      usr: this.$store.state.auth.user.usrID,
      NbAllCharacters: null,
      allMyCharacters: {},
      filters: [],
      width: 1750,
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
          this.showspinner = false;
          this.NbAllCharacters = response.data.ob.count;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    CharacterPagination(page) {
      this.nav.current = page;
      this.GetOriginaleCharacterByUser(this.usr, this.nav);
    },
    GetOriginaleCharacterByUser(user, nav) {
      if(window.innerWidth >= this.width){
          this.nav.step = 6
        }else if(window.innerWidth < this.width)
        {
          this.nav.step = 6
        }
      CharacterService.GetOriginaleCharacterByUser(user, nav)
        .then((response) => {
          this.allMyCharacters = response.data.ob;
          functions.CalcPagination(
            this.NbAllCharacters,
            this.showPagination,
            this.nav,
            this.loading
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>