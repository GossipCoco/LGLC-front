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

          <div
            class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-10"
          >
            <div
              id="all-characters-container-card"
              class="row all-characters-container-card width-150-vh"
            >
              <div
                class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 display-flex-row align-items-content-justify-content character-container overflowY-X-hidden"
              >
                <div
                  class="card-character-container width-30-vh height-35-vh original-character-card-container"
                  v-for="(character, index) in allMyCharacters"
                  :key="index"
                >
                  <div class="card-group display-flex height-35-vh width-35-vh">
                    <div
                      class="card individual-character-card background-position-50-percent height-32-vh background-lineart margin-1vh"
                    >
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
          </div>
        </div>
        <div class="row pagination-row-container margin--10vh-0-0-0">
          <div
            clss="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"
          >
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
import BackgroundImage from "../GenericComponent/BackgroundImage.vue";
import CharacterCardBody from "../GenericComponent/CharacterCardBody.vue";
import FilterComponent from "../GenericComponent/FilterComponent.vue";
// import CharacterCard from "./CharacterCard.vue";

export default {
  name: "OriginaleCharacterByUser",
  components: {
    Pagination,
    CardHeader,
    FilterComponent,
    BackgroundImage,
    CharacterCardBody,
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
        const response = await CharacterService.CountNbOriginaleCharacterByUser(
          user
        );
        this.NbAllCharacters = response.data.ob.count;
        functions.CalcPagination(this.NbAllCharacters, this.nav);
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