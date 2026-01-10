<template>
  <div class="left-menu-content" :class="{ 'menu-expanded': isExpanded }">
  <div
    class="menu-left background-lineart-other03 d-flex display-flex-row
    flex-shrink-0 height-25-vh width-100-100 margin--0-0--2 scrollbar-color"
  >
    <Logo v-bind:img="logo" />
    <ul class="nav nav-pills display-flex-row mb-auto display-flex align-items-content-justify-content width-100-100">
      <li class="li-level1 display-flex-column align-items-content-justify-content">
        <router-link to="/dashboard">
          <div class="menu-level1">
            <div class="menu-li-contain">
              <div class="icon-menu-container  border-radius-100 background-color-clear-green-02  display-flex align-items-content-justify-content">
                <img src="/images/icons/home.svg" />                
              </div>
              <span class="menu-text poppins-text font-size-1em font-weight-600">Accueil</span>
            </div>
          </div>
        </router-link>
      </li>
      <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> -->
      <li class="li-level1 display-flex-column align-items-content-justify-content">
        <div
          data-bs-toggle="collapse"
          href="#univers-LGDC"
          role="button"
          aria-expanded="false"
          aria-controls="univers-LGDC"
        >
          <div class="menu-level1">
            <div class="menu-li-contain">
              <div class="icon-menu-container  border-radius-100  background-color-clear-green-02  display-flex align-items-content-justify-content">
                <img
                  src="/images/icons/Logo-thunderclan-textless.png"
                  style="width: 1.5rem"
                />
              </div>
              <span class="menu-text poppins-text font-size-1em font-weight-600">LGDC</span>
            </div>
          </div>

        </div>
        <div class="collapse display-flex-column align-items-content-justify-content " id="univers-LGDC">          
          <div v-for="(menu, index) in SecondeSubMenu" :key="index">
            <router-link :to="menu.link" class="link-collapse width-15-vh   color-clear-green-02 font-size-0-65 display-flex-column align-items-content-justify-content ">
            {{ menu.title }}
            </router-link>  
          </div>
        </div>
      </li>
      <li class="li-level1 display-flex-column align-items-content-justify-content">
        <div
          data-bs-toggle="collapse"
          href="#creation-LGDC"
          role="button"
          aria-expanded="false"
          aria-controls="creation-LGDC"
        >
          <div class="menu-level1">
            <div class="menu-li-contain">
              <div class="icon-menu-container  border-radius-100  background-color-clear-green-02  display-flex align-items-content-justify-content">
                <img src="/images/icons/cloud-solid.svg" />
              </div>
              <span class="menu-text poppins-text font-size-1em font-weight-600">Créations</span>
            </div>
          </div>
        </div>
        <div class="collapse display-flex-column align-items-content-justify-content " id="creation-LGDC">
          <router-link class="link-collapse width-15-vh  color-clear-green-02 font-size-0-65 display-flex-column align-items-content-justify-content " to="/OriginaleCharacterByUser" >
            Mes personnages</router-link>
          <router-link class="link-collapse width-15-vh  color-clear-green-02 font-size-0-65 display-flex-column align-items-content-justify-content " :to="'/allFictions/' + usrId">
            Mes fictions
          </router-link>
          <router-link class="link-collapse width-15-vh  color-clear-green-02 font-size-0-65 display-flex-column align-items-content-justify-content " to="/AllExistingFictionsLayout">
            Lire des fictions
          </router-link>
        </div>
      </li>
      <li class="li-level1 display-flex-column align-items-content-justify-content">
        <div
          data-bs-toggle="collapse"
          href="#creation-fiction-oc"
          role="button"
          aria-expanded="false"
          aria-controls="creation-fiction-oc"
        >
          <div class="menu-level1">
            <div class="menu-li-contain">
              <div class="icon-menu-container  border-radius-100  background-color-clear-green-02  display-flex align-items-content-justify-content">
                <img src="/images/icons/pen-nib-solid.svg" />
              </div>
              <span class="menu-text poppins-text font-size-1em font-weight-600">Imaginer</span>
            </div>
          </div>
        </div>
        <div class="collapse display-flex-column align-items-content-justify-content " id="creation-fiction-oc">
          <router-link class="link-collapse width-15-vh  color-clear-green-02 font-size-0-65 display-flex-column align-items-content-justify-content " to="/createANewFiction">
            Nouvelle fiction
          </router-link>
          <router-link to="/CreateAnOriginalCharacter" class="link-collapse width-15-vh  color-clear-green-02 font-size-0-65 display-flex-column align-items-content-justify-content ">
            Nouvel OC
          </router-link> 
        </div>
      </li>
      <li class="li-level1 display-flex-column align-items-content-justify-content">
        <router-link to="/GroupLayout">
          <div class="menu-level1">
            <div class="menu-li-contain">
              <div class="icon-menu-container  border-radius-100 background-color-clear-green-02  display-flex align-items-content-justify-content">
                <img src="/images/icons/people-group-solid.svg" />                
              </div>
              <span class="menu-text poppins-text font-size-1em font-weight-600">Clubs</span>
            </div>
          </div>
        </router-link>
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
              <span class="menu-text poppins-text font-size-1em font-weight-600">Jouer</span>
            </div>
          </div>
        </div>
        <div class="collapse display-flex-column align-items-content-justify-content " id="collapseExample0">
          <div v-for="(menu, index) in GameMenu" :key="index">
            <router-link :to="menu.link" class="link-collapse width-15-vh  color-clear-green-02 font-size-0-65 display-flex-column align-items-content-justify-content ">
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
              <span class="menu-text poppins-text font-size-1em font-weight-600">Event</span>
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
            <span class="menu-text poppins-text font-size-1em font-weight-600">Admin</span>
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
          <span class="menu-text poppins-text font-size-1em font-weight-600">Logout</span>
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
      SecondeSubMenu:
            [{ title: "Personnages", link: "/allCharacters" },
            // {title: 'Map', link: '/MapForest'},
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
