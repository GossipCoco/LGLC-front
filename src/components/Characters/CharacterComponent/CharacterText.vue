<template>
  <div class="character-list-wrapper display-flex-column">
     <BackgroundImage v-bind:Image="character.Clan.Image">
      <img v-if="character.Image" :src="character.Image" class="height-auto width-20-vh"/>
    </BackgroundImage>    
  </div>
  <CharacterCardBody v-bind:id="character.Id" v-bind:name="character.CurrentName" v-bind:route="'/characterDetails/'"/>
</template>
<script>
import BackgroundImage from '../GenericComponent/BackgroundImage.vue';
import CharacterCardBody from '../GenericComponent/CharacterCardBody.vue';
export default {
  name: "CharacterText",
  props: ["character"],
  components: {BackgroundImage, CharacterCardBody}
};
</script>