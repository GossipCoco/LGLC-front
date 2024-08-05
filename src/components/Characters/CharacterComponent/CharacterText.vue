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
    <div class="card-body">
      <p style="text-align: center;">
      <span class="name-characatrer-link">
        <router-link :to="'/characterDetails/' + character.Id" type="button" class="btn btn-outline-light">
         {{ character.CurrentName }}
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