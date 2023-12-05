<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <div class="profil-user-card card">
          <div class="card-body">
            <div class="avatar-container">
              <img :src="'/images/Avatars/' + avatar" />
            </div>
            <p class="card-text">
              {{ userInfo }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <div class="form-profil-user-card card">
          <div class="card-body">
            <div class="row">
              <div class="col-8">
                <label class="btn btn-default p-0" for="upload-avatar">
                  <input
                    id="upload-avatar"
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    ref="file"
                    @change="selectImage"
                  />
                </label>
              </div>
              <div class="col-4">
                <button
                  class="btn btn-success btn-sm float-right"
                  :disabled="!currentImage"
                  @click="upload"
                >
                  Choisir un avatar
                </button>
              </div>
            </div>
            <div class="row">
              <div v-if="currentImage" class="progress">
                <div
                  class="progress-bar progress-bar-info"
                  role="progressbar"
                  :aria-valuenow="progress"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  :style="{ width: progress + '%' }"
                >
                  {{ progress }}%
                </div>
              </div>

              <div v-if="previewImage">
                <div>
                  <img
                    class="preview my-3"
                    :src="previewImage"
                    alt=""
                    width="250px"
                  />
                </div>
              </div>

              <div v-if="message" class="alert alert-secondary" role="alert">
                {{ message }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>
  <script>
import UploadService from "../../services/UploadFilesService";
// import UserProfil from "./UserProfil.vue";
import UserService from "../../services/UserService";
export default {
  name: "UserProfil",
  inject: ["user"],
  components: {
    // UserProfil,
  },
  data() {
    return {
      usrId: this.user,
      userInfo: null,
      avatar: null,
      currentImage: undefined,
      previewImage: undefined,
      progress: 0,
      message: "",
      imageInfos: [],
    };
  },
  created() {
    this.GetUserById(this.usrId);
  },
  methods: {
    GetUserById(userId) {
      UserService.getUserById(userId)
        .then((response) => {
          this.userInfo = response.data.ob;
          this.avatar = this.userInfo.Avatar;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    generateCapturePhotoName() {
      return Math.random().toString(36).substring(2, 15);
    },
    selectImage() {
      this.currentImage = this.$refs.file.files.item(0);
      this.previewImage = URL.createObjectURL(this.currentImage);
      this.progress = 0;
      this.message = "";
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