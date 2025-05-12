<template>
    <div class="card-body margin--1vh-0-0-0 align-items-content-justify-content name-characatrer-link">
      <router-link
        :to="route + name"
        type="button"
        class="btn btn-primary poppins-text background-color-active height-7-vh width-28-vh"
      >
          {{ name }}
        </router-link>
      </div>
  </template>
  <script>
  export default {
    name: "CharacterCardBody",
    props: ["id", "name", "route"],
  };
  </script>