<template>
  <div
    class="col-xxl-3 col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 card-global"
  >
    <div class="card height-60-vh background-lineart02 border-none fiction-card">
      <TitleHeaderDashboard
        v-bind:title="'Mes clubs'"
        v-bind:type="'fictions'"
      />
    </div>
    <div class="card-body all-last-three-fictions-container padding-0 margin-0-rem display-flex-column align-items-content-justify-content">

    </div>
</div>
</template>
<script>
import TitleHeaderDashboard from "../../Components/SpecificComponent/TitleHeaderDashboard.vue";
export default {
    components: { TitleHeaderDashboard },
  data() {
    return {
      usrId: this.$store.state.auth.user.usrID,
      Clubs: {},
    };
  },
    
}
</script>