<template>
  <div id="edit-chapter-contain" class="width-180-vh height-80vh margin-4vh ">
    <div
      class="width-180-vh height-80 background-color-main-lineart border-none 
            card mb-3 display-flex-column padding-0 margin-4vh"
    >
      <div class="card-body width-170-vh height-80">
        <form
          class="create-character-form width-160-vh"
          @submit.stop.prevent="handleOk"
          ref="uploadForm"
        >
          <div class="row">
            <div class="col-12">
              <div class="mb-12">
                <label for="Content" class="form-label text-white">Editer le {{ form.Title }}</label>
                <textarea
                  v-model="form.Content"
                  class="form-control"
                  id="Content"
                  rows="12"                  
                >              
              </textarea>
              </div>
            </div>
          </div>
          <div class="row margin-4-0-0-0">
            <div class="col-9"></div>
            <div class="col-2">
              <router-link :to="'/fiction/' + Back" class="btn btn-primary">
                    Retour à la fiction
              </router-link>
            </div>
            <div class="col-1 btn-validate-container">
              <button type="button" class="btn btn-primary" @click="handleOk">
                Enregistrer
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import FictionService from "../../../services/FictionService";
export default {
  name: "EditChapter",
  data() {
    return {
      form: {
        Id: null,
        Title: null,
        Content: null,
        Back: null,       
      },
    };
  },
  created() {
    this.GetAChapterById(this.$route.params.id);
    console.log(this.$route.params.id)
  },
  methods: {
    GetAChapterById(id) {
      FictionService.GetAChapterById(id)
        .then((response) => {
          console.log(response.data.ob)
          this.Back = response.data.ob.Fiction.Title
          this.chapter = response.data.ob
          this.form.Content = this.chapter.Content;
          this.Author = this.chapter.Fiction.UserId;
          this.AuthorId = this.chapter.Fiction.UserId;
          this.form.Id = this.chapter.Id
          this.form.Title = this.chapter.Title
        })
        .catch((e) => {
          console.log(e);
        });
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      console.log(this.form);
      this.onSubmit();
    },
    onSubmit() {
      console.log(this.form);
      const paragraphs = this.form.Content
      .split(/\n+/)
      .map((paragraph) => `<p>${paragraph.trim()}</p>`)
      .join("");
    
      this.form.Content = paragraphs;
      console.log(this.form.Content)
      this.EditChapter(this.AuthorId, this.form)

    },
    EditChapter(id, form){
      FictionService.EditChapter(id, form)
      .then(() => {
        this.$router.push({
            path:'/chapter/' + this.form.Title
          });
      })      
      .catch((e) => {
          console.log(e);
          this.$router.push({
            path:'/chapter/' + this.form.Title
          });
        });
    }
  },
};
</script>