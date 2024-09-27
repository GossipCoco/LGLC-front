<template>
  <div class="row">    
    <SelectCharacterComponent
      v-bind:For="'SearchCharacter'"
      v-bind:label="'Chercher un personnage'"
      v-bind:characters="characters"
      v-bind:col="'col-2'"
      @form-character="getCharacter"
    />
    <SelectClanComponent
      v-bind:For="'SearchClan'"
      v-bind:label="'Chercher les fictions d\'un clan'"
      v-bind:clans="clans"
      v-bind:col="'col-2'"
      @form-clans="getclans"
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
import SelectCharacterComponent from "../../Components/FormComponent/SelectCharacterComponent.vue";
import SelectClanComponent from "../../Components/FormComponent/SelectClanComponent.vue";
export default {
  name: "SearchBarComponent",
  props: ["For", "label", "characterId", "characters", "clans"],
  components: { SelectCharacterComponent, SelectClanComponent },
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