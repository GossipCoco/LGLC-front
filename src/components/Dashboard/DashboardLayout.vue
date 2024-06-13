<template>
  <div class="dashboard-home-max-card-container card">
    <div class="row top-dashboard">
      <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <TitleHeader v-if="!showspinner" v-bind:UserName="UserName" v-bind:Avatar="Avatar" />
        <div class="row bottom-top-dashboard">
          <div v-if="showspinner" class="d-flex justify-content-center">
        <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
      </div>
          <LastFiveFiction />

          

          <ExtractLastChap v-if="!showspinner" v-bind:userInfo="userInfo" />
          <AvatarCard v-if="!showspinner" v-bind:Avatar="Avatar" v-bind:UserName="usr" v-bind:LastConnexion="LastConnexion"
            v-bind:Inscription="Inscription" v-bind:level="LvelImf" v-bind:Role="role" v-bind:nBFiction="nBFiction"
            v-bind:totalWords="totalWordsV2" />
          <!-- <Statistics v-bind:nBFiction="nBFiction" v-bind:totalWords="totalWordsV2" />           -->
        </div>
      </div>
    </div>
    <div class="row bottom-dashboard">
      <ListAllFictions v-if="!showspinner" />
      <CharacterRandom v-if="!showspinner" v-bind:randomCharacters="randomCharacters" />
      <EasyAction v-if="!showspinner" />

    </div>
  </div>
</template>
<script>
import UserService from '../../services/UserService';
import FictionService from '../../services/FictionService';
import CharacterService from '../../services/CharacterService';
import TitleHeader from './Components/TitleHeader.vue';
import AvatarCard from './Components/AvatarCard.vue';
import LastFiveFiction from './Components/LastFiveFiction.vue';
// import Statistics from './Components/Statistics.vue';
import ExtractLastChap from './Components/ExtractLastChap.vue';
import CharacterRandom from './Components/CharacterRandom.vue';
import EasyAction from './Components/EasyAction.vue';
import ListAllFictions from './Components/ListAllFictions.vue';


export default {
  name: "DashboardLayout",
  components: {
    AvatarCard,
    LastFiveFiction,
    // Statistics,
    ExtractLastChap,
    TitleHeader,
    CharacterRandom,
    EasyAction,
    ListAllFictions
  },
  data() {
    return {
      showspinner: false,
      usrId: this.$store.state.auth.user.usrID,
      Avatar: null,
      UserName: null,
      Inscription: null,
      LastConnexion: null,
      role: null,
      level: null,
      totalWordsByFiction: {}, // Objet pour stocker les totaux par fiction
      nBFictionV2: 0, // Nombre de fictions
      totalWordsV2: 0, // Total de mots de toutes les fictions
      filters: [],
      nav: {
        current: 0,
        pages: 0,
        step: 3,
      },
      randomCharacters: [],
    }
  },
  created() {
    this.GetUserById(this.usrId);
    this.CountTotalWordByUserV2(this.usrId)
    this.GetAllCharactersDashboard(this.nav)
  },
  methods: {
    GetAllCharactersDashboard(nav) {
      this.showspinner = true
      CharacterService.GetAllCharactersDashboard({
        nav: nav,
      })
        .then((response) => {
          this.showspinner = false
          if (response && response.data) {
            const characters = response.data.ob;
            const randomCharacters = this.getRandomCharacters(characters[0], 3);
            this.randomCharacters = randomCharacters;
          }
        })
        .catch((err) => {
          console.error('erreur', err);
        });
    },

    getRandomCharacters(characters, count) {
      const shuffled = [...characters].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    },
    CountTotalWordByUserV2(e) {

      this.showspinner = true
      FictionService.CountTotalWordBuUserV2(e)
        .then((response) => {
          this.showspinner = false
          if (response && response.data) {
            const fictions = response.data.ob;
            let totalWords = 0;
            // Parcourir les fictions et calculer la somme des mots pour toutes les fictions
            fictions.forEach(fictionEntry => {
              fictionEntry.Game.Fiction.forEach(fiction => {
                const fictionWords = fiction.Chapters.reduce((sum, chapter) => sum + parseInt(chapter.NbWords, 10), 0);
                totalWords += fictionWords;
              });
            });
            this.totalWordsV2 = totalWords;
            this.nBFiction = fictions.length;
          }
        })
        .catch((err) => {
          console.error('erreur', err);
        });
    },

    GetUserById(e) {
      this.showspinner = true
      UserService.getUserById(e)
        .then((response) => {
          this.showspinner = false
          this.userInfo = response.data.ob
          this.Avatar = response.data.ob.Avatar
          this.usr = response.data.ob.UserName
          this.UserName = this.usr
          this.LastConnexion = response.data.ob.LastConnexion
          this.Inscription = response.data.ob.Inscription
          this.LvelImf = this.userInfo.Level.Image
          this.role = this.userInfo.Role
        })
        .catch((error) => {
          console.error(error);
        });
    },
  }
};
</script>