<template>
  <div
    class="card background-color-dark-green-01 width-40-vh border-radius-top-100"
  >
    <div class="height-30-vh width-40-vh background-size-cover background-position-50-percent border-radius-top-100"
      v-bind:style="{ backgroundImage: 'url(' + group.Image + ')' }"
    >
      <slot></slot>
    </div>
    <div class="card-body">
      <router-link :to="'/OneGroupLayout/' + group.Id" class="text-white">
        {{ group.Name }}
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