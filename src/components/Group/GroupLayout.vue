<template>
  <div
    id="group-container"
    class="height-100-vh border-none background-none flex-one card display-flex-column"
  >
    <CardHeader v-bind:Title="'Les clubs'" />
    <div class="card-body height-90-vh">
      <div class="row row-cols-5 row-cols-md-5 g-5 width-100-100">
        <div class="col-sm-2" v-for="(group, index) in AllGroups" :key="index">
          <group-card v-bind:group="group" />
        </div>
      </div>
      <div class="row pagination-container all-clans-pagination-container margin-2vh">
        <Pagination
          v-if="!showspinner"
          :nav="nav"
          :filters="filters"
          :getDatas="'GroupPagination'"
          @GroupPagination="GroupPagination"
        />
      </div>
    </div>
  </div>
</template>
<script>
import functions from "../../services/functions";
import GroupService from "../../services/GroupService";
import CardHeader from "../Components/GenericComponent/CardHeader.vue";
import GroupCard from "./GroupComponent/GroupCard.vue";
import Pagination from "../Components/GenericComponent/Pagination.vue";
export default {
  name: "GroupLayout",
  components: { CardHeader, GroupCard, Pagination },
  data() {
    return {
      AllGroups: {},
      showGroups: false,
      showspinner: false,
      NbAllCount: 0,
      nav: {
        current: 0,
        pages: 0,
        step: 12,
      },
    };
  },
  async created() {
    await this.initPage();
  },
  methods: {
    async initPage() {
      this.showspinner = true;
      try {
        await this.countAllGroups();
        await this.GetAllGroups(this.nav);
      } catch (err) {
        console.error("Erreur init groups:", err);
      } finally {
        this.showspinner = false;
      }
    },
    async countAllGroups() {
      try {
        const response = await GroupService.CountAllGroups();
        this.NbAllGroups = response.data.ob.count;
        functions.CalcPagination(this.NbAllGroups, this.nav, this.nav.step);
      } catch (e) {
        console.log(e);
      }
    },
    async GetAllGroups(nav) {
      this.showspinner = true;
      try {
        const response = await GroupService.GetAllGroups(nav);
        this.AllGroups = Array.isArray(response.data.ob)
          ? response.data.ob
          : [];
      } catch (err) {
        console.error("Erreur GetAllGroups:", err);
        this.AllGroups = [];
      } finally {
        this.showspinner = false;
      }
    },
    async GroupPagination(page) {
      this.nav.current = page;
      if (window.innerWidth >= this.width) {
        this.nav.step = 12;
      } else {
        this.nav.step = 8;
      }
      await this.GetAllGroups(this.nav);
    },
  },
};
</script>