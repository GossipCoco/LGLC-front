<template>
  <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 card-global">
    <div class="card border-none background-lineart profil-card fiction-card">
      <TitleHeaderDashboard v-bind:title="'Mes personnages'" v-bind:type="'myCharacters'">
        <router-link to="/OriginaleCharacterByUser" >Voir tous Mes personnages</router-link>
      </TitleHeaderDashboard>
      <div class="card-body"> 
        <div v-for="(character, index) in gamer" :key="index">
          <p class="text-white">{{ character.UserName }}</p>
          <div class="display-flex-row">
            <div class="character-illustration-container background-size-cover" v-bind:style="{ backgroundImage: 'url(' + character.Image + ')' }">              
            </div>
            <div class="character-description-container flex-one text-white text-align-justify" v-html="character.Description"></div>
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