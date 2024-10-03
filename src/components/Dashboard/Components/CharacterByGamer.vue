<template>
  <div
    class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 card-global"
  >
    <div class="card profil-card fiction-card">
      <TitleHeaderDashboard v-bind:title="'Mes personnages'" />
      <div class="card-body">
        <router-link to="/OriginaleCharacterByUser" >Mes personnages</router-link>
        <div v-for="(character, index) in gamer" :key="index">
          <p>{{ character.UserName }}</p>
          <div class="display-flex-row">
            <div class="character-illustration-container">
              <img :src="character.Image" class="image-width" />
            </div>
            <div class="character-description-container" v-html="character.Description"></div>
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