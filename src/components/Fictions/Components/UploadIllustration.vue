<template>
  <div class="col-3">
    <div class="display-flex-column">
      <div class="mb-3">
        <input
          class="form-control"
          type="file"
          id="formFile"
          @change="handleFileUpload"
        />
      </div>
    </div>
  </div>
</template>
<script>
import FictionService from "../../../services/FictionService";
import { resizeImage } from "../../../services/functions"
export default {
  name: "UploadIllustration",
  props: ["IllustrationId", "IdFiction"],
  data() {
    return {
      image: null,
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
          if (img.width > 1920) {
            resizeImage(img, 1920, this.file).then((resizedFile) => {
              this.file = resizedFile;
              this.sendFile();
            }).catch((error) => {
              console.error("Erreur lors du redimensionnement:", error);
            });
          } else {
            this.file = file; // Si l'image est déjà sous la limite, on l'utilise telle quelle
            this.sendFile(); // Appel de l'envoi de fichier
          }
        };
      };
      reader.readAsDataURL(file);
    },    
    sendFile() {
      const formData = new FormData();
      formData.append("image", this.file);
        console.log(formData)
      this.UploadNewImage(this.IdFiction, formData); // Envoi de l'image via la fonction UploadNewImage
    },
    UploadNewImage(id, data) {
      FictionService.UploadFictionBackgroundIllustration(id, data)
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