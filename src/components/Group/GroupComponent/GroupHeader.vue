<template>
  <div class="row">
    <div class="col-12 col-md-12">      
        <div
          class="background-size-cover display-flex background-size-cover card-image flex-one border-card-color display-flex-row align-items-content-justify-content group-club-image height-50-vh width-185-vh"
          v-bind:style="{
            backgroundImage: 'url(' + group.Image + ')',
          }"
        >
        <div class="header-group-container">
          <slot>
            <div class="row">
              <div class="col-6 padding-20vh">
                <h1 class="text-white">{{ group.Name }}</h1>
              </div>              
              <div class="col-6">
                <img :src="group.Symbol" class="height-40-vh"/>
              </div>
            </div>            
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