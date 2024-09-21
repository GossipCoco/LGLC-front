<template>
  <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12 card-global">
    <div class="card profil-card fiction-card">
      <TitleHeaderDashboard v-bind:title="'évènements à venir'" />
      <div class="card-body">
        <div v-for="(event, index) in events" :key="index">
          <p>{{ event.Title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import QuestService from "../../../services/EventService";

import TitleHeaderDashboard from "../../Components/SpecificComponent/TitleHeaderDashboard.vue";
export default {
  name: "Event",
  components: { TitleHeaderDashboard },
  data() {
    return {
      events: {},
      nav: {
        current: 0,
        pages: 0,
        step: 2,
      },
    };
  },
  created() {
    this.GetAllQuests(this.nav);
  },
  methods: {
    GetAllQuests(nav) {
      QuestService.GetAllEvents(nav)
        .then((response) => {
          this.events = response.data.ob;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>