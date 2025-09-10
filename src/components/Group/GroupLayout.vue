<template>
  <div
    id="group-container"
    class="height-80-vh border-none background-none flex-one card display-flex-column margin-2vh padding-2-vh"
  >
    <CardHeader v-bind:Title="'Les clubs'" />
    <div class="card-body padding-2-vh height-80-vh">
      <div class="row">
        <div
          class="col-sm-6 mb-3 mb-sm-0"
          v-for="(group, index) in AllGroups"
          :key="index"
        >
            <group-card v-bind:group="group" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GroupService from "../../services/GroupService";
import CardHeader from "../Components/GenericComponent/CardHeader.vue";
import GroupCard from "./GroupComponent/GroupCard.vue";
export default {
  name: "GroupLayout",
  components: { CardHeader, GroupCard },
  data() {
    return {
      AllGroups: {},
    };
  },
  created() {
    this.GetAllGroups();
  },
  methods: {
    GetAllGroups() {
      GroupService.GetAllGroups()
        .then((response) => {
          console.log(response.data.ob);
          this.AllGroups = response.data.ob;
        })
        .catch((err) => {
          console.error("erreur", err);
        });
    },
  },
};
</script>