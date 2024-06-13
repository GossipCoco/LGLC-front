<template>
  <router-view></router-view>
</template>
<script>
import EventBus from "./http/EventBus";
import UserService from "./services/UserService";
import jwtAPI from "./api/JwtApi";
export default {
  name: "App",

  data() {
    return {
      jwtApi: null,
      user: null,
      userInfo: null,
      usrAPI: null,
      usrRole: null,
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  created() {
    console.log(
      "Your screen resolution is: " +
        window.innerWidth +
        "x" +
        window.innerHeight
    );
    this.jwtApi = jwtAPI;
    if (this.$store.state.auth.user === null) {
      this.$router.push("/Accueil");
    } else {
      this.getUser(this.$store.state.auth.user.userID);
    }
    EventBus.on("logout", () => {
      this.logOut();
    });
  },
  methods: {
    getUser(currentUser) {
      UserService.getUserById(currentUser)
        .then((response) => {
          this.userInfo = response.data.ob;
        })
        .catch((error) => console.error(error));
    },
  },
  
  logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
};
</script>