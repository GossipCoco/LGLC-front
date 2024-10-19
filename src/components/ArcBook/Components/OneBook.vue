<template>
  <div id="book-container" class="dashboard-max-card-container border-none background-color-main-lineart flex-one card display-flex-column fiction-container">
    <CardHeader v-bind:Title="book.Title" />
    <div class="card-body">
      <div class="row">
        <div class="col-2">
          <img
            :src="book.Image"
            :alt="book.Title"
            class="image-book"
          />
        </div>
        <div class="col-10">
          <div class="white-text text-align-justify" v-html="book.Summary"></div>
          <CharactersByBook v-bind:characters="book.BookCharacters" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ArcBookService from "../../../services/ArcBookService";
import CardHeader from "../../Components/GenericComponent/CardHeader.vue";
import CharactersByBook from "./BookComponent/CharactersByBook.vue";
export default {
  name: "OneBook",
  components: { CardHeader, CharactersByBook },
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