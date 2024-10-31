<template>
  <div class="card-body user-inbformation-conter>">
    <div class="padding-2-rem white-text">
      <div class="display-flex-row">
        <ImageRondDashboard v-bind:src="'/images/Avatars/' + usrInformation.Avatar" v-bind:alt="usrInformation.Avatar" v-bind:classe="'card-img-top mini-rond-avatar-image'"/>
        <div class="display-flex-column">
          <p class="roboto roboto">
            {{ usrInformation.LastName }} {{ usrInformation.FirstName }} -
            {{ usrInformation.UserName }}
          </p>
          <p class="roboto roboto">{{ usrInformation.Description }}</p>
          <p class="roboto roboto">
            {{ usrInformation.Biography }} 
            <!-- <br />  {{ usrInformation }} -->
          </p>
        </div>
      </div>
    </div>
    <OCGamerCard v-bind:gamers="usrInformation.Gamers" />
  </div>
</template>
<script>
import UserService from "../../../services/UserService";
import ImageRondDashboard from "../../Components/SpecificComponent/ImageRondDashboard.vue";
import OCGamerCard from "./OCGamerCard.vue";
export default {
  name: "UserInformations",
  components:{ImageRondDashboard, OCGamerCard},
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