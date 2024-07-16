<template>
  <div
    id="comment-container"
    class="fiction-globale-container card fiction-container"
  >
    <div class="message" v-for="(comment, index) in allComments" :key="index">
      <div class="message__outer"><p>{{ comment.Content }}</p>
        <div class="message__avatar"></div>
        <div class="message__inner">
          <div class="message__bubble"></div>
          <div class="message__actions"></div>
          <div class="message__spacer"></div>
        </div>
        <div class="message__status"></div>
      </div>
    </div>
    <!-- <div v-for="(comment, index) in allComments" :key="index">
      <p>{{ comment }}</p>
    </div> -->
  </div>
</template>
<script>
import FictionService from "../../../services/FictionService";
export default {
  name: "CommentLayout",
  data() {
    return {
      allComments: {},
      url: null,
      filters: [],
      showspinner: false,
      nav: {
        current: 0,
        pages: 0,
        step: 6,
      },
    };
  },
  created() {
    this.url = this.$route.params.id;
    this.GetAllCommentsByFiction(this.url, this.nav);
  },
  methods: {
    GetAllCommentsByFiction(id, nav) {
      console.log(id);
      FictionService.GetAllCommentsByFiction(id, nav)
        .then((response) => {
          console.log(response);
          this.allComments = response.data.ob;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>