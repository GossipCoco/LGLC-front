<template>
  <div class="row title-dashboard">
    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <TitleHeader
        v-if="!showspinner"
        v-bind:UserName="UserName"
        v-bind:Avatar="Avatar"
        v-bind:User="usr"
        v-bind:NbMessages="Nbmessages"        
        v-bind:usrId="usrId"
      />
    </div>
  </div>
  <Spinner v-if="showspinner" />
  <div class="scroll-bar-container">
    <div class="row top-dashboard">
      <AvatarCard
        v-if="!showspinner"
        v-bind:Avatar="Avatar"
        v-bind:UserName="usr"
        v-bind:LastConnexion="LastConnexion"
        v-bind:Inscription="Inscription"
        v-bind:level="level"
        v-bind:Role="role"
        v-bind:nBFiction="nBFictionV2"
        v-bind:totalWords="totalWordsV2"
        v-bind:totalPoints="totalPoints"
        v-bind:roleImage="roleImage"
        v-bind:NameRole="NameRole"
        v-bind:LevelName="LevelName"
        v-bind:gamer="gamer"
      />      
      <LastFiveFiction v-if="!showspinner" />
      <ExtractLastChap v-if="!showspinner" />      
    </div>
    <div class="row middle-dashboard">
      <CharacterByGamerV2 v-bind:gamer="gamer" v-if="!showspinner" />
    </div>
    <div class="row bottom-dashboard-levele-one">
      <div class="col-xxl-5 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <LastBook />
        <CharacterRandom v-if="!showspinner" v-bind:randomCharacters="randomCharacters"/>
      </div>
      <div class="col-xxl-7 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="row">
          <ListAllFictions v-if="!showspinner" />
          <GamesLinks v-if="!showspinner" />
        </div>
      </div>
    </div>
    <div class="row bottom-dashboard-levele-one-level-two">
      
    </div>
  </div>
</template>
<script>
import UserService from "../../services/UserService";
import FictionService from "../../services/FictionService";
import CharacterService from "../../services/CharacterService";
import TitleHeader from "./Components/TitleHeader.vue";
import AvatarCard from "./Components/AvatarCard.vue";
import LastFiveFiction from "./Components/LastFiveFiction.vue";
import ExtractLastChap from "./Components/ExtractLastChap.vue";
import CharacterRandom from "./Components/CharacterRandom.vue";
import ListAllFictions from "./Components/ListAllFictions.vue";
import LastBook from "./Components/LastBook.vue";
import GamesLinks from "./Components/GamesLinks.vue";
import Spinner from "../Components/GenericComponent/Spinner.vue";
import CharacterByGamerV2 from "./Components/CharacterByGamerV2.vue";
export default {
  name: "DashboardLayout",
  components: {
    AvatarCard,
    LastFiveFiction,
    ExtractLastChap,
    TitleHeader,
    CharacterRandom,
    ListAllFictions,
    LastBook,
    GamesLinks,
    Spinner,
    CharacterByGamerV2
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
      NameRole: null,
      LevelName:null,
      Nbmessages: null,
      totalWordsByFiction: {}, // Objet pour stocker les totaux par fiction
      nBFictionV2: 0, // Nombre de fictions
      totalWordsV2: 0, // Total de mots de toutes les fictions
      totalPoints: 0,
      filters: [],
      gamer: {},
      nav: {
        current: 0,
        pages: 0,
        step: 3,
      },
      randomCharacters: [],
      level: {},
      roleImage: null,
    };
  },
  created() {
    this.GetUserById(this.usrId);
    this.CountTotalWordByUserV2(this.usrId);
    this.GetAllCharactersDashboard(this.nav);
  },
  methods: {
    GetAllCharactersDashboard(nav) {
      this.showspinner = true;
      CharacterService.GetAllCharactersDashboard({
        nav: nav,
      })
        .then((response) => {
          this.showspinner = false;
          if (response && response.data) {
            const characters = response.data.ob;
            const randomCharacters = this.getRandomCharacters(characters, 6);
            this.randomCharacters = randomCharacters;
          }
        })
        .catch((err) => {
          console.error("erreur", err);
        });
    },

    getRandomCharacters(characters, count) {
      const shuffled = [...characters].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    },
    CountTotalWordByUserV2(e) {
      this.showspinner = true;
      FictionService.CountTotalWordBuUserV2(e)
        .then((response) => {
          this.showspinner = false;
          if (response && response.data) {
            const fictions = response.data.ob;
            let totalWords = 0;
            // Parcourir les fictions et calculer la somme des mots pour toutes les fictions
            fictions.forEach((fictionEntry) => {
              fictionEntry.Fiction.forEach((fiction) => {
                const fictionWords = fiction.Chapters.reduce(
                  (sum, chapter) => sum + parseInt(chapter.NbWords, 10),
                  0
                );
                totalWords += fictionWords;
              });
            });
            this.totalWordsV2 = totalWords;
            this.nBFictionV2 = fictions.length;
          }
        })
        .catch((err) => {
          console.error("erreur", err);
        });
    },
    calculateTotalPoints(pointsArray) {
      return pointsArray.reduce((total, point) => total + point.Points, 0);
    },
    GetUserById(e) {
      this.showspinner = true;
      UserService.getUserById(e)
        .then((response) => {
          this.userInfo = response.data.ob;
          this.Avatar = response.data.ob.Avatar;
          this.usr = response.data.ob.UserName;
          this.UserName = this.usr;
          this.LastConnexion = response.data.ob.LastConnexion;
          this.Inscription = response.data.ob.Inscription;
          this.LvelImf = this.userInfo.Level.Image;
          this.LevelName = this.userInfo.Level.Name
          this.role = this.userInfo.Role;
          this.NameRole = this.userInfo.Role.Name
          this.roleImage = this.userInfo.Role.Image;
          this.Nbmessages = this.userInfo.Messages.length;
          this.totalPoints = this.calculateTotalPoints(this.userInfo.Points);
          this.level = this.userInfo.Level;
          this.gamer = this.userInfo.Gamers;          
          this.showspinner = false;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>