<template>
    <div class="card-body height-7-vh padding-0-0-0-3vh align-items-content-justify-content
    name-characatrer-link">
      <router-link
        :to="route + name"
        type="button"
        class="btn btn-primary poppins-text background-color-active height-5-vh width-30-vh marginTR--6-2-5-vh"
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