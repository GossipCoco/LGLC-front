<template>
  <div
    class="col-xxl-3 col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 card-global"
  >
    <div class="card height-60-vh background-lineart02 border-none fiction-card">
      <TitleHeaderDashboard
        v-bind:title="'Mes clubs'"
        v-bind:type="'fictions'"
      />
      <div class="card-body all-last-three-fictions-container padding-0 margin-0-rem display-flex-column align-items-content-justify-content">
        <div v-for="(club, index) in Clubs" :key="index">
          <img :src="club.Group.Symbol" :alt="club.GroupId" width="25%"/>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import GroupService from "../../../services/GroupService";
import TitleHeaderDashboard from "../../Components/SpecificComponent/TitleHeaderDashboard.vue";
export default {
    components: { TitleHeaderDashboard },
  data() {
    return {
      usrId: this.$store.state.auth.user.usrID,
      Clubs: {},
    };
  },
    created() {
    this.GetAllGroupsByUser(this.usrId);
  },
  methods:{
    GetAllGroupsByUser(e){
        GroupService.GetAllGroupsByUser(e)
        .then((response) => {
          this.Clubs = response.data.ob;
          console.log(this.Clubs)
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
    
}
</script>