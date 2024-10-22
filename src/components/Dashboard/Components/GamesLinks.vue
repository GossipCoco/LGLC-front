<template>
  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 card-global">
    <div class="card background-lineart border-none fiction-card game-container">
        <TitleHeaderDashboard
            v-bind:title="'Nos jeux'"
            v-bind:type="'chapters'"
        />
        <div class="card-body display-flex-column align-items-content-justify-content">

        </div>
    </div>
  </div>
</template>
<script>
import TitleHeaderDashboard from '../../Components/SpecificComponent/TitleHeaderDashboard.vue';
export default {
    name:'GamesLinks',
    components:{TitleHeaderDashboard}
}
</script>