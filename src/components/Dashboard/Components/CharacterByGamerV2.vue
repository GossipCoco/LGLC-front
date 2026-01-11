<template>
  <div class="col-xxl-3 col-xl-12 col-lg-6 col-md-12 col-sm-12 col-xs-12 card-global all-my-oc-card">
    <div class="card height-60-vh border-none display-flex-column profil-card fiction-card background-lineart my-oc-card">
      <TitleHeaderDashboard
        v-bind:title="'Mes OC\'s'"
        v-bind:route="'OriginaleCharacterByUser'"
        v-bind:type="'Lastfictions'"
      />
      <Spinner v-if="showspinner" />
      <div class="card-body display-flex-row flex-wrap align-items-content-justify-content" v-if="!showspinner">
        <div class="row width-30-vh flex-wrap-wrap">
          <div v-for="(character, index) in gamer" :key="index" class="col">
            <character-link
              v-bind:typeCharacter="'OC'"
              v-bind:route="'/OriginaleCharacterDetails/'"              
              v-bind:CharacterImage="character.Image"
              v-bind:CurrentName="character.CurrentName"
              />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TitleHeaderDashboard from "../../Components/SpecificComponent/TitleHeaderDashboard.vue";
import CharacterLink from "../ComponentGeneric/CharacterLink.vue";
import Spinner from "../../Components/GenericComponent/Spinner.vue";
export default {
  name: "CharacterByUser",
  components: { TitleHeaderDashboard, Spinner, CharacterLink},
  props: ["gamer"],  
  data() {
    return {      
      showspinner: false,
    }
  }
};
</script>