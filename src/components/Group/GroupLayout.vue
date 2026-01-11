<template>
  <div
    id="group-container"
    class="height-80-vh border-none background-none flex-one card display-flex-column margin-2vh padding-2-vh"
  >
    <CardHeader v-bind:Title="'Les clubs'" />
    <div class="card-body padding-2-vh height-80-vh">
      <div class="row row-cols-6 row-cols-md-6 g-6 width-200-vh">
        <div
          class="col-sm-2"
          v-for="(group, index) in AllGroups"
          :key="index"
        >
            <group-card v-bind:group="group" />
        </div>
      </div>
    </div>
  </div>
    <div class="row pagination-container all-clans-pagination-container">
    <Pagination
      v-if="!showspinner"
      :nav="nav"
      :filters="filters"
      :getDatas="'GroupPagination'"
      @GroupPagination="GroupPagination"
    />
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
        step:10,
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
          this.AllGroups = Array.isArray(response.data.ob) ? response.data.ob : [];
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
          this.nav.step = 10;
        } else {
          this.nav.step = 10;
        }
        await this.GetAllGroups(this.nav);
      },
    },
};
</script>