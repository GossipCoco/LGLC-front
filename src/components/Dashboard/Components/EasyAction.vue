<template>  
    <div class="card border-none background-lineart fiction-card"> 
      <TitleHeaderDashboard
            v-bind:title="'Actions rapides'"
            v-bind:type="'chapters'"
        />    
      <div class="card-body easy-action-container">
        <div class="display-flex-column flex-one">
        <router-link to="/CreateAnOriginalCharacter" type="button" class="btn btn-primary margin-1-0-0-0">
          Créer un nouveau personnage
        </router-link>
        <router-link type="button" class="btn btn-primary margin-1-0-0-0" to="/createANewFiction">Créer une nouvelle fiction</router-link>
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