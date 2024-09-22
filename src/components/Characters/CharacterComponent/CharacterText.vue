<template>
  <div class="character-list-wrapper display-flex-column">
    <div
      class="background-size-cover card-image"
      v-bind:style="{
        backgroundImage:
          'url(' + character.Clan.Image + ')',
      }"
    >
      <img v-if="character.Image" :src="character.Image" />
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
  created(){
    // console.log(this.character)
    // console.log(this.character.Image)
  }
};
</script>