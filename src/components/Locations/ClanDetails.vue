<template>
  <div class="card card-image-layout  clan-detail-layout mb-3">
    <div
      class="card-image clan-detail-card"
      v-bind:style="{
        backgroundImage: 'url(/images/Backgrounds/' + clan.Image + ')',
      }"
    ></div>
    <div class="card-body">
      <h5 class="card-title">{{ clan.Name }}</h5>
      <div class="card-text">
        <p>{{ clan.Description }}</p>
        <p>{{ clan }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import ClanService from "../../services/ClansServices";
export default {
  name: "ClanDetails",
  data() {
    return {
      url: "",
      clan: {},
    };
  },
  created() {
    this.url = this.$route.params.id
  },
  mounted() {
    this.getClan();
  },
  methods: {
    getClan() {
      ClanService.getClanByName(this.url)
        .then((response) => {
          this.clan = response.data.ob;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
