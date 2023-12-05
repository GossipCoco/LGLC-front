<template>
  <div class="menu-left d-flex flex-column flex-shrink-0 p-3">
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="li-level1">
        <router-link to="/dashboard">
          <div class="menu-level1">
            <div class="icon-menu-container"> <i class="fas fa-home"></i></div>
            <div class="link-menu-container">
              <span>Dashboard</span>
            </div>
          </div>
        </router-link>
      </li>
      <li class="li-level1">
        <router-link to="/game">
          <div class="menu-level1">
            <div class="icon-menu-container">
              <img src="/images/icons/gamepad-solid.svg" />
            </div>
            <div class="link-menu-container">
              <span>Jeu</span>
            </div>
        </div>
        </router-link>
      </li>
      <li class="li-level1">
        <router-link to="/allCharacters">
          <div class="menu-level1">
            <div class="icon-menu-container">
              <img src="/images/icons/cat-solid.svg" />
            </div>
            <div class="link-menu-container">
              <span>Personnages</span>
            </div>
          </div>
        </router-link>
      </li>
      <li class="li-level1">
        <router-link to="/AllClansLayout">
          <div class="menu-level1">
            <div class="icon-menu-container">
              <img src="/images/icons/cat-solid.svg" />
            </div>
            <div class="link-menu-container">
              <span>Clans</span>
            </div>
          </div>
        </router-link>
      </li>
      <li class="li-level1">
        <router-link to="/admin">
          <div class="menu-level1">
            <div class="menu-level1">
              <div class="icon-menu-container">
                <i class="fas fa-house-user"></i>
              </div>
              <div class="link-menu-container">
                <span>Admin</span>
              </div>
            </div>
          </div>
        </router-link>
      </li>
      <li class="li-level1">
        <router-link to="/user">
          <div class="menu-level1">
            <div class="menu-level1">
              <div class="icon-menu-container">
                <i class="fas fa-users"></i>
              </div>
              <div class="link-menu-container">
                <span>Profil</span>
              </div>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "LeftMenu",
};
</script>