<template>
  <div :class="col">
    <label :for="For" class="text-white form-label poppins-text">
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
  props: ["For", "label", "characterId", "characters", "col", "getDatas"],
  data() {
    return {
      form: null,
      CharacterId: null,
    };
  },
  methods: {
    getCharacter() {
      this.$emit(this.getDatas, this.CharacterId);
    },
  },
};
</script>