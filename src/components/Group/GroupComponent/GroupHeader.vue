<template>
  <div class="row">
    <div class="col-12 col-md-12">      
        <div
          class="background-size-cover display-flex background-size-cover card-image flex-one border-card-color margin-1vh display-flex-row align-items-content-justify-content group-club-image height-20-vh width-185-vh"
          v-bind:style="{
            backgroundImage: 'url(' + group.Image + ')',
          }"
        >
        <div class="header-group-container">
          <slot
            ><h1 class="text-white">{{ group.Name }}</h1></slot
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GroupHeader",
  props: ["group"],
};
</script>