<template>
  <div class="row">
    <div class="col-2">
      <SelectCharacterComponent
        v-bind:For="'SearchCharacter'"
        v-bind:label="'Chercher un personnage'"       
        v-bind:characters="characters"
        @form-character="getCharacter"
      />
      <!-- {{ characters }} -->
    </div>
    <div class="col-2"></div>
    <div class="col-2"></div>
    <div class="col-2"></div>
    <div class="col-2"></div>
    <div class="col-2">
      <button type="button" class="btn btn-primary">Rechercher</button>
    </div>
  </div>
</template>
<script>
import SelectCharacterComponent from "../../Components/FormComponent/SelectCharacterComponent.vue";
export default {
  name: "SearchBarComponent",
  props: ["For", "label", "characterId", "characters"],
  components: { SelectCharacterComponent },
  data() {
    return {
        allCharacters: this.characters
    };
  },
  methods: {
    getCharacter() {
      this.$emit("form-character", this.CharacterId);
    },
  },
};
</script>