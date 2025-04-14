<template>
  <div class="Comment-icon">
    <div class="display-flex-column">
      <div class="flex-one display-flex-column">
        <router-link :to="'/CommentByFiction/' + Title" class="btn btn-primary">
          Lire les commentaire
        </router-link>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#commentFanfiction"
        >
          Laisser un commentaire
        </button>
        <div
          class="modal fade"
          id="commentFanfiction"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl">
            <div class="modal-content background-color-main-lineart">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Commenter "{{ fanfiction }}" ({{ fictionId }})
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form @submit.stop.prevent="onSubmit">
                  <textarea
                    v-model="form.Content"
                    class="form-control"
                    id="Comment"
                    rows="12"
                    @change="getData"
                  ></textarea>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Fermer
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  v-on:click="handleOk"
                >
                  Envoyer le commentaire
                </button>
              </div>
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
  name: "CreateCommentModal",
  props: [
    "fanfiction",
    "chapterTitle",
    "fictionId",
    "chapterId",
    "Title",
    "rating",
  ],
  data() {
    return {
      form: {
        DateCreation: new Date().toISOString(),
        UserId: this.$store.state.auth.user.usrID,
        Content: null,
        FictionId: null,
        ChapterId: null,
      },
    };
  },
  created() {
    this.form.FictionId = this.fictionId;
    this.form.ChapterId = this.ChapterId;
    console.log(this.form);
  },
  methods: {
    getData() {
      console.log(this.form.Review);
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.onSubmit();
    },
    onSubmit() {
      console.log(this.fictionId + " - " + this.chapterId + " ");
      this.form.FictionId = this.fictionId;
      this.form.ChapterId = this.chapterId;
      console.log(this.form);
      FictionService.CreateCommentForAFiction(this.fictionId, this.form)
        .then((response) => {
          console.log(response);
          this.$router.push({
            path: "/CommentByFiction/" + this.fanfiction,
          });
          location.reload();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>