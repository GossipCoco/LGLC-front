<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          {{ usrId }}
          <!-- <user-profil /> -->
        </div>
        <div class="col"> {{ usrId }}</div>
        <div class="col"> {{ usrId }}</div>
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
        usrId: this.user,
        userInfo: null
      }
    },
    created(){
      console.log(this.usrId)
      this.GetUserById(this.usrId)
    },
    methods:{
      GetUserById(userId){
        UserService.getUserById(userId)
        .then(response => {
          this.userInfo = response.data.ob
        })
        .catch(error => {
          console.error(error)
        })
      }
    }

  };
  </script>