<template>
  <div class="col-6">
    <label :for="For" class="form-label">
      {{ label }}
    </label>
    <select
      :id="For"
      class="form-select"
      aria-label="Default select example"
      v-model="CharacterId"
      @change="getCharacter"
    >
      <option selected disabled>{{ label }}</option>
      <option
        v-for="(character, index) in characters"
        :value="character.Id"
        :key="index"
      >
        {{ character.CurrentName }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: "SelectCharacterComponent",
  props: ["For", "label", "characterId", "characters"],
  data() {
    return {
      form: null,
      CharacterId: null,
    };
  },
  methods: {
    getCharacter() {
      this.$emit("form-character", this.CharacterId);
    },
  },
};
</script>