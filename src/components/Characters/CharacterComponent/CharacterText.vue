<template>
  <div class="character-list-wrapper display-flex-column">
     <BackgroundImage v-bind:Image="character.Clan.Image">
      <img v-if="character.Image" :src="character.Image" />
    </BackgroundImage>
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
import BackgroundImage from './BackgroundImage.vue';
export default {
  name: "CharacterText",
  props: ["character"],
  components: {BackgroundImage}
};
</script>