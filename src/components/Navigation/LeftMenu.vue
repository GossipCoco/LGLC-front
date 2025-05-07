<template>
  <div class="left-menu-content" :class="{ 'menu-expanded': isExpanded }">
  <div
    class="menu-left background-lineart-other03 d-flex flex-column overflowY-auto
    flex-shrink-0 height-100-vh width-20-vh margin--0-0--2"
  >
    <Logo v-bind:img="logo" />
    <ul class="nav nav-pills flex-column mb-auto display-flex align-items-content-justify-content width-10-vh">
      <li class="li-level1 display-flex-column align-items-content-justify-content">
        <router-link to="/dashboard">
          <div class="menu-level1">
            <div class="menu-li-contain">
              <div class="icon-menu-container  border-radius-100  background-color-clear-green-02  display-flex align-items-content-justify-content">
                <img src="/images/icons/home.svg" />
              </div>
            </div>
          </div>
        </router-link>
      </li>
      <li class="li-level1 display-flex-column align-items-content-justify-content">
        <div
          data-bs-toggle="collapse"
          href="#collapseExample3"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample3"
        >
          <div class="menu-level1">
            <div class="menu-li-contain">
              <div class="icon-menu-container  border-radius-100  background-color-clear-green-02  display-flex align-items-content-justify-content">
                <img
                  src="/images/icons/Logo-thunderclan-textless.png"
                  style="width: 1.25rem"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="collapse display-flex-column align-items-content-justify-content " id="collapseExample3">
          <p class="text-white">LGDC</p>
          <div v-for="(menu, index) in SecondeSubMenu" :key="index">
            <router-link :to="menu.link" class="link-collapse color-clear-green-02  display-flex-column align-items-content-justify-content ">
            {{ menu.title }}
            </router-link>  
          </div>
        </div>
      </li>
      <li class="li-level1 display-flex-column align-items-content-justify-content">
        <div
          data-bs-toggle="collapse"
          href="#collapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample1"
        >
          <div class="menu-level1">
            <div class="menu-li-contain">
              <div class="icon-menu-container  border-radius-100  background-color-clear-green-02  display-flex align-items-content-justify-content">
                <img src="/images/icons/cloud-solid.svg" />
              </div>
            </div>
          </div>
        </div>
        <div class="collapse display-flex-column align-items-content-justify-content " id="collapseExample1">
          <router-link class="link-collapse color-clear-green-02  display-flex-column align-items-content-justify-content " to="/OriginaleCharacterByUser" >
            Mes personnages</router-link>
          <router-link class="link-collapse color-clear-green-02  display-flex-column align-items-content-justify-content " :to="'/allFictions/' + usrId">
            Mes fictions
          </router-link>
          <router-link class="link-collapse color-clear-green-02  display-flex-column align-items-content-justify-content " to="/AllExistingFictionsLayout">
            Lire des fictions
          </router-link>
        </div>
      </li>
      <li class="li-level1 display-flex-column align-items-content-justify-content">
        <div
          data-bs-toggle="collapse"
          href="#creation"
          role="button"
          aria-expanded="false"
          aria-controls="creation"
        >
          <div class="menu-level1">
            <div class="menu-li-contain">
              <div class="icon-menu-container  border-radius-100  background-color-clear-green-02  display-flex align-items-content-justify-content">
                <img src="/images/icons/pen-nib-solid.svg" />
              </div>

            </div>
          </div>
        </div>
        <div class="collapse display-flex-column align-items-content-justify-content " id="creation">
          <router-link class="link-collapse color-clear-green-02  display-flex-column align-items-content-justify-content " to="/createANewFiction">
            Nouvelle fiction
          </router-link>
          <router-link to="/CreateAnOriginalCharacter" class="link-collapse color-clear-green-02  display-flex-column align-items-content-justify-content ">
            Nouvel OC
          </router-link> 
        </div>
      </li>
      <li class="li-level1 display-flex-column align-items-content-justify-content">
        <div
          to="/game"
          data-bs-toggle="collapse"
          href="#collapseExample0"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample0"
        >
          <div class="menu-level1">
            <div class="menu-li-contain">
              <div class="icon-menu-container  border-radius-100  background-color-clear-green-02  display-flex align-items-content-justify-content">
                <img src="/images/icons/gamepad-solid.svg" />
              </div>
            </div>
          </div>
        </div>
        <div class="collapse display-flex-column align-items-content-justify-content " id="collapseExample0">
          <div v-for="(menu, index) in GameMenu" :key="index">
            <router-link :to="menu.link" class="link-collapse color-clear-green-02  display-flex-column align-items-content-justify-content ">
            {{ menu.title }}
            </router-link>  
          </div>
        </div>
      </li>
      <li class="li-level1 display-flex-column align-items-content-justify-content">
        <router-link to="/EventGlobal">
          <div class="menu-level1">
            <div class="menu-li-contain">
              <div class="icon-menu-container  border-radius-100  background-color-clear-green-02  display-flex align-items-content-justify-content">
                <img src="/images/icons/calendar-days-solid.svg" />
              </div>
            </div>
          </div>
        </router-link>
      </li>      
      <li class="li-level1" v-if="role === 'Administrateur'">
        <router-link to="/admin">
          <div class="menu-level1">
            <div class="icon-menu-container  border-radius-100  background-color-clear-green-02  display-flex align-items-content-justify-content">
              <img src="/images/icons/profil.svg" />
            </div>
          </div>
        </router-link>
      </li>
      <li class="li-level1 display-flex-column align-items-content-justify-content">
        <router-link :to="'/user/' + usrId">
          <div class="menu-level1">
            <div class="icon-menu-container  border-radius-100  background-color-clear-green-02  display-flex align-items-content-justify-content">
              <img src="/images/icons/user.svg" />
            </div>
            <div class="chevron-container">
              <i class="fa-solid fa-chevron-down" style="opacity: 0"></i>
            </div>
          </div>
        </router-link>
      </li>
      <li class="li-level1 display-flex-column align-items-content-justify-content">
        <div class="menu-level1">
          <div class="icon-menu-container  border-radius-100  background-color-clear-green-02  display-flex align-items-content-justify-content">
            <a href="#" @click.prevent="logout" class="logout-li-container display-flex-row">
              <img
                src="../../../public//images/icons/right-from-bracket-solid-colored.svg"
                width="25px"
              />
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
      logo: "/images/Logos/LaGuerredesClansLogos2.png",
      SecondeSubMenu:
            [{ title: "Personnages", link: "/allCharacters" },
            {title: 'Map', link: '/MapForest'},
            { title: "Clans", link: "/AllClansLayout" },
            { title: "Lieux", link: "/AllLocationsLayout" },
            { title: "Arcs & Livres", link: "/ArcBookLayout" },],
      GameMenu:  [
            { title: "Jeu de dé", link: "/rollOfDice" },
            { title: "Puzzle", link: "/puzzle" },
            { title: "Attrape la souris", link: "/mouseShot" },
            { title: "Jeu de l'oie", link: "/GooseGameLayout" },
            { title: "Chasse au trésor", link: "/TreasureHunt" },
            { title: "Quêtes", link: "/Quest" },
          ],
      menuItems: [
        {
          title: "Dashboard",
          icon: "/images/icons/home.svg",
          link: "/dashboard",
        },
        {
          title: "Univers LGDC",
          icon: "/images/icons/Logo-thunderclan-textless.png",
          link: "/allCharacters",
          submenu: [
            { title: "Personnages", link: "/allCharacters" },
            { title: "Clans", link: "/AllClansLayout" },
            { title: "Lieux", link: "/AllLocationsLayout" },
            { title: "Arcs & Livres", link: "/ArcBookLayout" },
          ],
        },
        {
          title: "Fictions",
          icon: "/images/icons/cloud-solid.svg",
          link: "/AllExistingFictionsLayout",
          submenu: [
            { title: "Nouveau personnage original", link: "/CreateAnOriginalCharacter" },
            { title: "Mes personnages", link: "/OriginaleCharacterByUser" },
            { title: "Mes fictions", link: "/allFictions/" + this.usrId },
            { title: "Lire des fictions", link: "/AllExistingFictionsLayout" },
          ],
        },
        {
          title: "Jeux",
          icon: "/images/icons/gamepad-solid.svg",
          link: "/game",
          submenu: [
            { title: "Jeu de dé", link: "/rollOfDice" },
            { title: "Puzzle", link: "/puzzle" },
            { title: "Attrape la souris", link: "/mouseShot" },
            { title: "Jeu de l'oie", link: "/GooseGameLayout" },
            { title: "Chasse au trésor", link: "/TreasureHunt" },
            { title: "Quêtes", link: "/Quest" },
          ],
        },
        {
          title: "Événements",
          icon: "/images/icons/calendar-days-solid.svg",
          link: "/EventGlobal",
        },
      ],
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
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/Accueil");
    },
  },
};
</script>
