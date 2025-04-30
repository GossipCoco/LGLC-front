<template>
  <div class="row top-left-dashboard">
    <div
      class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 card-global"
    >
      <div
        class="card background-lineart border-none arc-card last-arc-container"
      >
        <TitleHeaderDashboard
          v-bind:title="'Dernier arc en cours'"
          v-bind:type="'chapters'"
        />
        <div class="card-body last-chapter-card text-white"></div>
      </div>
    </div>
  </div>
</template>
<script>
import ArcBookService from "../../../services/ArcBookService";
import TitleHeaderDashboard from "../../Components/SpecificComponent/TitleHeaderDashboard.vue";
export default {
  name: "NewArc",
  components: { TitleHeaderDashboard },
  data() {
    return {
      Arc: {},
    };
  },
  methods: {
    GetCurrentArc() {
      ArcBookService.GetCurrentArc.then((response) => {
        this.Arc = response.data.ob;
      }).catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>