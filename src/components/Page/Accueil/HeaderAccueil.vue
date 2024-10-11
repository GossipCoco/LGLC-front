<template>
    <header data-bs-theme="dark">
      <nav class="navbar align-items-content-justify-content navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container-fluid height-100 header-container">
          <div class="logo-accueil-container">
          <router-link to="/Accueil" class="navbar-brand">
            <img src="../../../../public/images/Logos/Automne_Logo1.png" />
          </router-link>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item" v-if="!isLoggedIn">
                <router-link to="/login">Se connecter</router-link>
              </li>
              <li class="nav-item" v-if="!isLoggedIn">
                <router-link to="/Register">Créer son compte</router-link>
              </li>
              <li class="nav-item" v-if="isLoggedIn">
                <router-link to="/dashboard">Aller sur son Dashboard</router-link>
              </li>
              <li class="nav-item logout-li-container" v-if="isLoggedIn">
                <a href="#" @click.prevent="logout" class="logout-li-container">
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
  