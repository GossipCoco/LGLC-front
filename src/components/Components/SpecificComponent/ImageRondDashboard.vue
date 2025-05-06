<template>
  <div class="avatar-container width-12-vh padding-2-vh height-10-vh border-radius-50"  v-if="edit === true">
    <div
      class="avatar-wrapper height-10-vh rond-image-illustration
      border-radius-100 avatar-profil-container width-12-vh"
      @mouseenter="showEditIcon = true"
      @mouseleave="showEditIcon = false"
      @click="triggerFileInput"
    >
      <!-- Avatar actuel -->
      <img v-if="!showspinner"  loading="lazy"  :src="src" :alt="alt" :class="'border-radius-100 display-flex-column margin-0-0-0-2vh height-10-vh width-10-vh ' + classe" />

      <!-- Icône "+" affiché au survol -->
      <div v-if="showEditIcon" class="edit-overlay border-radius-50 display-flex
      align-items-content-justify-content">
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
  <div class="rond-image-illustration border-radius-100 avatar-profil-container" v-else>
    <img v-if="!showspinner" :src="src" :alt="alt" class="illustratrion-fiction-rond-containter width-9v-vh-height-9v-vh border-radius-100 display-flex-column"  />
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
      UploadService.uploadAvatar(this.usrId, this.currentImage,  (event) => {
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