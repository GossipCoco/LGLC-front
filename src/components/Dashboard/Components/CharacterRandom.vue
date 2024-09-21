<template>
  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12  card-global">
    <div class="card fiction-card">
      <TitleHeaderDashboard v-bind:title="'Personnages aléatoires'"/>
      <div class="card-body display-flex-column">
        <div class="row">
          <div class="col-12 character-col display-flex-row align-items-content-justify-content">
            <div class="character-l1" v-for="character in randomCharacters" :key="character.Id">
              <img class="img-fluid" :src="'/images/Characters/' + character.Image" :alt="character.Image" />
              <br>
              <span class="character-details-router">
                <router-link :to="'/characterDetails/' + character.Id">
                  {{ character.CurrentName }}
                </router-link>
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12  display-flex-row align-items-content-justify-content">
            <router-link to="/CharacterCreate" type="button" class="btn btn-primary">
              Créer un nouveau personnage
            </router-link>
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