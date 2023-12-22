<template>
  <div class="character-container">
    <div
      v-for="(character, index) in characters_props"
      :key="index"
      class="character-card card"
    >
    {{ character }}
      <character-text v-bind:character="character" />
    </div>
  </div>
</template>
<script>
import CharacterText from "./CharacterComponent/CharacterText.vue";
export default {
  name: "CharacterCard",
  props: ["characters_props"],

  inject: ["allCharacters"],
  components: { CharacterText },
  data() {
    return {
      allcharacters: null,
    };
  },
  created() {
    this.allcharacters = this.characters_props;
  },
};
</script>