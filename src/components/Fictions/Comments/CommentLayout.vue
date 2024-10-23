<template>
  <div
    id="comment-container"
    class="fiction-globale-container text-white card display-flex-column fiction-container  overflowY-X-hiddenopensans-text"
  >
    <div class="row">
      <div class="col-12">
        <p class="card-text text-align-justify">
              <router-link
                type="button"
                class="btn btn-primary"
                :to="'/fiction/' + url"
                >Revnevnir à la fiction</router-link
              >
            </p>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div
          class="message"
          v-for="(comment, index) in allComments"
          :key="index"
          :class="{ 'message--right': index % 2 !== 0 }"
        >
          <div class="message__outer">
            <div class="message__avatar">
              <img
                :src="'/images/Avatars/' + comment.User.avatar"
                class="card-img-top"
                alt="avatar"
              /><br />
              <div class="message__status">
                <p>{{ comment.User.FirstName }} {{ comment.User.LastName }}</p>
              </div>
            </div>
            <div class="message__inner">
              <div class="message__bubble">
                <p class="text-align-justify">{{ comment.Content }}</p>
              </div>
              <div class="message__actions"></div>
            </div>
            <div class="message__status">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      avatar: null,
      nav: {
        current: 0,
        pages: 0,
        step: 6,
      },
    };
  },
  created() {
    this.url = this.$route.params.id;
    console.log(this.url);
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
  