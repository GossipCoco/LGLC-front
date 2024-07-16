<template>
  <div class="dashboard-max-card-container card fiction-container">
    <div class="card-header">
      <h4>Lire des fictions</h4>
    </div>
    <SummaryFiction/>
  </div>
</template>
<script>
import SummaryFiction from './AllMyFictions/SummaryFiction.vue';
export default {
  name: "AllExistingFictionsLayout",
  components: { SummaryFiction },  
};
</script>