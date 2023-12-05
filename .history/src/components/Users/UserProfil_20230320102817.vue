<template>
    <div class="profil-user-card card">
      
    </div>
  </template>
  <script>
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
      console.log(this.user)
     
    },
    methods: {
      
    }
  };
  </script>