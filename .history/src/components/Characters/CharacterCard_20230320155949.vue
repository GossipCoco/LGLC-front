<template>
{{ allcharacters }}
      <div
        class="character-card card"
        style="max-width: 25rem"
        v-for="(character, index) in allcharacters"
        :key="index"
      >
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

          <p class="card-text">
            <router-link :to="'/characterDetails/' + character.Id">{{
              character.CurrentName
            }}</router-link>
          </p>
        </div>
      </div>
     <!--</div>
    <div style="display: flex; flex-direction: row">
      <div
        class="character-card card"
        style="max-width: 25rem; display: flex; flex-direction: column"
        v-for="(character, index) in characters.slice(5, 9)"
        :key="index"
      >
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

          <p class="card-text">
            <router-link :to="'/characterDetails/' + character.Id">{{
              character.CurrentName
            }}</router-link>
          </p>
        </div>
      </div>
    </div> -->
</template>
<script>
export default {
  name: "CharacterCard",
  props: ["characters_props"],
  data() {
    return {
      allcharacters: this.characters_props,
    };
  },
};
</script>