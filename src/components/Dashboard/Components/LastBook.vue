<template>
  <div class="row top-left-dashboard">
  <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 card-global">
    <div class="card background-lineart border-none fiction-card last-book-container  width-100-vh  height-40-vh margin-0-0-0-1vh">
      <TitleHeaderDashboard
        v-bind:title="'Dernier roman paru'"
        v-bind:type="'chapters'"
      />
      <arc-book-summary
        v-bind:route="'/BookByTitle/'"
        v-bind:Id="lastBook.Title"
        v-bind:Title="lastBook.Title"
        v-bind:Image="lastBook.Image"
        v-bind:Summary="lastBook.Summary"
      />
    </div>
  </div>
</div>
</template>
<script>
import ArcBookService from "../../../services/ArcBookService";
import TitleHeaderDashboard from "../../Components/SpecificComponent/TitleHeaderDashboard.vue";
import ArcBookSummary from "../ComponentGeneric/ArcBookSummary.vue";
export default {
  name: "LastBook",
  components: { TitleHeaderDashboard, ArcBookSummary },
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