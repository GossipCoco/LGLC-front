<template>
  <div class="opacity-container display-flex-row">
    <div class="summary-container overflowY-auto overflowX-hidden">
      <div class="row">
        <div class="col-2">
          <AddANewCharacterModal
            v-if="AuthorId === usrCurrent"
            v-bind:IdGame="IdGame"
          />
        </div>
        <div class="col-2">
          <EditSummary v-bind:FictionId="IdFiction" v-bind:Summary="Summary" />
        </div>
        <div class="col-3">
          <div class="display-flex-column">
            <div class="mb-3">
              <input
                class="form-control"
                type="file"
                id="formFile"
                @change="handleFileUploadIllustration"
              />
            </div>
          </div>
        </div>
        <div class="col-1"></div>
        <div class="col-4">          
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
      <div class="row">
        <div class="col-2">
          <div
            class="display-flex-column image-fiction-container overflowY-X-hidden background-size-cover"
            v-bind:style="{
              backgroundImage: 'url(' + backgroundImageFiction + ')',
            }"
          ></div>
          <div class="display-flex-column">
            <div class="mb-3">
              <label for="formFile" class="form-label">Choisir une image</label>
              <input
                class="form-control"
                type="file"
                id="formFile"
                @change="handleFileUpload"
              />
            </div>
          </div>
          <div class="display-flex-column all-characters-of-fiction">
            <CarrouselCharacter v-bind:Characters="Characters" />
            <CarrouselCharacter v-bind:Characters="OCCharacters" />
          </div>
        </div>
        <div class="col-6"><p class="text-align-justify overflowY-auto summary-height-container" v-html="Summary"></p></div>
        <div class="col-4">
          <div class="display-flex-column flex-one all-chapters-list-container">
            <ul class="list-group">
              <li
                class="list-group-item"
                v-for="(chapter, index) in fiction.Chapters"
                :key="index"
              >
                <router-link
                  class="dropdown-item roboto"
                  :to="'/chapter/' + chapter.Title"
                >
                  {{ chapter.Title }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>        
    </div>
    </div>
  </div>
</template>

<script>
import FictionService from "../../../services/FictionService";
import EditSummary from "../FictionsForm/EditSummary.vue";
import AddANewCharacterModal from "./AddANewCharacterModal.vue";
import CarrouselCharacter from "./CarrouselCharacter.vue";
import pica from "pica"; // Importer Pica

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
    "backgroundImageFiction",
    "Characters",
    "OCCharacters"
  ],
  components: { EditSummary, CarrouselCharacter, AddANewCharacterModal },
  data() {
    return {
      NewImage: null,
      currentImage: undefined,
      previewImage: undefined,
      file: null, // Ajout de cette ligne pour stocker le fichier
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];

      // Vérifier le type MIME pour les images acceptées
      const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/webp",
      ];
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
      const canvas = document.createElement("canvas");
      const p = pica();

      // On garde le ratio en redimensionnant la largeur à 1200px
      const scaleFactor = maxWidth / img.width;
      canvas.width = maxWidth;
      canvas.height = img.height * scaleFactor;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Utiliser Pica pour redimensionner et convertir le canvas en blob (fichier image)
      p.resize(canvas, canvas, {
        quality: 3,
        alpha: true,
      }).then(() => {
        p.toBlob(canvas, originalFile.type, 0.9).then((blob) => {
          // On garde le nom de l'image d'origine avec blob et le type d'image d'origine
          this.file = new File([blob], originalFile.name, {
            type: originalFile.type,
          });
          console.log("Image redimensionnée:", this.file);
          this.sendFile(); // Appel de l'envoi de fichier après redimensionnement
        });
      });
    },
    sendFile() {
      const formData = new FormData();
      formData.append("image", this.file);

      this.UploadNewImage(this.IdFiction, formData); // Envoi de l'image via la fonction UploadNewImage
    },
    UploadNewImage(id, data) {
      FictionService.UpdateFictionIllustration(id, data)
        .then((response) => {
          console.log(response);
          if (response) {
            location.reload();
          } else {
            alert("Problème d'upload");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>