<template>
  <div class="overflowX-hidden clans-location-container height-90-vh overflow-y-hidden">
    <div class="display-flex-row card-group clan-group width-100-100 overflow-y-hidden height-80-vh ">
      <div v-for="(location, index) in allLocations" :key="index">
        <clan-location-component v-bind:location="location" v-bind:route="'/LocationsDetails/'"/>
      </div>
    </div>
    <div class="row pagination-container all-locations-pagination-container">
      <Pagination
        v-if="!showspinner"
        :nav="nav"
        :filters="filters"
        :getDatas="'LocationPagination'"
        @LocationPagination="LocationPagination"
      />
    </div>
  </div>
</template>
<script>
import ClansServices from '../../services/ClansServices';
import ClanLocationComponent from './Components/ClanLocationComponent.vue';
import Pagination from '../Components/GenericComponent/Pagination.vue';
export default {
  name: "AllLocationsLayout",
  components: { Pagination, ClanLocationComponent },
  data() {
    return {
      width: 1400,
      allLocations: {},
      NbLocations: null,
      nav: {
        current: 0,
        pages: 0,
        step: 8,
      },
    };
  },
  mounted() {
    this.initLocation()
  },
  methods: {
    truncateText(text, maxLength) {
      if (text.length <= maxLength) {
        return text;
      }
      return text.substring(0, maxLength) + "...";
    },
    async initLocation() {
      await this.countAllLocations();
      await this.GetAllLocations(this.nav);
    },
    async countAllLocations() {
      try {
        const response = await ClansServices.countAllLocations();
        this.NbLocations = response.data.ob.count;
        if (window.innerWidth >= this.width) {
          this.nav.step = 10;
        } else {
          this.nav.step = 8;
        }
        this.nav.pages = Math.ceil(this.NbLocations / this.nav.step);
      } catch (e) {
        console.log(e);
      }
    },
    async LocationPagination(page) {
      this.nav.current = page;
      if (window.innerWidth >= this.width) {
        this.nav.step = 10;
      } else {
        this.nav.step = 8;
      }
      await this.GetAllLocations(this.nav);
    },
    async GetAllLocations(nav) {
      try {
        const response = await ClansServices.GetAllLocations(nav);
        this.allLocations = response.data.ob;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>