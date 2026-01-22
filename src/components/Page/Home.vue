<template>
  <div class="container-fluid">
    <div class="row height-10-vh width-100-100 ">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <LeftMenu />
      </div>
      </div>      
      <div class="row height-100  width-100-100 padding-1-vh">
        <div class="height-100 width-100-100 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 padding-0">  
          <main class="container-fluid height-100 display-flex-column main-global-container width-100-100 padding-0">          
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