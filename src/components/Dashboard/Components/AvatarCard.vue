<template>
  <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 card-global">

      <div class="card height-60-vh padding-0-rem border-none display-flex-column profil-card fiction-card background-lineart">
        <TitleHeaderDashboard
          v-bind:title="UserName"
          v-bind:type="'username'"
        />
        <div class="card-body user-info-text">
          <div class="row margin-2vh-0 avatar-row width-50-vh height-12-vh">
            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 avatar-avatar-card-container display-flex display-flex-row align-items-content-justify-content">
              <div class="row width-85-vh height-12-vh">
                <div class="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
                <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-5 avatar-col">
                  <ImageRondDashboard v-bind:src="'/images/Avatars/' + Avatar" v-bind:alt="Avatar" v-bind:classe="'card-img-top'" v-bind:edit="true"/>
                </div>
                <div class="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1">
                  <router-link :to="'/user/' + usrId">
                    <font-awesome-icon icon="pen" />
                  </router-link>
                </div>
                <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-5"></div>
              </div>
            </div>
          </div>
          <role-level
            v-bind:NameRole="NameRole"
            v-bind:Image="level.Image"
            v-bind:LevelName="LevelName"
            v-bind:roleImage="roleImage"
          />
          <user-information
            v-bind:Inscription="Inscription"
            v-bind:LastConnexion="LastConnexion"
            v-bind:nBFiction="nBFiction"
            v-bind:totalWords="totalWords"
            v-bind:totalPoints="totalPoints"
            v-bind:NbOCs="NbOCs"
          />
        </div>
      </div>

  </div>
</template>
<script>
import TitleHeaderDashboard from "../../Components/SpecificComponent/TitleHeaderDashboard.vue";
import RoleLevel from "../ComponentGeneric/RoleLevel.vue";
import UserInformation from "../ComponentGeneric/UserInformation.vue";
import ImageRondDashboard from "../../Components/SpecificComponent/ImageRondDashboard.vue"
export default {
  name: "AvatarCard",
  props: [
    "Avatar",
    "UserName",
    "LastConnexion",
    "Inscription",
    "level",
    "Role",
    "nBFiction",
    "totalWords",
    "totalPoints",
    "roleImage",
    "NameRole",
    "LevelName",
    "NbOCs",
  ],
  components: { TitleHeaderDashboard, RoleLevel, UserInformation, ImageRondDashboard },
  data() {
    return {
      usrId: this.$store.state.auth.user.usrID,
      avatar: this.Avatar,
      lev: this.level,
      roleUser: this.Role,
    };
  },
};
</script>