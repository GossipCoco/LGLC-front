<template>
  <div class="opacity-container display-flex-row">
    <div class="summary-container">
      <div class="row">
        <div class="col-3">
          <EditSummary v-bind:FictionId="IdFiction" v-bind:Summary="Summary" />
        </div>
        <div class="col-4">
          <AddANewCharacterModal
            v-if="AuthorId === usrCurrent"
            v-bind:IdGame="IdGame"
          />
        </div>
        <div class="col-5">
          <div class="display-flex-column">
            <p>
              <label class="btn btn-default p-0" for="upload-illustration fiction">
                <input
                  id="upload-illustration fiction"
                  type="file"
                  accept="image/png, image/jpeg, image/jpg, image/webp"
                  ref="file"
                  @change="handleFileUpload"
                />
              </label>
            </p>
          </div>
        </div>
      </div>
      <p class="text-align-justify" v-html="Summary"></p>
    </div>
    <div class="display-flex-column flex-one all-chapters-list-container">
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="(chapter, index) in fiction.Chapters"
          :key="index"
        >
          <router-link class="dropdown-item roboto" :to="'/chapter/' + chapter.Title">
            {{ chapter.Title }}
          </router-link>
        </li>
      </ul>
      <div class="d-grid gap-2">
        <router-link
          type="button"
          class="btn btn-primary btn-lg"
          v-if="AuthorId === usrCurrent"
          :to="'/fiction/createChapter/' + IdFiction"
          v-bind="lastChap"
        >
          Créer le chapitre {{ lastChap }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import FictionService from "../../../services/FictionService";
import EditSummary from "../FictionsForm/EditSummary.vue";
import AddANewCharacterModal from "./AddANewCharacterModal.vue";
import pica from 'pica'; // Importer Pica

export default {
  name: "ListOfChapters",
  props: [
    "AuthorId",
    "usrCurrent",
    "IdFiction",
    "lastChap",
    "fiction",
    "Summary",
    "IdGame",
  ],
  components: { EditSummary, AddANewCharacterModal },
  data() {
    return {
      NewImage: null,
      currentImage: undefined,
      previewImage: undefined,
      file: null, // Ajout de cette ligne pour stocker le fichier
    };
  },
  methods: {
    selectImage() {
      this.currentImage = this.$refs.file.files.item(0);
      this.previewImage = URL.createObjectURL(this.currentImage);
      this.progress = 0;
      this.message = "";
    },
    handleFileUpload(event) {
      const file = event.target.files[0];

      // Vérifier le type MIME pour les images acceptées
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        alert("Seuls les formats JPEG, PNG et WEBP sont acceptés.");
        return;
      }

      // Vérification du poids de l'image (5 Mo)
      if (file.size > 5 * 1024 * 1024) {
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
            this.resizeImage(img, 1200, file);
          } else {
            this.file = file; // Si l'image est déjà sous la limite, on l'utilise telle quelle
            this.sendFile(); // Appel de l'envoi de fichier
          }
        };
      };
      reader.readAsDataURL(file);
    },
    resizeImage(img, maxWidth, originalFile) {
      const canvas = document.createElement('canvas');
      const p = pica();

      // On garde le ratio en redimensionnant la largeur à 1200px
      const scaleFactor = maxWidth / img.width;
      canvas.width = maxWidth;
      canvas.height = img.height * scaleFactor;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Utiliser Pica pour redimensionner et convertir le canvas en blob (fichier image)
      p.resize(canvas, canvas, {
        quality: 3,
        alpha: true,
      }).then(() => {
        p.toBlob(canvas, originalFile.type, 0.90).then((blob) => {
          // On garde le nom de l'image d'origine avec blob et le type d'image d'origine
          this.file = new File([blob], originalFile.name, { type: originalFile.type });
          console.log("Image redimensionnée:", this.file);
          this.sendFile(); // Appel de l'envoi de fichier après redimensionnement
        });
      });
    },
    sendFile() {
      const formData = new FormData();
      formData.append('image', this.file);

      this.UploadNewImage(this.IdFiction, formData); // Envoi de l'image via la fonction UploadNewImage
    },
    UploadNewImage(id, data) {
      FictionService.UpdateFictionIllustration(id, data)
      .then((response) => {
            console.log(response)
            if(response){
              location.reload()
            }
            else{
              alert("Problème d'upload")
            }
          })
          .catch((e) => {
            console.log(e);
          });
    },
  },
};
</script>