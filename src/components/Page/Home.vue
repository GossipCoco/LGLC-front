<template>
  <div class="container-fluid">
    <div class="row height-100">
      <div class="col-xs-12 col-sm-12 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
        <LeftMenu />
      </div>
      <div class="height-100 col-xs-12 col-sm-12 col-md-11 col-lg-11 col-xl-11 col-xxl-11 padding-1-vh">
        <main class="container-fluid height-100 display-flex-column main-global-container">          
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import EventBus from "../../http/EventBus";
import UserService from "../../services/UserService";
import jwtAPI from "../../api/JwtApi";
import LeftMenu from "../Navigation/LeftMenu.vue";
export default {
  name: "Home",
  components: { LeftMenu },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      usrJob: null,
      userCurrent: null,
      usrCurrent: null,
      messageTestProvide: "Hello!",
      jwtApi: null,
      user: null,
      userInfo: null,
      Avatar: null,
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user.usrID;
    },
  },
  created() {
    this.jwtApi = jwtAPI;
    this.userCurrent = this.$store.state.auth.user.usrID;
    this.getUser(this.userCurrent);
    if (!this.currentUser) {
      this.$router.push("/Accueil");
    }
    this.jwtApi = jwtAPI.IsLogged
    EventBus.on("logout", () => {
      this.logOut();
    });
  },
  mounted() {},
  methods: {
    getUser(e) {
      UserService.getUserById(e)
        .then((response) => {
          this.userInfo = response.data.ob;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>