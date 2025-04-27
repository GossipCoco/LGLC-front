<template>
  <div class="row row-filter background-color-dark-green-01 display-flex vertical-align-middle">
    <InputName
      class="input-name-margin"
      v-bind:col="'col-xxl-4 col-xl-3 col-lg-12 col-md-12 col-sm-12 col-xs-12'"
      v-bind:forId="'inputName'"
      v-bind:label="'Nom du personnage'"
      v-bind:getNameData="'getCurrentName'"
      @getCurrentName="getCurrentName"
    />
    <GenericSelect
      v-bind:col="'col-xxl-3 col-xl-3 col-lg-12 col-md-12 col-sm-12 col-xs-12'"
      v-bind:For="'SearchClan'"
      v-bind:label="'Clan'"
      v-bind:formdata="'getclans'"
      v-bind:clans="clans"
      @getclans="getclans"
    />
    <GenericSelect
      v-bind:col="'col-xxl-3 col-xl-3 col-lg-12 col-md-12 col-sm-12 col-xs-12'"
      v-bind:For="'SearchGrade'"
      v-bind:label="'Grade'"
      v-bind:formdata="'getgrade'"
      @getgrade="getgrades"
    />
  </div>
  <div class="row btn-create-character">
    <div clss="'col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12'">
      <Pagination
        v-if="!showspinner && nav.pages > 0"
        v-bind:nav="nav"
        v-bind:filters="filters"
        v-bind:getDatas="'CharacterPagination'"
        @CharacterPagination="CharacterPagination"
      />
    </div>
    </div>      
    <div clss="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-btn-container">
      <router-link to="/CreateAnOriginalCharacter" class="btn btn-primary">
            Nouveau personnage
      </router-link>
    </div>
  <div class="row">
    <div class="col">
      
  </div>
  <div
    id="original-characters-list"
    class="row row-cols-1 row-cols-md-2 g-4 all-my-characters-container display-flex align-items-content-justify-content overflowY-X-hidden"
  >
    <div
      class="col card-character-container height-30-vh original-character-card-container"
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
  </div>
</template>
<script>
import functions from "../../../services/functions";
import CharacterService from "../../../services/CharacterService";
import Pagination from "../../Components/GenericComponent/Pagination.vue";
import BackgroundImage from "./BackgroundImage.vue";
import CharacterCardBody from "./CharacterCardBody.vue";
import InputName from "../../Components/FormComponent/InputName.vue";
import GenericSelect from "../../Components/FormComponent/GenericSelect.vue";

export default {
  name: "OriginaleCharacterByUser",
  components: {
    Pagination,
    BackgroundImage,
    CharacterCardBody,
    InputName,
    GenericSelect,
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
        step: 12,
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
          this.nav.step = 12
        }else if(window.innerWidth < this.width)
        {
          this.nav.step = 12
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