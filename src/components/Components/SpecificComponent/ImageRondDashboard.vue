<template>
  <div class="avatar-container" v-if="edit === true">
    <div
      class="avatar-wrapper width-10-vh"
      @mouseenter="showEditIcon = true"
      @mouseleave="showEditIcon = false"
      @click="triggerFileInput"
    >
      <!-- Avatar actuel -->
      <img v-if="!showspinner"  loading="lazy"  :src="src" :alt="alt" :class="'display-flex-column;' + classe" />

      <!-- Icône "+" affiché au survol -->
      <div v-if="showEditIcon" class="edit-overlay display-flex align-items-content-justify-content">
        <i class="fa fa-plus"></i>
      </div>
    </div>
    <!-- Input file masqué -->
    <input
      type="file"
      id="upload-avatar"
      class="file-input"
      accept="image/png, image/jpeg, image/jpg, image/webp"
      ref="file"
      @change="selectImage"
    />
  </div>
  <div class="rond-image-illustration" v-else>
    <img v-if="!showspinner" :src="src" :alt="alt" :class="'display-flex-column;' + classe" />
  </div>
</template>
<script>
import UploadService from "../../../services/UploadFilesService";
export default {
  name: "ImageRondDashboard",
  props: ["src", "alt", "classe", "edit"],
  data() {
    return {
      showspinner: false,
      showEditIcon: false, // Gérer l'affichage de l'icône "+"
      usrId: this.$store.state.auth.user.usrID,
      form: {
        Avatar: null,
        Email: null,
        Login: null,
        LastName: null,
        FirstName: null,
        Birthday: null,
        Pwd: null,
        Role: null,
      },
      userInfo: null,
      currentImage: undefined,
      previewImage: undefined,
      progress: 0,
      message: "",
      imageInfos: [],
    };
  },
  methods: {
    // Ouvre l'input file quand on clique sur l'avatar
    triggerFileInput() {
      this.$refs.file.click();
    },

    selectImage() {
      this.currentImage = this.$refs.file.files.item(0);
      this.previewImage = URL.createObjectURL(this.currentImage);
      this.progress = 0;
      this.message = "";
      this.upload();
    },

    upload() {
      this.progress = 0;
      UploadService.uploadAvatar(this.currentImage, this.usrId, (event) => {
        this.progress = Math.round((100 * event.loaded) / event.total);
      })
        .then((response) => {
          this.message = response.data.message;
          return UploadService.getFiles();
        })
        .then((images) => {
          this.imageInfos = images.data;
          location.reload();
        })
        .catch((err) => {
          this.progress = 0;
          this.message = "Could not upload the image! " + err;
          this.currentImage = undefined;
        });
    },
  },
};
</script>