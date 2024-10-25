<template>
  <div class="col-3">
    <div class="display-flex-column">
        <!-- {{ IdFiction }} -->
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
import pica from "pica";
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