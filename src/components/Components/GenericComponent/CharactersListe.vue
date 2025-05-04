<template>
  <div class="display-flex-row flex-one align-items-content-justify-content all-characters-list-containers">
    <div class="row">
      <div class="col-2" v-for="(character, index) in characters" :key="index">
        <div v-if="character.Character">
        <img
          class="height-auto width-20-vh"
          :src="character.Character.Image"
          :alt="image"
          loading="lazy"
        />
        <router-link
          :to="'/characterDetails/' + character.Character.CurrentName"
          type="button"
          class="btn btn-primary btn-character-in-clan-detail"
        >
          {{ character.Character.CurrentName }}
        </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  name: "CharactersList",
  props: ["characters"],
  data(){
    return {
      allCharacters: this.characters
    }
  }
};
</script>