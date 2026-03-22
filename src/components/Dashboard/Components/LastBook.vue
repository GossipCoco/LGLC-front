<template>
  <div class="card background-lineart02 border-none fiction-card last-book-container height-40-vh margin-0-0-0-1vh">
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