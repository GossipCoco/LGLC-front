<template>
  <div class="container-fluid">
    <div class="row height-100-vh">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2  padding-2-vh">
        <profil-component
        v-bind:Avatar="Avatar" 
        v-bind:UserName="UserName"/>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-10 col-xxl-10">
        <div class="row height-18-vh">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 padding-2-vh">
            <title-welcome-component></title-welcome-component>
          </div>
        </div>
        <div class="row margin-0-0-2vh-0 height-30-vh">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-4 col-xxl-4">
                <last-fictions-component />
              </div>
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-4 col-xxl-4">
                <last-chapters />
              </div>
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-4 col-xxl-4">
                <my-clubs-components />
              </div>
            </div>
          </div>
        </div>        
        <div class="row margin-0-0-2vh-0 height-25-vh">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-8 col-xxl-8">
            <my-characters-component />
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-4 col-xxl-4">
            <easy-actions-components />
          </div>
        </div>        
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-8 col-xxl-8">
            <citation-component />
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-4 col-xxl-4">
            <parameters-component />
          </div>          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserService from "../../services/UserService.js";
import ProfilComponent from "./GenericComponent/ProfilComponent.vue";
import TitleWelcomeComponent from "./GenericComponent/TitleWelcomeComponent.vue";
import LastFictionsComponent from "./GenericComponent/LastFictionsComponent.vue";
import LastChapters from "./GenericComponent/LastChapters.vue";
import MyClubsComponents from "./GenericComponent/MyClubsComponents.vue";
import MyCharactersComponent from "./GenericComponent/MyCharactersComponent.vue";
import EasyActionsComponents from "./GenericComponent/EasyActionsComponents.vue";
import CitationComponent from "./GenericComponent/CitationComponent.vue";
import ParametersComponent from "./GenericComponent/ParametersComponent.vue";
export default {
  name: "WelcomeLayout",
  components: {
    ProfilComponent,
    TitleWelcomeComponent,
    LastFictionsComponent,
    LastChapters,
    MyClubsComponents,
    MyCharactersComponent,
    EasyActionsComponents,
    CitationComponent,
    ParametersComponent
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
      LevelName: null,
      Nbmessages: null,
      NbOCs: null,
      totalWordsByFiction: {}, // Objet pour stocker les totaux par fiction
      nBFictionV2: 0, // Nombre de fictions
      totalWordsV2: 0, // Total de mots de toutes les fictions
      totalPoints: 0,
    };
  },
  
  created() {
    this.GetUserById(this.usrId);
  },
  
  methods: {
    calculateTotalPoints(pointsArray) {
      return pointsArray.reduce((total, point) => total + point.Points, 0);
    },
    GetUserById(e) {
      this.showspinner = true;
      this.nav = {
        current: 0,
        pages: 0,
        step: 4,
      };
      UserService.getUserById(e)
        .then((response) => {
          this.userInfo = response.data.ob;
          console.log(response.data.ob)
          this.Avatar = response.data.ob.Avatar;
          this.UserName = response.data.ob.UserName;
          this.LastConnexion = response.data.ob.LastConnexion;
          this.Inscription = response.data.ob.Inscription;
          this.LvelImf = this.userInfo.Level.Image;
          this.LevelName = this.userInfo.Level.Name;
          this.role = this.userInfo.Role;
          this.NameRole = this.userInfo.Role.Name;
          this.roleImage = this.userInfo.Role.Image;
          this.totalPoints = this.calculateTotalPoints(this.userInfo.Points);
          this.showspinner = false;
        })
        .catch((error) => {
          console.error(error);
        });
    },

  }
};
</script>