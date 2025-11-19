<template>
  <div class="row">
    <div class="col-8">
      <div class="row">
        <div class="col-12">
          <h1 class="text-white">{{ group.Name }}</h1>
          <br />
          <h3 class="text-white text-align-justify">{{ group.Subtitle }}</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
            <group-btn v-bind:group="group" />
        </div>
      </div>
    </div>
    <div class="col-4">
      <img :src="group.Symbol" class="height-40-vh" />
    </div>
  </div>
</template>
<script>
import GroupBtn from './GroupBtn.vue';
export default {
  name: "HeaderComponent",
  props: ["group"],
  components: {
    GroupBtn,
  },
};
</script>