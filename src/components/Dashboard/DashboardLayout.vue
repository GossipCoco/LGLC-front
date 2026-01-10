<template>
  <div id="dashboard-layout-container" class="scroll-bar-container" v-if="!showspinner">
    <div class="row title-dashboard">
      <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <TitleHeader
          v-if="!showspinner"
          v-bind:UserName="UserName"
          v-bind:User="UserName"
          v-bind:usrId="usrId"
        />
      </div>
    </div>
    <Spinner v-if="showspinner" />
    <div>
      <div class="row top-dashboard">
        <AvatarCard
          v-if="!showspinner"
          v-bind:Avatar="Avatar"
          v-bind:UserName="UserName"
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
          v-bind:NbOCs="NbOCs"
        />      
        <LastFiveFiction v-if="!showspinner" />
        <ExtractLastChap v-if="!showspinner" />
        <CharacterByGamerV2 v-bind:gamer="gamer" v-if="!showspinner" />
      </div>
      <div class="row middle-dashboard">
        <separator v-bind:Title="'Tout sur l\'univers de la Guerre des Clans'" />
      </div>
      <div class="row bottom-dashboard-levele-one">
        <div class="col-xxl-5 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <Video v-if="!showspinner" ></Video>
          <new-arc v-if="!showspinner" />
          <LastBook v-if="!showspinner"/>
          
        </div>
        <div class="col-xxl-7 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="row fictions-games-container">
            <CharacterRandom v-if="!showspinner" v-bind:randomCharacters="randomCharacters"/>            
            <ListAllFictions v-if="!showspinner" />       
          </div>
        </div>
      </div>
      <div class="row middle-separator">
        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <separator v-bind:Title="'Nos jeux & vos créations'" />
        </div>
      </div>      
      <div class="row bottom-dashboard-levele-three mar-2vh-0-24vh-0 height-60-vh">
        <div class="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12">
          <GamesLinks v-if="!showspinner" />
        </div>
        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
          <easy-action />          
          <music-player />
        </div>        
        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
          <!-- <tchat-component /> -->
        </div>
      </div>
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
import Separator from "./ComponentGeneric/Separator.vue";
import EasyAction from "./Components/EasyAction.vue";
import MusicPlayer from "./Components/MusicPlayer.vue";
import Video from "./Components/Video.vue";
import NewArc from "./Components/NewArc.vue";
// import TchatComponent from '../Components/GenericComponent/TchatComponent.vue';
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
    CharacterByGamerV2,
    Separator,
    EasyAction,
    MusicPlayer,
    Video,
    NewArc,
    // TchatComponent
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
      NbOCs: null,
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
    this.CountNbOriginaleCharacterByUser(this.usrId)
  },
  methods: {
    CountNbOriginaleCharacterByUser(e){
      CharacterService.CountNbOriginaleCharacterByUser(e)
      .then((response) => {
        this.NbOCs = response.data.ob.count
      })
      .catch((err) => {
          console.error("erreur", err)
      });
    },
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
      this.nav = {
        current: 0,
        pages: 0,
        step: 4,
      }
      UserService.getUserById(e)
        .then((response) => {
          console.log(response.data.ob)
          this.userInfo = response.data.ob;
          this.Avatar = response.data.ob.Avatar;
          this.UserName = response.data.ob.UserName;
          this.LastConnexion = response.data.ob.LastConnexion;
          this.Inscription = response.data.ob.Inscription;
          this.LvelImf = this.userInfo.Level.Image;
          this.LevelName = this.userInfo.Level.Name
          this.role = this.userInfo.Role;
          this.NameRole = this.userInfo.Role.Name
          this.roleImage = this.userInfo.Role.Image;          
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