<template>
  <div :class="menuClass">
    <Logo v-bind:img="logo" />
    <ul :class="ulClass">
      <li :class="lilevel1">
        <router-link to="/dashboard" :active-class="activeClass" :exact-active-class="exactActiveClass">
          <div class="menu-level1 width-20-vh">
            <div class="menu-li-contain">
              <span :class="textLink">
                Tableau de bord
              </span>
            </div>
          </div>
        </router-link>
      </li>
      <li :class="lilevel1">
        <router-link to="/lgdc" class="menu-level1 width-20-vh" :class="{ 'menu-level1--active': isSectionActive('lgdc') }">
          <div class="menu-li-contain">
            <span
              class="menu-text poppins-text font-size-1em font-weight-600 color-ternary-green"
              :class="{ 'menu-text--active': isSectionActive('lgdc') }"
            >
              L'univers de LGDC
            </span>
          </div>
        </router-link>
      </li>
      <li :class="lilevel1">
        <router-link to="/creation" class="menu-level1 width-20-vh" :class="{ 'menu-level1--active': isSectionActive('creation') }">
          <div class="menu-li-contain">
            <span
              class="menu-text poppins-text font-size-1em font-weight-600 color-ternary-green"
              :class="{ 'menu-text--active': isSectionActive('creation') }"
            >
              Créations
            </span>
          </div>
        </router-link>
      </li>
      <li :class="lilevel1">
        <router-link to="/GroupLayout" class="menu-level1 width-20-vh" :class="{ 'menu-level1--active': isSectionActive('clubs') }">
          <div class="menu-li-contain">
            <span
              class="menu-text poppins-text font-size-1em font-weight-600 color-ternary-green"
              :class="{ 'menu-text--active': isSectionActive('clubs') }"
            >
              Clubs
            </span>
          </div>
        </router-link>
      </li>      
      <li :class="lilevel1">
        <router-link to="/games" class="menu-level1 width-20-vh" :class="{ 'menu-level1--active': isSectionActive('game') }">
          <div class="menu-li-contain">
            <span
              class="menu-text poppins-text font-size-1em font-weight-600 color-ternary-green"
              :class="{ 'menu-text--active': isSectionActive('game') }"
            >
              Jeux
            </span>
          </div>
        </router-link>
      </li>
      <li :class="lilevel1">
        <router-link
          to="/EventGlobal"
          :active-class="activeClass"
          :exact-active-class="exactActiveClass"
        >
          <div class="menu-level1 width-20-vh">
            <div class="menu-li-contain">
              <span
                class="menu-text poppins-text font-size-1em font-weight-600 color-ternary-green"
                >Event</span
              >
            </div>
          </div>
        </router-link>
      </li>
      <li :class="lilevel1" v-if="role === 'Administrateur'">
        <router-link
          to="/admin"
          :active-class="activeClass"
          :exact-active-class="exactActiveClass"
        >
          <div class="menu-level1 width-20-vh">
            <span class="menu-text poppins-text font-size-1em font-weight-600 color-ternary-green"
              >Admin</span
            >
          </div>
        </router-link>
      </li>
      <li :class="lilevel1">
        <div class="menu-li-contain">
          <div class="menu-level1 width-20-vh">
            <a href="#" @click.prevent="logout">
              <span
                class="menu-text poppins-text font-size-1em font-weight-600 color-ternary-green"
                >Logout</span
              >
            </a>
          </div>
        </div>
      </li>
    </ul>
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
      logo: "/images/Logos/lgdlc-logo-v5.png",
      menuClass:'menu-left background-lineart-menu d-flex display-flex-row flex-shrink-0 height-15-vh width-100-100 margin--0-0--2 scrollbar-color',
      ulClass: 'nav nav-pills display-flex-row mb-auto display-flex align-items-content-justify-content width-100-100',
      lilevel1: 'li-level1 display-flex-column align-items-content-justify-content',
      activeClass:'menu-link--active',
      exactActiveClass:'menu-link--exact-active',
      textLink: 'menu-text poppins-text font-size-1em font-weight-600 color-ternary-green'
    };
  },
  created() {
    this.GetUserById(this.usrId);
  },
  methods: {
    isSectionActive(section) {
      return this.$route.matched.some((r) => r.meta?.section === section);
    },
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
