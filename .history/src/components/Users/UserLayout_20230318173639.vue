<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          {{ user }}
          <!-- <user-profil /> -->
        </div>
        <div class="col">Column</div>
        <div class="col">Column</div>
      </div>
    </div>
  </template>
  <script>
  // import UserProfil from "./UserProfil.vue";
  export default {
    name: "UserProfil",
    inject:['user'],
    components: {
      // UserProfil,
    },
  };
  </script>