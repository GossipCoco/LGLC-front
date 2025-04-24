<template>
  <div v-if="!showspinner" class="card-body user-information-container">
    <div class="padding-2-rem white-text">
      <div class="display-flex-row">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
            <ImageRondDashboard
              v-bind:src="'/images/Avatars/' + usrInformation.Avatar"
              v-bind:alt="usrInformation.Avatar"
              v-bind:classe="'card-img-top mini-rond-avatar-image'"
            />
          </div>
          <div
            class="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10"
          >
            <div class="display-flex-column user-profil-image">
              <div class="display-flex-row">
                <div class="display-flex-column user-profil-image">
                  <p class="text-white poppins-text">
                    Rôle : {{ usrInformation.Level.Name }}
                  </p>
                  <img
                    :src="'/images/Levels/' + usrInformation.Level.Image"
                    :alt="usrInformation.Level.Image"
                    loading="lazy"
                    class="level-role-width"
                  />
                </div>
                <div class="display-flex-column user-profil-image">
                  <p class="text-white poppins-text">
                    Niveau : {{ usrInformation.Role.Name }}
                  </p>
                  <img
                    :src="'/images/Levels/' + usrInformation.Role.Image"
                    :alt="usrInformation.Role.Image"
                    loading="lazy"
                    class="level-role-width"
                  />
                </div>
              </div>
              <p class="roboto roboto">
                {{ usrInformation.LastName }} {{ usrInformation.FirstName }} -
                {{ usrInformation.UserName }}
              </p>
              <p class="roboto roboto">{{ usrInformation.Description }}</p>
              <p class="roboto roboto">
                {{ usrInformation.Biography }}
              </p>
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
import OCGamerCard from "./OCGamerCard.vue";
export default {
  name: "UserInformations",
  components: { ImageRondDashboard, OCGamerCard },
  props: ["user"],
  data() {
    return {
      showspinner: false,
      usr: this.user,
      usrInformation: {},
    };
  },
  created() {
    this.GetUser(this.user);
  },
  methods: {
    GetUser(username) {
      UserService.GetUserByUsername(username)
        .then((response) => {
          console.log(response.data.ob);
          this.usrInformation = response.data.ob;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>