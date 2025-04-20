<template>
  <div :class="col">
    <div class="mb-3 row">
      <label :for="For" class="col-sm-4 text-white form-label form-select-sm">
        {{ label }}
      </label>
      <div class="col-sm-8">
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
    </div>
  </div>
</template>
<script>
export default {
  name: "SelectCharacterComponent",
  props: ["For", "label", "characterId", "characters", "col"],
  data() {
    return {
      form: null,
      CharacterId: null,
    };
  },
  methods: {
    getCharacter() {
      this.$emit("getCharacter", this.CharacterId);
    },
  },
};
</script>