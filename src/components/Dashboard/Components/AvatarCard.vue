<template>
  <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 card-global">
    <div class="row">
      <div class="card height-60-vh padding-0-rem border-none display-flex-column profil-card fiction-card background-lineart">
        <TitleHeaderDashboard
          v-bind:title="UserName"
          v-bind:type="'username'"
        />
        <div class="card-body user-info-text">
          <div class="row margin-2vh-0 avatar-row">
            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 avatar-avatar-card-container display-flex align-items-content-justify-content">
              <ImageRondDashboard v-bind:src="'/images/Avatars/' + Avatar" v-bind:alt="Avatar" v-bind:classe="'card-img-top height-15-vh width-15-vh border-radius-50'" v-bind:edit="true"/>
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
    "gamer",
    "NbOCs",
  ],
  components: { TitleHeaderDashboard, RoleLevel, UserInformation, ImageRondDashboard },
  data() {
    return {
      avatar: this.Avatar,
      lev: this.level,
      roleUser: this.Role,
    };
  },
};
</script>