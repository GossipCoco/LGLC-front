<template>
  <div id="edit-chapter-contain">
    <div
      class="character-details-chatper background-color-main-lineart card mb-3 display-flex-column fiction-container"
    >
      <div class="card-body height-80">
        <form
          class="create-character-form width-180-vh"
          @submit.stop.prevent="handleOk"
          ref="uploadForm"
        >
          <div class="row">
            <div class="col-12">
              <div class="mb-12">
                <label for="Content" class="form-label text-white">Votre Chapitre {{ form.Name }}</label>
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
          <div class="row">
            <div class="col-11"></div>
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
          console.log(response)
          this.chapter = response.data.ob
          this.form.Content = this.chapter.Content;
          this.Author = this.chapter.Fiction.UserId;
          this.AuthorId = this.chapter.Fiction.UserId;
          this.form.Id = this.chapter.Id
          this.form.Title = this.chapter.Title
          //this.typeText(this.chapter.Content);
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