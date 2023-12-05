<template>
  <div class="character-card card" style="width: 25rem" v-for="(character, index) in characters" :key="index">
    <div
      class="card-image"
      v-bind:style="{
        backgroundImage:
          'url(/images/Backgrounds/' + character.Warrior.Clan.Image + ')',
      }"
    >
        <!-- <div
      class="card-image"

    > -->
      <img :src="'/images/Characters/' + character.Image" />
    </div>
    <div class="card-header">{{ character.CurrentName }}</div>
    <div class="card-body">
      <p class="card-text">Nom : {{ character.CurrentName }}</p>

      <p class="card-text">
        <router-link :to="'/character/' + character.Id">{{
          character.CurrentName
        }}</router-link>
      </p>
    </div>
  </div>
</template>
<script>
export default {
    name: 'CharacterCard',
    props: ["characters"],
    data(){
        return{
            characters: this.characters
        }
    }
}
</script>