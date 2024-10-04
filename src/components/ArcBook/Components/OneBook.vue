<template>
  <div
    id="book-container"
    class="dashboard-max-card-container background-color-main-lineart flex-one card display-flex-column fiction-container"
  >
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
          <div class="white-text" v-html="book.Summary"></div>
          <div class="row">
            <div class="col-2"
              v-for="(characters, index) in book.BookCharacters"
              :key="index"
            >
              <span class="white-text">{{ characters.Character.CurrentName }}</span><br />
              <img
                class="height-auto width-100-percent"
                :src="characters.Character.Image"
                :alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ArcBookService from "../../../services/ArcBookService";
import CardHeader from "../../Components/GenericComponent/CardHeader.vue";
export default {
  name: "OneBook",
  components: { CardHeader },
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