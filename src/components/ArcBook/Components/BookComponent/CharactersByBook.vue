<template>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <div
          class="col-2"
          v-for="(character, index) in characters"
          :key="index"
        >
          <img
            class="height-auto width-20-vh"
            :src="character.Character.Image"
            :alt="image"
          />
          <router-link
            :to="'/characterDetails/' + character.Character.Id"
            type="button"
            class="btn btn-primary"
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
  name: "CharacterByBook",
  props: ["characters"],
};
</script>