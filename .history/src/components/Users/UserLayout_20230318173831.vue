<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          {{ user }}
          <!-- <user-profil /> -->
        </div>
        <div class="col"> {{ user }}</div>
        <div class="col"> {{ user }}</div>
      </div>
    </div>
  </template>
  <script>
  // import UserProfil from "./UserProfil.vue";  
  import UserService from '../../services/UserService'
  export default {
    name: "UserProfil",
    inject:['user'],
    components: {
      // UserProfil,
    },
    data(){
      return{
        usrId: user,
        userInfo: null
      }
    },
    created(){

    },
    methods:{
      GetUserById(){
        
      }
    }

  };
  </script>