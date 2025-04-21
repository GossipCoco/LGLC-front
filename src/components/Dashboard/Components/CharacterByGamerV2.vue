<template>
  <div
    class="col-xxl-3 col-xl-12 col-lg-12 col-md-6 col-sm-12 col-xs-12 card-global all-my-oc-card"
  >
    <div
      class="card border-none display-flex-column profil-card fiction-card background-lineart my-oc-card"
    >
      <TitleHeaderDashboard
        v-bind:title="'Mes OC\'s'"
        v-bind:route="'OriginaleCharacterByUser'"
        v-bind:type="'Lastfictions'"
      />
      <div class="card-body display-flex-row flex-wrap align-items-content-justify-content">        
          <div v-for="(character, index) in gamer" :key="index" class="row">
            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-12 col-xs-12">
              <div class="display-flex-column my-oc-character-containe align-items-content-justify-content">
                <div class="character-illustration-container background-size-cover"
                  v-bind:style="{
                    backgroundImage: 'url(' + character.Image + ')',
                  }"
                ></div>
                <router-link class="text-white roboto" :to="'/OriginaleCharacterDetails/' + character.CurrentName">
                  {{ character.CurrentName }}
                </router-link>
              </div>
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