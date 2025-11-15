<template>
  <div class="row">
    <div class="col-8">
      <h1 class="text-white">{{ group.Name }}</h1>
      <br />
      <h3 class="text-white">{{ group.Subtitle }}</h3>
    </div>
    <div class="col-4">
      <img :src="group.Symbol" class="height-40-vh" />
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderComponent",
  props: ["group"],
};
</script>