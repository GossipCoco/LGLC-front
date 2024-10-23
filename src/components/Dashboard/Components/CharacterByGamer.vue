<template>
  <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 card-global">
    <div class="card border-none background-lineart profil-card fiction-card gamer-character-card">
      <TitleHeaderDashboard v-bind:title="'Mes OC\'s'" v-bind:route="'OriginaleCharacterByUser'" v-bind:type="'Lastfictions'" />
      <div class="card-body display-flex-row align-items-content-justify-content"> 
        <div v-for="(character, index) in gamer" :key="index" class="display-flex-row width-10-rem">
          <div class="display-flex-column my-oc-character-container">
            <router-link class="text-white roboto" :to="'/OriginaleCharacterDetails/'+character.UserName">{{ character.UserName }}</router-link>
            <div class="character-illustration-container background-size-cover" v-bind:style="{ backgroundImage: 'url(' + character.Image + ')' }"></div>            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TitleHeaderDashboard from "../../Components/SpecificComponent/TitleHeaderDashboard.vue";
export default {
  name: "CharacterByUser",
  components: { TitleHeaderDashboard },
  props: ["gamer"],
};
</script>