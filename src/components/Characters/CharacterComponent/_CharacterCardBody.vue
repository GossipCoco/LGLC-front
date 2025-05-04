<template>
  <div class="card-body align-items-content-justify-content name-characatrer-link">
    <router-link
      :to="route + name"
      type="button"
      class="btn btn-primary poppins-text background-color-active"
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