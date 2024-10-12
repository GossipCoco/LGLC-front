<template>
  <div class="row">    
    <SelectCharacterComponent
      v-bind:For="'SearchCharacter'"
      v-bind:label="'Chercher un personnage'"
      v-bind:characters="characters"
      v-bind:col="'col-2'"
      @form-character="getCharacter"
    />
    <GenericSelect
          v-bind:For="'SearchClan'"
          v-bind:label="'Clan'"
          v-bind:formdata="'getclan'"
          v-bind:col="'col-3'"
          @getclan="getclan"
        />

    <div class="col-2">

    </div>

    <div class="col-1">
      <button type="button" class="btn btn-primary">Rechercher</button>
    </div>
    <div class="col-3">
      <router-link class="btn btn-primary" to="/createANewFiction">
        Créer une nouvelle fiction
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
    getCharacter(CharacterId) {
      this.$emit("form-character", CharacterId);
    },
    getclans(ClanId){
      this.$emit("form-clan", ClanId);
    }
  },
};
</script>