<template>
  <div v-if="!showspinner" class="card-body user-information-container">
    <div class="padding-4-vh white-text">
      <div class="display-flex-row">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
            <ImageRondDashboard
              v-bind:src="'/images/Avatars/' + usrInformation.Avatar"
              v-bind:alt="usrInformation.Avatar"
              v-bind:classe="'card-img-top border-radius-50'"
              v-bind:ImgClass="'width-25-vh height-25-vh'"              
              v-bind:edit="false"
            />
          </div>
          <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
            <div class="display-flex-column user-profil-image">              
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-18 col-lg-8 col-xl-8 col-xxl-8">
                  <p class="roboto roboto">
                    {{ LastName }} {{ FirstName }} - {{ usrInformation.UserName }}
                  </p>
                  <p class="roboto roboto">{{ usrInformation.Description }}</p>
                  <p class="roboto roboto">{{ usrInformation.Biography }}</p>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-10 col-lg-4 col-xl-4 col-xxl-4">
                  {{ imageLevel }}
                  <level-role-component
                    v-bind:nameLevel="nameLevel"
                    v-bind:imageLevel="imageLevel"
                    v-bind:nameRole="nameRole"
                    v-bind:imageRole="imageRole"

                  />
                  <!-- <div class="display-flex-row role-level-user-container">
                    <div class="display-flex-column">
                      <p class="roboto roboto">Niveau {{  nameLevel }}</p>
                      <img :src="'/images/Levels/' + imageLevel" :alt="imageLevel" loading="lazy" class="width-15-vh height-15-vh"/>
                    </div>
                    <div class="display-flex-column">
                      <p class="roboto roboto">Rôle {{  nameRole }}</p>
                      <img :src="'/images/Levels/' + imageRole" :alt="imageRole" loading="lazy" class="width-15-vh height-15-vh"/>
                    </div>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <OCGamerCard v-bind:gamers="usrInformation.Gamers" v-if="!showspinner" />
  </div>
</template>
<script>
import UserService from "../../../services/UserService";
import ImageRondDashboard from "../../Components/SpecificComponent/ImageRondDashboard.vue";
import LevelRoleComponent from "./LevelRoleComponent.vue";
import OCGamerCard from "./OCGamerCard.vue";
export default {
  name: "UserInformations",
  components: { ImageRondDashboard, OCGamerCard, LevelRoleComponent },
  props: ["user"],
  data() {
    return {
      showspinner: false,
      usr: this.user,
      usrInformation: {},
      level: {},
      role: {},
      nameRole: null,
      nameLevel: null,
      imageRole: null,
      imageLevel: null,
      LastName: null,
      FirstName: null,
      UserName: null,
    };
  },
  created() {
    this.GetUser(this.user);
  },
  methods: {
    GetUser(username) {
      UserService.GetUserByUsername(username)
        .then((response) => {
          this.usrInformation = response.data.ob;
          this.LastName = this.usrInformation.LastName
          this.FirstName = this.usrInformation.FirstName
          this.UserName = this.usrInformation.UserName
          this.level = response.data.ob.Level
          this.role = response.data.ob.Role
          this.nameLevel = this.level.Name
          this.nameRole = this.role.Name
          this.imageLevel = this.level.Image
          this.imageRole = this.role.Image          
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>