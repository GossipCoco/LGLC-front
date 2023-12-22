<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2 col-sm-2  col-md-2 col-lg-2 col-xl-2  col-xxl-2"><LeftMenu /></div>
      <div class="col-10 col-sm-10  col-md-10 col-lg-10 col-xl-10  col-xxl-10">
        <nav-bar />
        <main class="container">
          <div class="row">
          <router-view></router-view>
        </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "./services/UserService";
import LeftMenu from "./components/Navigation/LeftMenu.vue";
export default {
  name: "App",
  components: { LeftMenu, },
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