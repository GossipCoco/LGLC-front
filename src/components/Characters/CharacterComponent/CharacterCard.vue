<template> 
  <div id="all-characters-container-card" class="row all-characters-container-card width-150-vh">
    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 display-flex-row
                align-items-content-justify-content character-container overflowY-X-hidden">
      <div
        v-for="(character, index) in characters_props"
        :key="index"
        class="character-card card overflowY-X-hidden border-none text-white
        background-lineart background-size-cover flex-one opensans-text character-card-border"
      >
        <character-text v-bind:character="character" />
      </div>
    </div>
  </div>
</template>
<script>
import CharacterText from "./CharacterText.vue";
export default {
  name: "CharacterCard",
  props: ["characters_props"],
  inject: ["allCharacters"],
  components: { CharacterText },  
};
</script>