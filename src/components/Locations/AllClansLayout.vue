<template>
  <div class="overflowX-hidden clans-location-container height-90-vh overflow-y-hidden">
    <div class="display-flex-row card-group clan-group width-120-vh overflow-y-hidden height-80-vh ">
      <div v-for="(clan, index) in clans" :key="index">
        <div class="card background-color-dark-green-01 border-radius-100-100-8-8 location-clan-background-width-container">
          <div
            class="card-image clan-card background-position-50-percent width-30-vh height-30-vh background-size-cover background-color-dark-green-01"
            v-bind:style="{
              backgroundImage: 'url(' + clan.Image + ')',
            }"
          ></div>
          <div class="card-header display-flex-row align-items-content-justify-content">
            <div class="row">
              <div class="display-flex align-items-content-justify-content">
                <router-link
                  type="button"
                  class="btn btn-primary clan-btn width-30-vh"
                  :to="'/clan/' + clan.Id"
                  >
                    {{ clan.Name }}
                  </router-link
                >
              </div>
            </div>
          </div>
        </div>
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
</template>
<script>
import ClanService from "../../services/ClansServices";
import Pagination from "../Components/GenericComponent/Pagination.vue";
export default {
  name: "AllClans",
  components: { Pagination },
  data() {
    return {
      imageChar: "",
      clans: {},
      nav: {
        current: 0,
        pages: 0,
        step: 8,
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
          this.nav.step = 6;
        } else {
          this.nav.step = 6;
        }
        this.nav.pages = Math.ceil(this.NbAllClans / this.nav.step);
      } catch (e) {
        console.log(e);
      }
    },
    async ClanPagination(page) {
      this.nav.current = page;
      if (window.innerWidth >= this.width) {
        this.nav.step = 6;
      } else {
        this.nav.step = 6;
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