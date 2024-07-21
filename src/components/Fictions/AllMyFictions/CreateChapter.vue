<template>
  <div class="dashboard-max-card-container card fiction-container">
    <CardHeader v-bind:Title="'Chapitre' + NextChapter" />
    <form class="create-character-form" @submit.stop.prevent="onSubmit" ref="uploadForm">
      <div class="row">
        <div class="col-12">
          <div class="mb-3">
            <label for="Title" class="form-label">Titre du chapitre</label>
            <input id="Title" type="text" class="form-control" v-model="form.Title" />
          </div>
        </div>
        <div class="col-12">
          <div class="mb-3">
            <label for="Content" class="form-label">Votre histoire</label>
            <textarea v-model="form.Content" class="form-control" id="Content" rows="12"></textarea>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="mb-3">
            Générer une image avec
            <div class="logo-wrapper-contain">
              <div class="logo">
                <router-link to="https://chatgpt.com/"><img src="/images/Logos/ChatGPT-Logo.png" /></router-link>
              </div>
              <div class="logo">
                <router-link to="https://copilot.microsoft.com"><img
                    src="/images/Logos/copilot-logo-0.png" /></router-link>
              </div>
              <div class="logo">
                <router-link to="https://firefly.adobe.com/"><img
                    src="/images/Logos/adobe-firefly5419.logowik.com.webp" /></router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <label for="file" class="form-label">Image de couverture</label>
            <input type="file" class="form-control" @change="handleFileUpload" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-11"></div>
        <div class="col-1  btn-validate-container">
          <button type="button" class="btn btn-primary" @click="handleOk">Enregistrer</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import FictionService from '../../../services/FictionService';
import CardHeader from '../../Components/GenericComponent/CardHeader.vue';
export default {
  name: "CreateChapter",
  components:{CardHeader},
  props: ['NumberChapter'],
  data() {
    return {
      userCurrent: this.$store.state.auth.user.usrID,
      fictionId: null,
      lastChapter: {},
      NextChapter: null,
      NextChapterofLastfiction: null,
      PrecedentChapterId: null,
      form: {
        Id: null,
        Title: null,
        Content: null,
        NumberChapter: null,
        PrecedentChapterId: null,
      },
      Image: null
    }
  },
  created() {
    this.fictionId = this.$route.params.id
    this.GetLastChapterOfAFiction(this.$route.params.id)
  },
  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0];
    },
    handleOk() {
      const formattedText = this.form.Content
        .split('\n')
        .filter(paragraph => paragraph.trim() !== '') // Remove empty lines
        .map(paragraph => `<p style="text-align: justify">${paragraph}</p>`)
        .join('');
      this.form.Content = formattedText
      const formData = new FormData();
      formData.append('Id', 'Chapitre ' + this.NextChapter + ' - ' + this.fictionId);
      formData.append('Title', 'Chapitre ' + this.NextChapter + ' - ' + this.form.Title);
      formData.append('FictionId', this.fictionId)
      formData.append('NextChapterId', null)
      formData.append('Content', this.form.Content)
      formData.append('NumberChapter', this.NextChapter)
      formData.append('PrecedentChapterId', this.NextChapterofLastfiction)
      if (this.file) {
        formData.append('image', this.file);
      }
      this.CreateANewChapter(this.fictionId, formData);
    },
    CreateANewChapter(fictionId, data) {
      FictionService.CreateANewChapter(fictionId, data)
        .then((response) => {
          if (response) {
            this.$router.push({ path: "/chapter/" + this.form.Title });
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    GetLastChapterOfAFiction(id) {
      FictionService.GetLastChapterOfAFiction(id)
        .then((response) => {
          if (response.data.ob) {
            this.lastChapter = response.data.ob
            this.NextChapterofLastfiction = response.data.ob.Id
            this.form.PrecedentChapterId = response.data.ob.Id
            this.NextChapter = this.lastChapter.NumberChapter + 1
          } else {
            this.NextChapter = 1
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
};
</script>