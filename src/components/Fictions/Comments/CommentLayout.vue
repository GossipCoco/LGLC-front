<template>
    <div id="comment-container" class="fiction-globale-container card fiction-container">
      <div
        class="message"
        v-for="(comment, index) in allComments"
        :key="index"
        :class="{ 'message--right': index % 2 !== 0 }"
      >
        <div class="message__outer">
          <div class="message__avatar">            
            <img :src="'/images/Avatars/' + comment.User.avatar" class="card-img-top" alt="avatar">
          </div>
          <div class="message__inner">
            <div class="message__bubble">
              <p>{{ comment.Content }}</p>
            </div>
            <div class="message__actions">
              <!-- Ajoutez des actions comme des boutons ici si nécessaire -->
            </div>
          </div>
          <div class="message__status">
            <!-- Ajoutez un statut ici si nécessaire -->
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
  