<template>
    <header data-bs-theme="dark">
      <nav class="navbar align-items-content-justify-content navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container-fluid height-100 header-container overflowY-X-hidden overflow-hidden">
          <div class="logo-accueil-container">
          <router-link to="/Accueil" class="navbar-brand">
            <img src="../../../../public/images/Logos/lGdC-logo.png" />
          </router-link>
          </div>          
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item" v-if="!isLoggedIn">
                <router-link class="roboto text-white" to="/login">Se connecter</router-link>
              </li>
              <li class="nav-item roboto text-white"  v-if="!isLoggedIn">
                <router-link to="/Register" class="nav-item roboto text-white">Créer son compte</router-link>
              </li>
              <li class="nav-item roboto text-white"  v-if="isLoggedIn">
                <router-link to="/dashboard" class="nav-item roboto text-white">Aller sur son Dashboard</router-link>
              </li>
              <li class="nav-item logout-li-container roboto text-white" v-if="isLoggedIn">
                <a href="#" @click.prevent="logout" class="logout-li-container roboto text-white">
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
  