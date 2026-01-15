<template>
  <div class="clan-container">
    <div class="overflowX-hidden clans-location-container overflow-y-hidden">
      <div class="display-flex-row card-group clan-group width-100-100 overflow-y-hidden height-80-vh ">
        <div v-for="(clan, index) in clans" :key="index">
          <clan-location-component v-bind:location="clan" v-bind:route="'/clan/'"/>        
        </div>
      </div>
    </div>
    <div class="row pagination-container all-clans-pagination-container">
      <Pagination
        v-if="!showspinner"
        :nav="nav"
        :filters="filters"
        :getDatas="'ClanPagination'"
        @ClanPagination="ClanPagination"
      />
    </div>
  </div>
</template>
<script>
import ClanService from "../../services/ClansServices";
import ClanLocationComponent from "./Components/ClanLocationComponent.vue";
import Pagination from "../Components/GenericComponent/Pagination.vue";
export default {
  name: "AllClans",
  components: { Pagination, ClanLocationComponent },
  data() {
    return {
      imageChar: "",
      clans: {},
      nav: {
        current: 0,
        pages: 0,
        step: 10,
      },
    };
  },
  mounted() {
    this.initClans();
  },
  methods: {
    async initClans() {
      await this.countAllClans();
      await this.getAllClans(this.nav);
    },
    truncateText(text, maxLength) {
      if (text.length <= maxLength) {
        return text;
      }
      return text.substring(0, maxLength) + "...";
    },
    
    async countAllClans() {
      try {
        const response = await ClanService.countAllClans();        
        this.NbAllClans = response.data.ob.count;
        if (window.innerWidth >= this.width) {
          this.nav.step = 10;
        } else {
          this.nav.step = 10;
        }
        this.nav.pages = Math.ceil(this.NbAllClans / this.nav.step);
      } catch (e) {
        console.log(e);
      }
    },
    async ClanPagination(page) {
      this.nav.current = page;
      if (window.innerWidth >= this.width) {
        this.nav.step = 10;
      } else {
        this.nav.step = 10;
      }
      await this.getAllClans(this.nav);
    },
    async getAllClans(nav) {
      try {
        const response = await ClanService.getAllClans(nav);
        this.clans = response.data.ob;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>