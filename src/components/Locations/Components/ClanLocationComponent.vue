<template>
  <div
    class="card background-color-dark-green-01 border-radius-100-100-8-8 location-clan-background-width-container"
  >
    <div
      class="card-image clan-card background-position-50-percent width-30-vh height-30-vh background-size-cover"
      v-bind:style="{
        backgroundImage: 'url(' + location.Image + ')',
      }"
    ></div>
    <div
      class="card-header display-flex-row align-items-content-justify-content"
    >
      <div class="display-flex align-items-content-justify-content">
        <div class="d-grid gap-2 col-8 mx-auto">
          <router-link
            type="button"
            class="btn btn-primary margin-15vh width-30-vh"
            :to="'/LocationsDetails/' + location.Id"
            >{{ location.Name }}</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ClanLocationComponent",
  props: ["location"],
};
</script>