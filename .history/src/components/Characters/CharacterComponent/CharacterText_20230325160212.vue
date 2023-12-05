<template>
  <div
    class="card-image"
    v-bind:style="{
      backgroundImage:
        'url(/images/Backgrounds/' + character.Warrior.Clan.Image + ')',
    }"
  >
    <img :src="'/images/Characters/' + character.Image" />
  </div>
  <div class="card-header">{{ character.CurrentName }}</div>
  <div class="card-body">
    <p class="card-text">Nom : {{ character.CurrentName }}</p>
    <p class="card-text">
      <router-link :to="'/characterDetails/' + character.Id">{{
        character.CurrentName
      }}</router-link>
    </p>
  </div>
</template>
<script>
export default {
  name: "CharacterText",
  props: ["character"],
};
</script>