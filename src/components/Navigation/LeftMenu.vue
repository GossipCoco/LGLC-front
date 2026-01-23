<template>
  <div class="left-menu-content">
    <div
      class="menu-left background-lineart-other03 d-flex display-flex-row flex-shrink-0 height-10-vh width-100-100 margin--0-0--2 scrollbar-color"
    >
      <Logo v-bind:img="logo" />
      <ul
        class="nav nav-pills display-flex-row mb-auto margin-1vh display-flex align-items-content-justify-content width-100-100"
      >
        <li
          class="li-level1 display-flex-column align-items-content-justify-content"
        >
          <router-link to="/dashboard">
            <div class="menu-level1  height-10-vh width-10-vh">
              <div class="menu-li-contain">
                <span
                  class="menu-text poppins-text font-size-1em font-weight-600"
                  >Accueil</span
                >
              </div>
            </div>
          </router-link>
        </li>
        <li
          class="li-level1 display-flex-column align-items-content-justify-content"
        >
          <router-link to="/lgdc">
            <div class="menu-level1  height-10-vh width-10-vh">
              <div class="menu-li-contain">
                <span
                  class="menu-text poppins-text font-size-1em font-weight-600"
                  >LGDC</span
                >
              </div>
            </div>
          </router-link>
        </li>
        <li
          class="li-level1 display-flex-column align-items-content-justify-content"
        >
          <router-link to="/creation">
            <div class="menu-level1  height-10-vh width-10-vh">
              <div class="menu-li-contain">
                <span
                  class="menu-text poppins-text font-size-1em font-weight-600"
                  >Créations</span
                >
              </div>
            </div>
          </router-link>
        </li>
        <li
          class="li-level1 display-flex-column align-items-content-justify-content"
        >
          <router-link to="/GroupLayout">
            <div class="menu-level1  height-10-vh width-10-vh">
              <div class="menu-li-contain">
                <span
                  class="menu-text poppins-text font-size-1em font-weight-600"
                  >Clubs</span
                >
              </div>
            </div>
          </router-link>
        </li>
        <li
          class="li-level1 display-flex-column align-items-content-justify-content"
        >
          <router-link to="/games">
            <div class="menu-level1  height-10-vh width-10-vh">
              <div class="menu-li-contain">
                <span
                  class="menu-text poppins-text font-size-1em font-weight-600"
                  >Jouer</span
                >
              </div>
            </div>
          </router-link>
        </li>
        <li
          class="li-level1 display-flex-column align-items-content-justify-content"
        >
          <router-link to="/EventGlobal">
            <div class="menu-level1  height-10-vh width-10-vh">
              <div class="menu-li-contain">
                <span
                  class="menu-text poppins-text font-size-1em font-weight-600"
                  >Event</span
                >
              </div>
            </div>
          </router-link>
        </li>
        <li class="li-level1" v-if="role === 'Administrateur'">
          <router-link to="/admin">
            <div class="menu-level1  height-10-vh width-10-vh">
              <span class="menu-text poppins-text font-size-1em font-weight-600"
                >Admin</span
              >
            </div>
          </router-link>
        </li>
        <li>
          <div class="menu-li-contain">
            <div class="menu-level1  height-10-vh width-10-vh">
              <a
                href="#"
                @click.prevent="logout"
              >
                <span
                  class="menu-text poppins-text font-size-1em font-weight-600"
                  >Logout</span
                >
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import UserService from "../../services/UserService";
import Logo from "./Components/Logo.vue";

export default {
  name: "LeftMenu",
  components: { Logo },
  data() {
    return {
      usrId: this.$store.state.auth.user.usrID,
      role: null,
      isMenuOpen: false,
      showSubMenu: false,
      logo: "/images/Logos/LaGuerredesClansLogos2.png",
    };
  },
  created() {
    this.GetUserById(this.usrId);
  },
  methods: {
    GetUserById(e) {
      UserService.getUserById(e)
        .then((response) => {
          this.role = response.data.ob.Role.Name;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleSubMenu() {
      this.showSubMenu = !this.showSubMenu;
    },
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/Accueil");
    },
  },
};
</script>
