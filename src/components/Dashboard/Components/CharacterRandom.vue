<template>
    <div class="card border-none background-lineart fiction-card random-characters-card width-120-vh height-45-vh padding-0 margin-0-rem">
      <TitleHeaderDashboard v-bind:title="'Personnages aléatoires'" v-bind:type="'myCharacters'"/>
      <div class="card-body flex-wrap-wrap display-flex-row align-items-content-justify-content">
          <div class="display-flex-row align-items-content-justify-content height-15-vh margin-0-2vh-0-0" 
            v-for="character in randomCharacters"
            :key="character.Id"
          >
            <character-link
              v-bind:typeCharacter="'ExistedCharacter'"
              v-bind:route="'/characterDetails/'"
              v-bind:ClanImage="character.Clan.Image"
              v-bind:CharacterImage="character.Image"
              v-bind:CurrentName="character.CurrentName"
              />
          </div>
      </div>
    </div>
</template>
<script>
import TitleHeaderDashboard from "../../Components/SpecificComponent/TitleHeaderDashboard.vue";
import CharacterLink from "../ComponentGeneric/CharacterLink.vue";
export default {
  name: "CharacterRandom",
  components: { TitleHeaderDashboard, CharacterLink },
  props: ["randomCharacters"],
};
</script>