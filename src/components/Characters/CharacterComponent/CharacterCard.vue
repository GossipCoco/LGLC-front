<template>
  <div class="col-12  mb-3 mb-sm-0 display-flex-row character-container">
    <div
      v-for="(character, index) in characters_props"
      :key="index"
      class="character-card card flex-one"
    >
      <character-text v-bind:character="character" />
    </div>
  </div>
</template>
<script>
import CharacterText from "./CharacterText";
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