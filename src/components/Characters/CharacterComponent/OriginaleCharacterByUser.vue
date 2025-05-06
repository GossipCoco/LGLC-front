<template>
  <div class="card card-all-my-characters background-none align-items-content-justify-content width-190-vh">
    <div class="card-header border-radius-12px background-color-dark-green-01 display-flex-row align-items-content-justify-content width-190-vh">
      <h1 class="text-white poppins-text">Mes personnages</h1>
      <router-link
        to="/CreateAnOriginalCharacter"
        class="btn btn-lg btn-primary margin-0-0-0-2vh"
      >
        Nouveau personnage
      </router-link>
    </div>
    <div class="card-body height-90-vh">
      <div
        id="original-characters-list"
        class="row row-cols-1 row-cols-md-2 g-4 all-my-characters-container display-flex align-items-content-justify-content overflowY-X-hidden height-90-vh width-120-vh"
      >
        <div
          class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 card-character-container width-30-vh height-35-vh original-character-card-container"
          v-for="(character, index) in allMyCharacters"
          :key="index"
        >
          <div class="card-group display-flex width-35-vh">
            <div class="card individual-character-card background-position-50-percent height-35-vh background-lineart margin-1vh">
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
      <div class="row pagination-row-container margin--1vh-0-0-0">
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
</template>
<script>
import functions from "../../../services/functions";
import CharacterService from "../../../services/CharacterService";
import Pagination from "../../Components/GenericComponent/Pagination.vue";
import BackgroundImage from "../GenericComponent/BackgroundImage.vue";
import CharacterCardBody from "../GenericComponent/CharacterCardBody.vue";

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
    async init() {
      try {
        console.log("User :", this.usr);

        // On attend d’abord que le comptage soit terminé
        await this.CountNbOriginaleCharacterByUser(this.usr);

        // Ensuite, on récupère les personnages (car il faut nav.pages déjà calculé !)
        await this.GetOriginaleCharacterByUser(this.usr, this.nav);
      } catch (error) {
        console.error("Erreur dans init :", error);
      }
    },
    async CountNbOriginaleCharacterByUser(user) {
      try {
        const response = await CharacterService.CountNbOriginaleCharacterByUser(
          user
        );
        this.NbAllCharacters = response.data.ob.count;
        functions.CalcPagination(this.NbAllCharacters, this.nav);
        console.log("NbAllCharacters :", this.NbAllCharacters);
        console.log("nav.pages :", this.nav.pages);
      } catch (error) {
        console.error("Erreur dans CountNbOriginaleCharacterByUser :", error);
      }
    },
    async CharacterPagination(page) {
      this.nav.current = page;
      await this.GetOriginaleCharacterByUser(this.usr, this.nav);
    },
    async GetOriginaleCharacterByUser(user, nav) {
      if (window.innerWidth >= this.width) {
        this.nav.step = 6;
      } else {
        this.nav.step = 6;
      }

      try {
        const response = await CharacterService.GetOriginaleCharacterByUser(
          user,
          nav
        );
        this.allMyCharacters = response.data.ob;

        // Ce log est utile pour vérifier que tout est cohérent
        console.log("Personnages récupérés :", this.allMyCharacters.length);
      } catch (error) {
        console.error("Erreur dans GetOriginaleCharacterByUser :", error);
      }
    },
  },
};
</script>