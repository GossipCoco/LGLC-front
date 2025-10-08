<template>
  <div
    id="group-container"
    class="height-80-vh border-none background-none flex-one card display-flex-column margin-2vh padding-2-vh"
  >
    <CardHeader v-bind:Title="'Les clubs'" />
    <div class="card-body padding-2-vh height-80-vh">
      <div class="row">
        <div
          class="col-sm-3 mb-3 mb-sm-0"
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
import functions from "../../services/functions";
import GroupService from "../../services/GroupService";
import CardHeader from "../Components/GenericComponent/CardHeader.vue";
import GroupCard from "./GroupComponent/GroupCard.vue";
export default {
  name: "GroupLayout",
  components: { CardHeader, GroupCard },
  data() {
    return {
      AllGroups: {},      
      showGroups: false,
      showspinner: false,
      NbAllCount: 0,
      nav: {
        current: 0,
        pages: 0,
        step:8,
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
        // ⚠️ Ajuste si ta méthode diffère (ex: response.data.total)
        const response = await GroupService.CountAllGroups();
        this.NbAllGroups = response.data.ob.count;
        console.log("Nombre total de groupes:", this.NbAllGroups);
        functions.CalcPagination(this.NbAllGroups, this.nav, this.nav.step);
      } catch (err) {
        console.error("Erreur count groups:", err);
        this.NbAllGroups = 0;
        functions.CalcPagination(0, this.nav, this.nav.step);
      }
    },
  async GetAllGroups(nav) {
        this.showspinner = true;
        try {
          // ⚠️ Si ton API attend { page, limit } au lieu de nav brut :
          // const response = await GroupService.GetAllGroups({ page: nav.current, limit: nav.step });
          const response = await GroupService.GetAllGroups(nav);
          this.AllGroups = Array.isArray(response.data.ob) ? response.data.ob : [];
        } catch (err) {
          console.error("Erreur GetAllGroups:", err);
          this.AllGroups = [];
        } finally {
          this.showspinner = false;
        }
      },
    },
};
</script>