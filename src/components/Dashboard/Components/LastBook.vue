<template>
  <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 card-global">
    <div class="card background-lineart border-none fiction-card last-book-container">
      <TitleHeaderDashboard
        v-bind:title="'Dernier roman paru'"
        v-bind:type="'chapters'"
      />
      <div class="card-body last-chapter-card text-white">
        <h5 class="text-white">
          <router-link
              class="text-white poppins-text"
              :to="'/BookByTitle/' + lastBook.Title"
              >
              {{ lastBook.Title }}</router-link>
          

        </h5>
        <div class="summary-book-dashboard display-flex-row align-items-content-justify-content">
          <img :src="lastBook.Image" width="20%" />
          <span class="text-white text-align-justify overflowY-scroll summmary-book-height-dashboard poppins-text text-white" v-html="lastBook.Summary"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ArcBookService from "../../../services/ArcBookService";
import TitleHeaderDashboard from "../../Components/SpecificComponent/TitleHeaderDashboard.vue";
export default {
  name: "LastBook",
  components: { TitleHeaderDashboard },
  data() {
    return {
      lastBook: {},
    };
  },
  created() {
    this.GetLastPublishedBook();
  },
  methods: {
    GetLastPublishedBook() {
      ArcBookService.GetLastPublishedBook()
        .then((response) => {
          this.lastBook = response.data.ob;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>