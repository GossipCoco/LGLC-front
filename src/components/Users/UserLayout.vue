<template>
  <div class="container-fluid height-100 profil-user-container">
    <div class="row">
      <div class="col-12">
        <div class="flex-one profil-user-card background-color-main-lineart card">
          <div class="card-body display-flex-row">
            <div class="display-flex-column align-items-content-justify-content avatar-container height-80-vh width-10-vh border-100">
              <h2>{{ Role }}</h2>
              <img class="height-30-vh align-items-content-justify-content border-100" :src="'/images/Avatars/' + form.Avatar" /><br>
              <label class="btn btn-default p-0" for="upload-avatar">
                <input id="upload-avatar" class="text-white" type="file" accept="image/png, image/jpeg, image/jpg, image/webp" ref="file"
                  @change="selectImage" />
              </label><br><br>
              <button class="btn btn-success btn-sm float-right" :disabled="!currentImage" @click="upload">
                Choisir un avatar
              </button>
            </div>
            <div class="flex-one">
              <div class="card-text">
                <div class="row">
                  <form @submit.prevent="edit">
                    <div class="col">
                      <div class="mb-3">
                        <input type="text" v-model="form.LastName" class="form-control">
                      </div>
                    </div>
                    <div class="col">
                      <div class="mb-3">
                        <input type="text" v-model="form.FirstName" class="form-control">
                      </div>
                    </div>
                    <div class="col">
                      <div class="mb-3">
                        <input type="date" v-model="form.Birthday" class="form-control">
                      </div>
                    </div>
                    <div class="col">
                      <div class="mb-3">
                        <input type="text" v-model="form.Login" class="form-control">
                      </div>
                    </div>
                    <div class="col">
                      <div class="mb-3">
                        <input type="email" v-model="form.Email" class="form-control">
                      </div>
                    </div>
                    <div class="col">
                      <div class="mb-3">
                        <input type="password" v-model="form.Pwd" class="form-control">
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Modifier</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UploadService from "../../services/UploadFilesService";
import UserService from "../../services/UserService";
export default {
  name: "UserProfil",
  inject: ["user"],
  data() {
    return {
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
  created() {
    this.GetUserById(this.usrId);
  },
  methods: {
    edit() {
      console.log(this.form)
    },

    GetUserById(e) {
      UserService.getUserById(e)
        .then((response) => {
          this.userInfo = response.data.ob
          this.form.Avatar = this.userInfo.Avatar
          this.form.Email = this.userInfo.Email
          this.form.Pwd = this.userInfo.Password
          this.form.Login = this.userInfo.Login
          this.form.LastName = this.userInfo.LastName
          this.form.FirstName = this.userInfo.FirstName
          this.form.Birthday = this.userInfo.Birthday
          this.form.Login = this.userInfo.Login
          this.Role = this.userInfo.Role.Name
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