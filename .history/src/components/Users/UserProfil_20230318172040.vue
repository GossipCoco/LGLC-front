<template>
    <div class="profil-user-card card">
      <div class="card-body">
        <h5 class="card-title">
          </h5>
        <h6 class="card-subtitle mb-2 text-muted"></h6>
        <p class="card-text">
          {{userCurrent}}
        
        </p>
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