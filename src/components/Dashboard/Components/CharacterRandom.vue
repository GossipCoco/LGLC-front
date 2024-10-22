<template>
  <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 card-global">
    <div class="card border-none background-lineart fiction-card random-characters-card">
      <TitleHeaderDashboard v-bind:title="'Personnages aléatoires'" v-bind:type="'myCharacters'"/>
      <div class="card-body display-flex-row">
        <div class="row width-100-percent">
          <div class="col-12 width-100-percent display-flex-row align-items-content-justify-content">
            <div class="character-l1 width-100-percent display-flex-column align-items-content-justify-content flex-one" v-for="character in randomCharacters" :key="character.Id">
              <router-link :to="'/characterDetails/' + character.CurrentName" class="display-flex-column">
                <div class="name_character"><p>{{ character.CurrentName }}</p></div>
                <div class="rond-character-background"  v-bind:style="{ backgroundImage: 'url(' + character.Clan.Image + ')' }">
                  <img class="height-auto width-100-percent" :src="character.Image" :alt="character.Image" />                  
                </div>
                </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TitleHeaderDashboard from '../../Components/SpecificComponent/TitleHeaderDashboard.vue';
export default {
  name: 'CharacterRandom',
  components:{TitleHeaderDashboard},
  props: ['randomCharacters']
}
</script>