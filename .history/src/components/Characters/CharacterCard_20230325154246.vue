<template>
  <div class="character-container">
    <div v-for="(character, index) in characters_props" :key="index">
      <div v-if="key < 4">
        <div class="character-card card" style="max-width: 25rem" :key="index">
          <div
            class="card-image"
            v-bind:style="{
              backgroundImage:
                'url(/images/Backgrounds/' + character.Warrior.Clan.Image + ')',
            }"
          >
            <img :src="'/images/Characters/' + character.Image" />
          </div>
          <div class="card-header">{{ character.CurrentName }}</div>
          <div class="card-body">
            <p class="card-text">Nom : {{ character.CurrentName }}</p>
            <!-- {{ character }} -->
            <p class="card-text">
              <router-link :to="'/characterDetails/' + character.Id">{{
                character.CurrentName
              }}</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import CharacterText from "./CharacterComponent/CharacterText.vue";
export default {
  name: "CharacterCard",
  props: ["characters_props"],

  inject: ["allCharacters"],
  // components: { CharacterText },
  data() {
    return {
      allcharacters: allCharacters,
    };
  },
  created() {
    this.allcharacters = this.characters_props;
  },
};
</script>