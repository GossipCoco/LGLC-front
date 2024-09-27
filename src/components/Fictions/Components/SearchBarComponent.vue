<template>
  <div class="row">    
    <SelectCharacterComponent
      v-bind:For="'SearchCharacter'"
      v-bind:label="'Chercher un personnage'"
      v-bind:characters="characters"
      v-bind:col="'col-2'"
      @form-character="getCharacter"
    />   
    <div class="col-2">

    </div>
    <div class="col-2">

    </div>
    <div class="col-2">
      <button type="button" class="btn btn-primary">Rechercher</button>
    </div>
    <div class="col-4">
      <router-link class="btn btn-primary" to="/createANewFiction">
        Créer une nouvelle fiction
      </router-link>
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
      allCharacters: this.characters,
    };
  },
  methods: {
    getCharacter(CharacterId) {
      this.$emit("form-character", CharacterId);
    },
  },
};
</script>