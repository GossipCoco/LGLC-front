<template>
  <div
    id="book-container"
    class="dashboard-max-card-container background-color-main-lineart flex-one card display-flex-column fiction-container"
  >
    <div>{{ book }}</div>
  </div>
</template>
<script>
import ArcBookService from "../../../services/ArcBookService";
export default {
  name: "OneBook",
  data() {
    return {
      url: null,
      book: {},
    };
  },
  created() {
    this.url = this.$route.params.id;
    this.GetBookByTitle(this.url);
  },
  methods: {
    GetBookByTitle(title) {
      ArcBookService.GetBookByTitle(title)
        .then((response) => {
          console.log(response.data.ob);
          this.book = response.data.ob;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>