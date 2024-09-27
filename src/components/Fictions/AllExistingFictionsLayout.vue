<template>
  <div class="dashboard-max-card-container background-color-main-lineart flex-one card display-flex-column fiction-container">
    <CardHeader v-bind:Title="'Lire des fictions'"/>
    <SummaryFiction/>
  </div>
</template>
<script>

import CardHeader from "../Components/GenericComponent/CardHeader.vue";
import SummaryFiction from './AllMyFictions/SummaryFiction.vue';
export default {
  name: "AllExistingFictionsLayout",
  components: { CardHeader, SummaryFiction},
  data(){
    return{}
  },
}
  
</script>