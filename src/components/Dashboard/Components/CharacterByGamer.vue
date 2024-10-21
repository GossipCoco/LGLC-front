<template>
  <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12 card-global">
    <div class="card border-none background-lineart profil-card fiction-card">
      <TitleHeaderDashboard v-bind:title="'Mes OC\'s'" v-bind:route="'OriginaleCharacterByUser'" v-bind:type="'Lastfictions'" />
      <div class="card-body"> 
        <div v-for="(character, index) in gamer" :key="index">
          <p class="text-white">{{ character.UserName }}</p>          
          <div class="display-flex-column">
            <div class="character-illustration-container background-size-cover" v-bind:style="{ backgroundImage: 'url(' + character.Image + ')' }"></div>
            <div class="character-description-container flex-one text-white text-align-justify" v-html="truncateText(character.Description, 255)"></div>
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
  methods: {
    truncateText(text, maxLength) {
      if (text.length <= maxLength) {
        return text;
      }
      return text.substring(0, maxLength) + '...';
    },
  }
};
</script>