<template>
    <div class="profil-user-card card">
      <div class="card-body">
        <h5 class="card-title">
          userCurrent</h5>
        <h6 class="card-subtitle mb-2 text-muted"></h6>
        <!-- <p class="card-text" v-for="(user, index) in users" :key="index">
          {{user}}
        
        </p> -->
      </div>
    </div>
  </template>
  <script>
  import UserService from '../../services/UserService'
  // import UserLocalData from "../../services/UserLocalData"
  export default {
    name: "ProfilUser",
    inject:['user'],
    data() {
      return {
        userCurrent: this.user,
        users: {}
      };
    },
    created() {
      console.log(this.userCurrent)
      // this.getAllUsers();
    },
    methods: {
      getAllUsers() {
        UserService.getAllUsers()
          .then((response) => {
            this.users = response.data.ob
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  };
  </script>