<template>
  <div class="padding-2-rem">
    <div class="display-flex-column">
      <div class="user-information-paragraph">
        {{ usrInformation.LastName }} {{ usrInformation.FirstName }} -
        {{ usrInformation.UserName }}
      </div>
      <p class="user-information-paragraph">{{ usrInformation.Description }}</p>
      <p class="user-information-paragraph">
        {{ usrInformation.Biography }} <br />
      </p>
    </div>
  </div>
  <h1>Fiche personnage</h1>
  <hr />
  <div class="all-characters-by-user-container" v-for="(gamer, index) in usrInformation.Gamers" :key="index">
    <div class="user-information-paragraph">
      <h3>{{ gamer.UserName }}</h3>
      <div class="display-flex-row">
        <div class="display-flex-row">
          <div class="avatar-gamer-container">
            <div><img class="avatar-gamer" :src="gamer.Image" /></div>
            <div class="information-character-container">
              <p>Clan de naissance : {{ gamer.ClanId }}</p>
              <p>Statut actuel : {{ gamer.Status }}</p>
              <p>Genre du personnage : {{ gamer.Genre }}</p>
            </div>
          </div>
          <div class="informations-gamer-container display-flex">
            <div class="display-flex-column">
              <h2>Description</h2>
              <p v-html="gamer.Description"></p>
              <h2>Personnalité</h2>
              <p v-html="gamer.Personnality"></p>
              <h2>Biographie</h2>
              <p v-html="gamer.Biography"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserService from "../../../services/UserService";
export default {
  name: "UserInformations",
  props: ["user"],
  data() {
    return {
      usr: this.user,
      usrInformation: {},
    };
  },
  created() {
    this.GetUser(this.user);
    console.log(this.user);
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