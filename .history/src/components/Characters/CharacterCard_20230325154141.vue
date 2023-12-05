<template>
  <div class="character-container">
      <div v-for="(character, index) in characters_props" :key="index">
        <div v-if="key < 4">
          <div class="character-card card" style="max-width: 25rem" :key="index">
            <character-text v-bind:character="character" />
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import CharacterText from './CharacterComponent/CharacterText.vue';
export default {
  name: "CharacterCard",
  props: ["characters_props"],
  
  inject: ['allCharacters'],
  components:{CharacterText},
  data() {
    return {
      allcharacters: allCharacters,
    };
  },
  created(){
    this.allcharacters = this.characters_props
  }
};
</script>