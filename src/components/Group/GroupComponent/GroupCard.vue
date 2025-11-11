<template>
  <div
    class="card background-color-dark-green-01 width-30-vh  height-35-vh border-radius-top-100"
  >
    <div class="height-30-vh width-30-vh background-size-cover background-position-50-percent border-radius-top-100"
      v-bind:style="{ backgroundImage: 'url(' + group.Image + ')' }"
    >
      <slot></slot>
    </div>
    <div class="card-body">
      <router-link :to="'/OneGroupLayout/' + group.Id" class="text-white">
        {{ group.Name }} - {{ group.Type }}
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["group"],
  name: "GroupCard",
};
</script>