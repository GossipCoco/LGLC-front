<template>
  <div>
    <div class="burger-menu" @click="toggleMenu">
      <img src="../../../public/images/Logos/logo1.png"/>
    </div>
    <div :class="['menu-left', { 'menu-hidden': !isMenuOpen }, 'd-flex', 'flex-column', 'flex-shrink-0', 'p-3']">
      <div class="logo-container">
        <router-link to="/dashboard">
          <img src="../../../public/images/Logos/logo1.png" />
        </router-link>
      </div>
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="li-level1">
          <router-link to="/dashboard">
            <div class="menu-level1">
              <div class="menu-li-contain">
                <div class="icon-menu-container">
                  <img src="/images/icons/home.svg" />
                </div>
                <div class="chevron-container"></div>
              </div>
            </div>
          </router-link>
        </li>
        <li class="li-level1">
          <router-link to="/game" data-bs-toggle="collapse" href="#collapseExample0" role="button" aria-expanded="false"
            aria-controls="collapseExample0">
            <div class="menu-level1">
              <div class="menu-li-contain">
                <div class="icon-menu-container">
                  <img src="/images/icons/gamepad-solid.svg" />
                </div>
                <div class="chevron-container">
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
              </div>
            </div>
          </router-link>
          <div class="collapse" id="collapseExample0">
            <router-link class="link-collapse" to="/rollOfDice">Jeu de dé</router-link>
            <router-link class="link-collapse" to="/puzzle">Puzzle</router-link>
            <router-link class="link-collapse" to="/mouseShot">Jeu du chat et de la souris</router-link>
            <router-link class="link-collapse" to="/GooseGameLayout">Jeu de l'oie</router-link>
            <router-link class="link-collapse" to="/TreasureHunt">Chasse au trésor</router-link>
            <router-link class="link-collapse" to="/Quest">Quêtes</router-link>
          </div>
        </li>
        <li class="li-level1">
          <router-link to="/AllExistingFictionsLayout" data-bs-toggle="collapse" href="#collapseExample1" role="button"
            aria-expanded="false" aria-controls="collapseExample1">
            <div class="menu-level1">
              <div class="menu-li-contain">
                <div class="icon-menu-container">
                  <img src="/images/icons/book-solid.svg" />
                </div>
                <div class="chevron-container">
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
              </div>
            </div>
          </router-link>
          <div class="collapse" id="collapseExample1">
            <router-link class="link-collapse" to="/AllExistingFictionsLayout">
              Toutes les fictions
            </router-link>
            <router-link class="link-collapse" :to="'/allFictions/' + usrId">
              Mes fictions
            </router-link>
            <router-link class="link-collapse"  to="/createANewFiction">
              Créer une nouvelle fiction
            </router-link>
          </div>
        </li>
        <li class="li-level1">
          <router-link to="/allCharacters" data-bs-toggle="collapse" href="#collapseExample3" role="button"
            aria-expanded="false" aria-controls="collapseExample3">
            <div class="menu-level1">
              <div class="menu-li-contain">
                <div class="icon-menu-container">
                  <img src="/images/icons/cat-solid.svg" />
                </div>
                <div class="chevron-container">
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
              </div>
            </div>
          </router-link>
          <div class="collapse" id="collapseExample3">
            <router-link to="/allCharacters"  class="link-collapse" >Personnnages</router-link>
            <router-link to="/CharacterCreate" class="link-collapse">
              Nouveau personnage
            </router-link>
          </div>
        </li>
        <li class="li-level1">
          <router-link to="/AllClansLayout" data-bs-toggle="collapse" href="#clan" role="button" aria-expanded="false"
            aria-controls="clans">
            <div class="menu-level1">
              <div class="menu-li-contain">
                <div class="icon-menu-container">
                  <img src="/images/icons/clan.svg" />
                </div>
                <div class="chevron-container">
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
              </div>
            </div>
          </router-link>
          <div class="collapse" id="clan">
            <router-link class="link-collapse" to="/AllClansLayout">
              Clans
            </router-link><br>
            <router-link class="link-collapse" to="/AllLocationsLayout">
              Lieux
            </router-link>
          </div>
        </li>
        <li class="li-level1" v-if="role === 'admin'">
          <router-link to="/admin">
            <div class="menu-level1">
              <div class="icon-menu-container">
                <img src="/images/icons/profil.svg" />
              </div>
              <div class="chevron-container"></div>
            </div>
          </router-link>
          <div class="collapse" id="admin">

          </div>
        </li>
        <li class="li-level1">
          <router-link :to="'/user/' + usrId">
            <div class="menu-level1">
              <div class="icon-menu-container">
                <img src="/images/icons/user.svg" />
              </div>
              <div class="chevron-container">
                <i class="fa-solid fa-chevron-down" style="opacity: 0;"></i>
              </div>
            </div>
          </router-link>
          <div class="collapse" id="user">

          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import UserService from "../../services/UserService";
export default {
  name: "LeftMenu",
  data() {
    return {
      usrId: this.$store.state.auth.user.usrID,
      role: null,
      isMenuOpen: false
    }
  },
  created() {
    this.GetUserById(this.usrId);
  },
  methods: {
    GetUserById(e) {
      UserService.getUserById(e)
        .then((response) => {
          this.role = response.data.ob.RoleId
        })
        .catch((error) => {
          console.error(error);
        });
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style scoped>
.burger-menu {
  display: none;
  cursor: pointer;
}

.menu-hidden {
  display: none;
}

@media (max-width: 1400px) {
  .burger-menu {
    display: block;
    font-size: 1.5rem;
    padding: 1rem;
  }

  .menu-left {
    position: fixed;
    top: 0;
    left: 0;
    width: 150px;
    height: 100%;
    background-color: rgba(var(--dark-green-01), 1);
    transform: translateX(-250px);
    transition: transform 0.3s ease-in-out;
  }

  .menu-left.menu-hidden {
    transform: translateX(0);
  }
}
</style>
