<template>
  <div class="burger-menu" @click="toggleMenu">
    <img :src="logo" />
  </div>
  <div
    :class="[ 
      'menu-left', 
      { 'menu-hidden': !isMenuOpen }, 
      'd-flex', 
      'flex-column', 
      'flex-shrink-0', 
      'p-3' 
    ]"
  >
    <Logo v-bind:img="logo" />    
    <ul class="nav nav-pills flex-column mb-auto display-flex align-items-content-justify-content">
      <li class="li-level1 display-flex-column align-items-content-justify-content">
        <router-link to="/dashboard">
          <div class="menu-level1">
            <div class="menu-li-contain">
              <div class="icon-menu-container display-flex align-items-content-justify-content">
                <img src="/images/icons/home.svg" />
              </div>
              <div class="chevron-container"></div>
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
              <div class="icon-menu-container display-flex align-items-content-justify-content">
                <img
                  src="/images/icons/Logo-thunderclan-textless.png"
                  style="width: 1.25rem"
                />
              </div>
              <div class="chevron-container">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="collapse display-flex-column align-items-content-justify-content " id="collapseExample3">
          <p>Univers LGDC</p>
          <router-link to="/allCharacters" class="link-collapse display-flex-column align-items-content-justify-content ">
            Personnnages
            </router-link>
          <router-link class="link-collapse display-flex-column align-items-content-justify-content " to="/AllClansLayout">
            Clans
          </router-link>
          <router-link class="link-collapse display-flex-column align-items-content-justify-content " to="/AllLocationsLayout">
            Lieux
          </router-link>
          <router-link class="link-collapse display-flex-column align-items-content-justify-content " to="/ArcBookLayout">
            Arcs & Livres
          </router-link>
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
              <div class="icon-menu-container display-flex align-items-content-justify-content">
                <img src="/images/icons/cloud-solid.svg" />
              </div>
              <div class="chevron-container">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="collapse display-flex-column align-items-content-justify-content " id="collapseExample1">
          <router-link class="link-collapse display-flex-column align-items-content-justify-content " to="/CreateAnOriginalCharacter" >
            Nouvel OC</router-link>
          <router-link class="link-collapse display-flex-column align-items-content-justify-content " to="/OriginaleCharacterByUser" >
            Mes personnages</router-link>
          <router-link class="link-collapse display-flex-column align-items-content-justify-content " :to="'/allFictions/' + usrId">
            Mes fictions
          </router-link>
          <router-link class="link-collapse display-flex-column align-items-content-justify-content " to="/AllExistingFictionsLayout">
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
              <div class="icon-menu-container display-flex align-items-content-justify-content">
                <img src="/images/icons/pen-nib-solid.svg" />
              </div>
              <div class="chevron-container">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="collapse display-flex-column align-items-content-justify-content " id="creation">
          <router-link class="link-collapse display-flex-column align-items-content-justify-content " to="/createANewFiction">
            Nouvelle fiction
          </router-link>
          <router-link v-if="role === 'Administrateur'" to="/CharacterCreate" class="link-collapse display-flex-column align-items-content-justify-content ">
            Nouveau personnage
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
              <div class="icon-menu-container display-flex align-items-content-justify-content">
                <img src="/images/icons/gamepad-solid.svg" />
              </div>
              <div class="chevron-container">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="collapse display-flex-column align-items-content-justify-content " id="collapseExample0">
          <router-link class="link-collapse display-flex-column align-items-content-justify-content " to="/rollOfDice"
            >Jeu de dé</router-link
          >
          <router-link class="link-collapse display-flex-column align-items-content-justify-content " to="/puzzle">Puzzle</router-link>
          <router-link class="link-collapse display-flex-column align-items-content-justify-content " to="/mouseShot"
            >Attrape la souris !</router-link
          >
          <router-link class="link-collapse display-flex-column align-items-content-justify-content " to="/GooseGameLayout"
            >Jeu de l'oie</router-link
          >
          <router-link class="link-collapse display-flex-column align-items-content-justify-content " to="/TreasureHunt"
            >Chasse au trésor</router-link
          >
          <router-link class="link-collapse display-flex-column align-items-content-justify-content " to="/Quest">Quêtes</router-link>
        </div>
      </li>
      <li class="li-level1 display-flex-column align-items-content-justify-content">
        <router-link to="/EventGlobal">
          <div class="menu-level1">
            <div class="menu-li-contain">
              <div class="icon-menu-container display-flex align-items-content-justify-content">
                <img src="/images/icons/calendar-days-solid.svg" />
              </div>
              <div class="chevron-container"></div>
            </div>
          </div>
        </router-link>
      </li>      
      <li class="li-level1" v-if="role === 'Administrateur'">
        <router-link to="/admin">
          <div class="menu-level1">
            <div class="icon-menu-container display-flex align-items-content-justify-content">
              <img src="/images/icons/profil.svg" />
            </div>
            <div class="chevron-container"></div>
          </div>
        </router-link>
      </li>
      <li class="li-level1 display-flex-column align-items-content-justify-content">
        <router-link :to="'/user/' + usrId">
          <div class="menu-level1">
            <div class="icon-menu-container display-flex align-items-content-justify-content">
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
          <div class="icon-menu-container display-flex align-items-content-justify-content">
            <a href="#" @click.prevent="logout" class="logout-li-container">
              <img
                src="../../../public//images//icons/right-from-bracket-solid-colored.svg"
                width="25px"
              />
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
      logo: "/images/Logos/Automne_Logo1.png",
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
