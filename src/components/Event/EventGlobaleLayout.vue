<template>
  <div class="margin-2vh border-none background-color-main-lineart flex-one card display-flex-column event-container padding-2-vh">
    <CardHeader v-bind:Title="'évènements'" />
    <div class="card-body height-80-vh padding-2-vh">
      <div class="row event-container">
        <div class="col-6 col-sm-12 col-md-6">
          <ListEvents v-bind:events="events" />
        </div>
        <div class="col-6 col-sm-12 col-md-6">
          <Scheduler />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import QuestService from "../../services/QuestService";
import CardHeader from "../Components/GenericComponent/CardHeader.vue";
import ListEvents from "./Components/ListEvents.vue";
import Scheduler from "./Components/Scheduler.vue";
export default {
  name: "EventGlobalLayout",
  components: {
    CardHeader,
    ListEvents,
    Scheduler,
  },
  data() {
    return {
      events: {},
      filters: [],
      nav: {
        current: 0,
        pages: 0,
        step: 10,
      },
    };
  },
  created() {
    this.GetAllQuests();
  },
  methods: {
    GetAllQuests() {
      QuestService.GetAllQuests(this.nav)
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