<template>
  <div id="comment-container" class="fiction-globale-container card fiction-container">

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
    GetAllCommentsByFiction(id,nav) {
        console.log(id)
      FictionService.GetAllCommentsByFiction(id, nav)
      .then((response) => {
        console.log(response)
      })
      .catch(err =>
        console.log(err)
      )
    },
  },
};
</script>