<template>
  <div class="card-body">
    <p class="align-items-content-justify-content">
      <span class="name-characatrer-link">
        <router-link
          :to="route + name"
          type="button"
          class="btn btn-outline-light poppins-text "
        >
          {{ name }}
        </router-link></span
      >
    </p>
  </div>
</template>
<script>
export default {
  name: "CharacterCardBody",
  props: ["id", "name", "route"],
};
</script>