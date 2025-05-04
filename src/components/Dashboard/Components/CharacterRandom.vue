<template>
  <div class="row bottom-left-dashboard">
  <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 card-global">
    <div class="card border-none background-lineart fiction-card random-characters-card height-45-vh padding-0 margin-0-rem">
      <TitleHeaderDashboard v-bind:title="'Personnages aléatoires'" v-bind:type="'myCharacters'"/>
      <div class="card-body display-flex-row align-items-content-justify-content">
         <div class="display-flex-row align-items-content-justify-content height-15-vh margin-bottom-1-rem" 
              v-for="character in randomCharacters"
              :key="character.Id"
            >
              <router-link :to="'/characterDetails/' + character.CurrentName" class="display-flex-column">
                <p class="text-white poppins-text">{{ character.CurrentName }}</p>
                <div
                  class="rond-character-background border-radius-100 background-size-cover display-flex-row align-items-content-justify-content"
                  v-bind:style="{
                    backgroundImage: 'url(' + character.Clan.Image + ')',
                  }"
                >
                  <img class="height-auto width-100-percent" loading="lazy" :src="character.Image" :alt="character.Image"/>
                </div>
              </router-link>
            </div>
          </div>
       </div>
      </div>
  </div>
</template>
<script>
import TitleHeaderDashboard from "../../Components/SpecificComponent/TitleHeaderDashboard.vue";
export default {
  name: "CharacterRandom",
  components: { TitleHeaderDashboard },
  props: ["randomCharacters"],
};
</script>