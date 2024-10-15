<template>
    <div class="row">
      <div class="col-2" v-for="(character, index) in characters" :key="index">
          <img
          class="height-auto width-100-percent"
          :src="character.Character.Image"
          :alt="image"
          />
          <router-link
          :to="'/characterDetails/' + character.Character.CurrentName"
          type="button"
          class="btn btn-primary"
          >
          {{ character.Character.CurrentName }}
          </router-link>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: "CharactersList",
    props: ["characters"],
  };
  </script>