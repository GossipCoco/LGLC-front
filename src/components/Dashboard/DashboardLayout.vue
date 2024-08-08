<template>
  <div id ="dashboard" class="dashboard-home-max-card-container card">
    <div class="row title-dashboard">
      <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <TitleHeader v-if="!showspinner" v-bind:UserName="UserName" v-bind:Avatar="Avatar" />
      </div>
    </div>
    <div v-if="showspinner" class="d-flex justify-content-center">
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="row top-dashboard">
      <LastFiveFiction />
      <ExtractLastChap v-if="!showspinner"/>
      <ListAllFictions v-if="!showspinner" />
      <AvatarCard v-if="!showspinner" v-bind:Avatar="Avatar" v-bind:UserName="usr" v-bind:LastConnexion="LastConnexion"
        v-bind:Inscription="Inscription" v-bind:level="LvelImf" v-bind:Role="role" v-bind:nBFiction="nBFictionV2"
        v-bind:totalWords="totalWordsV2" v-bind:totalPoints="totalPoints" />
    </div>
    <div class="row bottom-dashboard">
      <Scheduler />
      <Event />
      <CharacterRandom v-if="!showspinner" v-bind:randomCharacters="randomCharacters" />
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
import ExtractLastChap from './Components/ExtractLastChap.vue';
import CharacterRandom from './Components/CharacterRandom.vue';
import ListAllFictions from './Components/ListAllFictions.vue';
import Scheduler from './Components/Scheduler.vue';
import Event from './Components/Event.vue'

export default {
  name: "DashboardLayout",
  components: {
    AvatarCard,
    LastFiveFiction,
    ExtractLastChap,
    TitleHeader,
    CharacterRandom,
    ListAllFictions,
    Scheduler,
    Event,
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
      totalPoints:0,
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
            const randomCharacters = this.getRandomCharacters(characters, 2);
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
              fictionEntry.Fiction.forEach(fiction => {
                const fictionWords = fiction.Chapters.reduce((sum, chapter) => sum + parseInt(chapter.NbWords, 10), 0);
                totalWords += fictionWords;
              });
            });
            this.totalWordsV2 = totalWords;
            this.nBFictionV2 = fictions.length;
          }
        })
        .catch((err) => {
          console.error('erreur', err);
        });
    },
    calculateTotalPoints(pointsArray) {
    return pointsArray.reduce((total, point) => total + point.Points, 0);
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
          console.log(this.userInfo)
          this.totalPoints = this.calculateTotalPoints(this.userInfo.Points);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  }
};
</script>