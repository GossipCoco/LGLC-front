<template>
  <div class="character-list-wrapper">
  <div
    class="card-image"
    v-bind:style="{
      backgroundImage:
        'url(/images/Backgrounds/' + character.Warrior.Clan.Image + ')',
    }"
  >
    <img :src="'/images/Characters/' + character.Image" />
  </div>
  <div type="button" class="card-header">
    {{ character.CurrentName }}
    <p class="card-text">
      <router-link :to="'/characterDetails/' + character.Id">
        En savoir plus
      </router-link>
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