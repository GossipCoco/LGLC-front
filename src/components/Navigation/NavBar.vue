<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Home</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-6 mb-md-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
  
        </ul>
        <ul class="navbar-nav me-auto mb-6 mb-lg-0">
          <li class="nav-item dropdown">
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
  export default {
    namer: "NavBar",
    data(){
      return {
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