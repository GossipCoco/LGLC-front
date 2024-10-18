<template>
  <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12  card-global">
    <div class="card border-none fiction-card">
      <TitleHeaderDashboard v-bind:title="'Personnages aléatoires'"/>
      <div class="card-body display-flex-column">
        <div class="row">
          <div class="col-12 character-col display-flex-row align-items-content-justify-content">
            <div class="character-l1 display-flex-column" v-for="character in randomCharacters" :key="character.Id">
              <router-link :to="'/characterDetails/' + character.CurrentName" class="display-flex-column">
                <p>{{ character.CurrentName }}</p>
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