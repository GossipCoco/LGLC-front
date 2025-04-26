<template>
  <div class="character-list-wrapper display-flex-column">
     <BackgroundImage v-bind:Image="character.Clan.Image">
      <img v-if="character.Image" :src="character.Image" class="width-25-vh-height-25-vh" />
    </BackgroundImage>
    <CharacterCardBody v-bind:id="character.Id" v-bind:name="character.CurrentName" v-bind:route="'/characterDetails/'"/>
  </div>
</template>
<script>
import BackgroundImage from './BackgroundImage.vue';
import CharacterCardBody from './CharacterCardBody.vue';
export default {
  name: "CharacterText",
  props: ["character"],
  components: {BackgroundImage, CharacterCardBody}
};
</script>