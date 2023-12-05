<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <div class="profil-user-card card">
          <div class="card-body">
            <div class="avatar-container">
              <img :src="'/images/Avatars/' + userInfo.Avatar" />
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
        <!-- <user-profil /> -->
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>
  <script>
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
    };
  },
  created() {
    console.log(this.usrId);
    this.GetUserById(this.usrId);
  },
  methods: {
    GetUserById(userId) {
      UserService.getUserById(userId)
        .then((response) => {
          this.userInfo = response.data.ob;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>