<template>
  <div class="row">
    <div class="col-12 col-md-12">      
        <div
          class="background-size-cover display-flex background-size-cover card-image
          flex-one border-card-color display-flex-row align-items-content-justify-content
          group-club-image width-100-100"
          v-bind:style="{
            backgroundImage: 'url(' + group.Image + ')',
          }"
        >
        <div class="header-group-container">
          <slot>

          </slot>
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