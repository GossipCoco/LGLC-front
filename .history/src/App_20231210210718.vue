<template>

          <router-view></router-view>

</template>

<script>
import UserService from "./services/UserService";
export default {
  name: "App",
  provide() {
    // use function syntax so that we can access `this`
    return {
      user: "gossipCoco",
    };
  },
  data() {
    return {
      currentURL: null,
      jwtAPI: null,
      currentUser: null,
      userInfo: null,
    };
  },
  created() {
    console.log(
      "Your screen resolution is: " +
        window.innerWidth +
        "x" +
        window.innerHeight
    );
    // this.jwtAPI = JwtApi
    this.currentUser = "gossipCoco";
    this.getUserById(this.currentUser);
    //if(!this.currentUser) this.$router.push({ path: "/signin" }).catch(() => {})
    //console.log(JwtApi.IsLogged(), this.currentUser)
  },
  methods: {
    getUserById(currentUser) {
      UserService.getUserById(currentUser)
        .then((response) => {
          this.userInfo = response.data.ob;
        })
        .catch((error) => console.error(error));
    },
  },
};
</script>