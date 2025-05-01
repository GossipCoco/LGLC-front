<template>
  <div class="card-body align-items-content-justify-content">
    <p class="display-flex align-items-content-justify-content">
      <span class="name-characatrer-link flex-one align-items-content-justify-content">
        <router-link
          :to="route + name"
          type="button"
          class="btn btn-primary poppins-text padding-1rem-0-0-0 margin-0-0-0-1vh"
        >
          {{ name }}
        </router-link>
      </span>
    </p>
  </div>
</template>
<script>
export default {
  name: "CharacterCardBody",
  props: ["id", "name", "route"],
};
</script>