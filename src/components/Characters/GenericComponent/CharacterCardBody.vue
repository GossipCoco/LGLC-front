<template>
    <div class="card-body height-7-vh maR-0-5vh align-items-content-justify-content
    name-characatrer-link">
      <router-link
        :to="route + name"
        type="button"
        class="btn btn-primary poppins-text background-color-active height-6-vh width-28-vh marginTR--6-2-5-vh"
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