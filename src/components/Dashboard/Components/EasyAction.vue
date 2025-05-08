<template>  
    <div class="card height-25-vh border-none background-lineart fiction-card margin-0-0-2vh-0"> 
      <TitleHeaderDashboard
            v-bind:title="'Actions rapides'"
            v-bind:type="'chapters'"
        />    
      <div class="card-body  height-25-vh easy-action-container">
        <div class="display-flex-column flex-one">
        <router-link to="/CreateAnOriginalCharacter" type="button" class="btn btn-primary margin-2vh-0-0-0 poppins-text">
          Créer un nouveau personnage
        </router-link>
        <router-link type="button" class="btn btn-primary margin-2vh-0-0-0 poppins-text" to="/createANewFiction">
          Créer une nouvelle fiction
        </router-link>
      </div>
      </div>
    </div>
</template>
<script>

import TitleHeaderDashboard from '../../Components/SpecificComponent/TitleHeaderDashboard.vue';
export default {
  name: 'EasyAction',
    components:{TitleHeaderDashboard}
  
}
</script>