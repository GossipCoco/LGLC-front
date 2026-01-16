<template>
  <div
    id="arc-book-container"
    class="height-80-vh border-none background-color-main-lineart flex-one card display-flex-column
    margin-0-0-10vh-0"
  >
    <CardHeader v-bind:Title="'Les romans de La Guerre des Clans'" />
    <div class="card-body padding-2-vh height-80-vh">
      <div class="row book-container overflowY-scroll overflowX-hidden height-80-vh">
        <div class="col-12 col-sm-12 col-md-12">
          <div class="apland-timeline-area height-70-vh">
            <div v-for="(arc, index) in allBooks" :key="index">
              <TimeLayout v-bind:arc="arc" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardHeader from "../Components/GenericComponent/CardHeader.vue";
import TimeLayout from "./Components/TimeLayout.vue";
import ArcBookService from "../../services/ArcBookService";
export default {
  name: "ArcBookLayout",
  components: { CardHeader, TimeLayout },
  data() {
    return {
      allBooks: {},
      filters: [],
      nav: {
        current: 0,
        pages: 0,
        step: 6,
      },
    };
  },
  created() {
    // this.getAllBooks(this.nav)
    this.GetAllArcsWithBooks(this.nav);
  },
  methods: {
    GetAllArcsWithBooks(nav) {
      ArcBookService.GetAllArcsWithBooks(nav)
        .then((response) => {
          console.log(response.data.ob);
          this.allBooks = response.data.ob;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getAllBooks(nav) {
      ArcBookService.getAllBooks(nav)
        .then((response) => {
          console.log(response.data.ob);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>