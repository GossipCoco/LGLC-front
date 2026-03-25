<template>
    <header class="background-lineart-menu">
      <nav class="navbar align-items-content-justify-content navbar-expand-md fixed-top">
        <div class="container-fluid header-container overflowY-X-hidden overflow-hidden">
          <div class="logo-accueil-container flex-one">
          <router-link to="/Accueil" class="navbar-brand">
            <img src="../../../../public/images/Logos/lgdlc-logo-v5.png" class="width-50-vh" />
          </router-link>
          </div>          
          <div class="collapse navbar-collapse height-15-vh width-90-vh" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item width-40-vh" v-if="!isLoggedIn">
                <router-link class="poppins-text text-white" to="/login">Se connecter</router-link>
              </li>
              <li class="nav-item poppins-text text-white width-40-vh"  v-if="!isLoggedIn">
                <router-link to="/Register" class="nav-item poppins-text text-white">Créer son compte</router-link>
              </li>
              <li class="nav-item poppins-text text-white width-40-vh"  v-if="isLoggedIn">
                <router-link to="/dashboard" class="nav-item poppins-text text-white">Aller sur son Dashboard</router-link>
              </li>
              <li class="nav-item logout-li-container display-flex-row poppins-text text-white width-40-vh" v-if="isLoggedIn">
                <a href="#" @click.prevent="logout" class="logout-li-container poppins-text text-white">
                    Logout <img src="../../../../public/images/icons/right-from-bracket-solid.svg" width="25px"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "HeaderAccueil",
    computed: {
      isLoggedIn() {
        return this.$store.state.auth.user !== null;
      },
    },
    methods: {
      logout() {
        this.$store.dispatch("auth/logout");
        this.$router.push("/login");
      },
    },
  };
  </script>
  