<template>
  <div class="container-fluid">
    <div class="padding-0 overflowX-hidden clans-location-container overflowY-auto">
      <div class="display-flex-row card-group clan-group location-group-margin width-120-vh">
        <div v-for="(location, index) in allLocations" :key="index">
          <div class="card background-color-dark-green-01 location-clan-background-width-container">
            <div
              class="card-image clan-card width-30-vh height-30-vh background-size-cover"
              v-bind:style="{
                backgroundImage: 'url(' + location.Image + ')',
              }"
            ></div>
            <div class="card-header display-flex-row align-items-content-justify-content">
              <div class="display-flex align-items-content-justify-content">
                <div class="d-grid gap-2 col-8 mx-auto">
                  <router-link
                    type="button"
                    class="btn btn-primary margin-15vh width-30-vh"
                    :to="'/LocationsDetails/' + location.Id"
                    >{{ location.Name }}</router-link
                  >
                </div>
              </div>
            </div>
          </div>
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
</div>
</template>
<script>
import ClansServices from '../../services/ClansServices';
import Pagination from '../Components/GenericComponent/Pagination.vue';
export default {
  name: "AllLocationsLayout",
  components: { Pagination },
  data() {
    return {
      width: 1400,
      allLocations: {},
      NbLocations: null,
      nav: {
        current: 0,
        pages: 0,
        step: 6,
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
          this.nav.step = 6;
        } else {
          this.nav.step = 4;
        }
        this.nav.pages = Math.ceil(this.NbLocations / this.nav.step);
      } catch (e) {
        console.log(e);
      }
    },
    async LocationPagination(page) {
      this.nav.current = page;
      if (window.innerWidth >= this.width) {
        this.nav.step = 6;
      } else {
        this.nav.step = 4;
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