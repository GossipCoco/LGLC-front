<template>
  <div
    class="dashboard-max-card-container border-none background-color-main-lineart card display-flex-column fiction-container overflowY-X-hiddencreate-chapter-card-container"
  >
    <CardHeader v-bind:Title="'Chapitre' + NextChapter" />
    <form
      class="create-character-form"
      @submit.stop.prevent="onSubmit"
      ref="uploadForm"
    >
      <InputTitle
        v-bind:Title="'Titre du chapitre'"
        @input-title="InputTitle"
      />
      <TextAreaComponent
        v-bind:Title="'Rédigez votre chapitre'"
        @input-content="getContent"
      />
      <div class="row">
        <LinkGenerateImage />
        <div class="col-4">
          <div class="mb-3">
            <label for="file" class="form-label text-white"
              >Image de couverture</label
            >
            <input
              type="file"
              class="form-control"
              @change="handleFileUpload"
            />
          </div>
        </div>
        <div class="col-4">
          <button type="button" class="btn btn-primary" @click="handleOk">
            Enregistrer
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-11"></div>
        <div class="col-1 btn-validate-container"></div>
      </div>
    </form>
  </div>
</template>
<script>
import FictionService from "../../../services/FictionService";
import CardHeader from "../../Components/GenericComponent/CardHeader.vue";
import InputTitle from "../../Components/FormComponent/InputTitle.vue";
import TextAreaComponent from "../../Components/FormComponent/TextAreaComponent.vue";
import LinkGenerateImage from "../../Components/FormComponent/LinkGenerateImage.vue";
import { resizeImage } from "../../../services/functions";

export default {
  name: "CreateChapter",
  components: { InputTitle, TextAreaComponent, CardHeader, LinkGenerateImage },
  props: ["NumberChapter"],
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
      Image: null,
      file: null, // Ajout de cette ligne pour stocker le fichier
    };
  },
  created() {
    this.fictionId = this.$route.params.id;
    this.GetLastChapterOfAFiction(this.$route.params.id);
  },
  methods: {
    getContent(e) {
      this.form.Content = e
        .split("\n")
        .filter((paragraph) => paragraph.trim() !== "") // Remove empty lines
        .map((paragraph) => `<p>${paragraph}</p>`)
        .join("");
      console.log(this.form.Content);
    },
    InputTitle(e) {
      console.log(e);
      this.form.Title = e;
    },
    handleFileUpload(event) {
      this.file = event.target.files[0];
      // Vérifier le type MIME pour les images acceptées
      const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/webp",
      ];
      if (!allowedTypes.includes(this.file.type)) {
        alert("Seuls les formats JPEG, PNG et WEBP sont acceptés.");
        return;
      }
      // Vérification du poids de l'image (5 Mo)
      if (this.file.size > 5 * 1024 * 1024) {
        alert("L'image dépasse la limite de 5 Mo.");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          // Redimensionner l'image si elle dépasse 1200px de largeur
          if (img.width > 1200) {
            resizeImage(img, 1920, this.file).then((resizedFile) => {
              this.file = resizedFile;
              this.sendFile();
            }).catch((error) => {
              console.error("Erreur lors du redimensionnement:", error);
            });
          } else {
            this.sendFile(); // Appel de l'envoi de fichier
          }
        };
      };
      reader.readAsDataURL(this.file);
    },
    sendFile() {
      const formData = new FormData();
      formData.append("image", this.file);
      this.handleOk(formData); // Envoi de l'image via la fonction UploadNewImage
    },
    handleOk(dataImage) {
      const formData = new FormData();
      formData.append(
        "Id",
        "Chapitre " + this.NextChapter + " - " + this.fictionId
      );
      formData.append(
        "Title",
        "Chapitre " + this.NextChapter + " - " + this.form.Title
      );
      formData.append("FictionId", this.fictionId);
      formData.append("NextChapterId", null);
      formData.append("Content", this.form.Content);
      formData.append("NumberChapter", this.NextChapter);
      formData.append("PrecedentChapterId", this.NextChapterofLastfiction);
      if (dataImage) {
        formData.append("image", dataImage);
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
            this.lastChapter = response.data.ob;
            this.NextChapterofLastfiction = response.data.ob.Id;
            this.form.PrecedentChapterId = response.data.ob.Id;
            this.NextChapter = this.lastChapter.NumberChapter + 1;
          } else {
            this.NextChapter = 1;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>