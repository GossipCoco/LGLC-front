<template>  
    <div class="card height-25-vh border-none background-lineart fiction-card margin-0-0-2vh-0"> 
      <TitleHeaderDashboard
            v-bind:title="'Actions rapides'"
            v-bind:type="'chapters'"
        />    
      <div class="card-body  height-25-vh easy-action-container">
        <div class="display-flex-column flex-one">
          <div v-for="(button, index) in buttons" :key="index">
            <router-link :to="button.route" type="button" class="btn btn-primary margin-2vh-0-0-0 poppins-text width-40-vh">
              {{ button.title }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import TitleHeaderDashboard from '../../Components/SpecificComponent/TitleHeaderDashboard.vue';
export default {
  name: 'EasyAction',
  components:{TitleHeaderDashboard},
  data(){
    return{
      buttons: [
        {
          route: '/CreateAnOriginalCharacter',
          title: 'Créer un nouveau personnage'
        },
        {
          route: '/createANewFiction',
          title: 'Créer une nouvelle fiction'
        }
      ]
    }
  }  
}
</script>