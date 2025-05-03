<template>
  <div class="one-book-container-wrapper margin-2vh-0">
    <div class="display-flex-row flex-one">
      <card-image-background v-bind:Image="background">
        <img :src="book.Image" :alt="book.Title" class="image-book border-radius-100 height-30-vh" />
      </card-image-background>
      <div id="book-container" class="border-none background-color-main-lineart flex-one card display-flex-column height-90-vh padding-2-vh">
        <CardHeader v-bind:Title="book.Title">
          <router-link to="/ArcBookLayout" class="btn btn-primary">Retour à la liste des arcs & romans</router-link>
        </CardHeader>
        <div class="card-body width-120-vh height-80-vh padding-2-vh margin-2vh-0">
          <div class="row">
            <div class="col-12">
              <div
                class="text-white text-align-justify"
                v-html="book.Summary"
              ></div>
            </div>
          </div>
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
import cardImageBackground from "../../Components/GenericComponent/cardImageBackground.vue";
export default {
  name: "OneBook",
  components: { CardHeader, CharactersByBook, cardImageBackground },
  data() {
    return {
      url: null,
      book: {},
      background: null
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
          this.background = response.data.ob.IllustrationOne

        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>