<template>
  <div class="row search-bar-component">
    <SelectCharacterComponent
      v-bind:For="'SearchCharacter'"
      v-bind:label="'Chercher un personnage'"
      v-bind:formdata="'getCharacter'"
      v-bind:characters="characters"
      v-bind:col="'col-4'"
      @getCharacter="getCharacter"
    />
    <GenericSelect
      v-bind:For="'SearchAuthor'"
      v-bind:label="'Auteur'"
      v-bind:formdata="'getAuthor'"
      v-bind:col="'col-3'"
      @getAuthor="getAuthor"
    />
    <div class="col-2 display-flex align-items-content-justify-content">
      <button type="button" class="btn btn-primary">Rechercher une fiction</button>
    </div>
    <div class="col-3 display-flex align-items-content-justify-content">
      <router-link class="btn btn-primary" to="/createANewFiction">
        Nouvelle fiction
      </router-link>
    </div>
  </div>
</template>
<script>
import GenericSelect from "../../Components/FormComponent/GenericSelect.vue";
import SelectCharacterComponent from "../../Components/FormComponent/SelectCharacterComponent.vue";
export default {
  name: "SearchBarComponent",
  props: ["For", "label", "characterId", "characters", "clans"],
  components: { SelectCharacterComponent, GenericSelect },
  data() {
    return {
      allCharacters: this.characters,
    };
  },
  methods: {
    getCharacter(e) {
      console.log(e)
      this.$emit("form-info",e ,'Character');
    },
    getclan(e) {
      console.log(e)
      this.$emit("form-info",e ,'Clan');
    },
    getAuthor(e) {
      console.log(e)
      this.$emit("form-info",e ,'Auteur');
    },
  },
};
</script>