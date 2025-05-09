<template>
  <div class="col-xxl-3 col-xl-12 col-lg-12 col-md-6 col-sm-12 col-xs-12 card-global all-my-oc-card">
    <div class="card height-60-vh border-none display-flex-column profil-card fiction-card background-lineart my-oc-card">
      <TitleHeaderDashboard
        v-bind:title="'Mes OC\'s'"
        v-bind:route="'OriginaleCharacterByUser'"
        v-bind:type="'Lastfictions'"
      />
      <Spinner v-if="showspinner" />
      <div class="card-body display-flex-row flex-wrap align-items-content-justify-content" v-if="!showspinner">
        <div class="row width-30-vh">
          <div v-for="(character, index) in gamer" :key="index" class="col">
            <router-link class="text-white roboto" :to="'/OriginaleCharacterDetails/' + character.CurrentName">
              <div class="character-illustration-container border-radius-100 height-10-vh width-10-vh background-size-cover"
                v-bind:style="{ backgroundImage: 'url(' + character.Image + ')', }"></div>
                {{ character.CurrentName }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TitleHeaderDashboard from "../../Components/SpecificComponent/TitleHeaderDashboard.vue";
import Spinner from "../../Components/GenericComponent/Spinner.vue";
export default {
  name: "CharacterByUser",
  components: { TitleHeaderDashboard, Spinner},
  props: ["gamer"],  
  data() {
    return {      
      showspinner: false,
    }
  }
};
</script>