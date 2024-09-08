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
  <div
    class="user-information-paragraph"
    v-for="(gamer, index) in usrInformation.Gamers"
    :key="index"
  >
    <h3>{{ gamer.UserName }}</h3>
    <div class="display-flex-row">
      <div class="avatar-gamer-container">
        <img class="avatar-gamer" :src="gamer.Image" />
      </div>

      <p v-html="gamer.ClanId"></p>
      <p v-html="gamer.Status"></p>
      <p v-html=" gamer.Genre"></p>
      <p v-html="gamer.Description"></p>
      <p v-html="gamer.Biography"></p>
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