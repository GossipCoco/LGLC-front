<template>
  <div class="card-body user-inbformation-conter>">
  <div class="padding-2-rem white-text">
    <div class="display-flex-column">
      <div class="roboto roboto">
        {{ usrInformation.LastName }} {{ usrInformation.FirstName }} -
        {{ usrInformation.UserName }}
      </div>
      <p class="roboto roboto">{{ usrInformation.Description }}</p>
      <p class="roboto roboto">
        {{ usrInformation.Biography }} <br />
      </p>
    </div>
  </div>
  <h1>Fiche personnage</h1>
  <hr />
  <div class="all-characters-by-user-container overflowY-hidden overflowX-hidden">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div
        class="col-3"
        v-for="(gamer, index) in usrInformation.Gamers"
        :key="index"
      >
      <div class="col-11">
      <div class="display-flex-row align-items-content-justify-content">
        <div class="card h-100 display-flex-row align-items-content-justify-content">
          <img            
            :src="gamer.Image"
            class="card-img-top avatar-gamer"
            :alt="gamer.UserName"
          />
          
            <h3 class="card-title cinzel">{{ gamer.UserName }}</h3>
            <div class="information-character-container  overflowY-X-hidden">
              <p>Clan de naissance : {{ gamer.ClanId }}</p>
              <p>Statut actuel : {{ gamer.Status }}</p>
              <p>Genre du personnage : {{ gamer.Genre }}</p>

          </div>
        </div>
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