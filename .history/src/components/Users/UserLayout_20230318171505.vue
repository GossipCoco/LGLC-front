<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <user-profil />
        </div>
        <div class="col">Column</div>
        <div class="col">Column</div>
      </div>
    </div>
  </template>
  <script>
  import UserProfil from "./UserProfil.vue";
  export default {
    name: "CharacterLayout",
    components: {
      UserProfil,
    },
  };
  </script>