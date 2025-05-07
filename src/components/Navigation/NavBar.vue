<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top background-color-dark-green-01">
    <div class="container-fluid height-10-vh">
      <Logo v-bind:img="logo" /> 
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse display-flex-row flex-one overflow-hidden" id="navbarCollapse">
        <ul class="navbar-nav">
          <li class="nav-item width-15-vh">
            <router-link class="nav-link active" aria-current="page" to="/dashboard">Dashboard</router-link>
          </li>
          <li class="nav-item width-15-vh padding-1-vh-0-0-0">
            <router-link class="text-white" :to="'/getUserBy/' + usrId">Profil</router-link>  
          </li>
          <li class="nav-item width-15-vh">
            <div class="avatar-navabar">
              <img v-if="avatar" :src="'/images/Avatars/' + avatar" class="card-img-top" alt="avatar">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </template>
  <script>
  import UserService from "../../services/UserService";
  
  import Logo from "./Components/Logo.vue";
  export default {
    namer: "NavBar",
    components: { Logo },
    data(){
      return {
        logo: "/images/Logos/LaGuerredesClansLogos2.png",
        usrId: this.$store.state.auth.user.usrID,
        avatar: null,
        user: null
      }
    },
    created(){
      this.GetUserById(this.usrId);
    },
    methods: {
      GetUserById(e) {
        UserService.getUserById(e)
          .then((response) => {
            this.avatar = response.data.ob.Avatar
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