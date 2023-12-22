<template>
  <div class="character-list-wrapper">
    <div class="card-header">
      <p class="card-text name-characatrer-text-card">
        <span class="name-characatrer-text">{{ character.CurrentName }}</span>
      </p>
    </div>
    <div
      class="card-image"
      v-bind:style="{
        backgroundImage:
          'url(/images/Backgrounds/' + character.Warrior.Clan.Image + ')',
      }"
    >
      <img :src="'/images/Characters/' + character.Image" />
    </div>
    <div class="card-header">
      <p class="card-text name-characatrer-text-card">
        <span class="name-characatrer-text">{{ character.CurrentName }}</span>
      </p>
      <p style="text-align: center;">
      <span class="name-characatrer-link">
        <router-link :to="'/characterDetails/' + character.Id" type="button" class="btn btn-outline-light">
          En savoir plus
        </router-link></span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "CharacterText",
  props: ["character"],
};
</script>