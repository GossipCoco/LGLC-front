<template>
    <div class="card width-180-vh height-90-vh background-color-dark-green-01 interactive-map-forest-container">
    <div class="clan-map-container">
    <img
      src="/images/Game/The_forest_territories_map.png"
      usemap="#clan-map"
      alt="Carte des Clans"
      class="map-image"
    />

    <map name="clan-map">
        <area target="_parent" alt="Clan du Tonnerre" title="Clan du Tonnerre" href="/clan/clandutonnerre" coords="1351,864,158" shape="circle">
    </map>
  </div>
    </div>
</template>
<script>
export default {
    name: 'MapForest',
    methods: {
    getLink(clanId) {
      return `/clan/${clanId}`;
    },
}
}
</script>
<style scoped>
.map-image {
  width: 1000px;
  height: auto;
  display: block;
  margin: 0 auto;
}
area {
  cursor: pointer;
  outline: none;
}
</style>