<template>
  <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 card-global">
    <div class="card border-none background-lineart fiction-card random-characters-card padding-0-rem margin-0-rem">
      <TitleHeaderDashboard v-bind:title="'Personnages aléatoires'" v-bind:type="'myCharacters'"/>
      <div class="card-body display-flex-row align-items-content-justify-content">
         <div class="display-flex-row width-10-rem margin-bottom-1-rem" 
              v-for="character in randomCharacters"
              :key="character.Id"
            >
              <router-link :to="'/characterDetails/' + character.CurrentName" class="display-flex-column">
                <p class="text-white">{{ character.CurrentName }}</p>
                <div
                  class="rond-character-background background-size-cover display-flex-row align-items-content-justify-content"
                  v-bind:style="{
                    backgroundImage: 'url(' + character.Clan.Image + ')',
                  }"
                >
                  <img class="height-auto width-100-percent" :src="character.Image" :alt="character.Image"/>
                </div>
              </router-link>
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