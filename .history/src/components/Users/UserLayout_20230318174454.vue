<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        
      </div>
      <div class="col">
        <div class="profil-user-card card">
          <div class="card-body">
            <h5 class="card-title"></h5>
            <h6 class="card-subtitle mb-2 text-muted"></h6>
            <p class="card-text">
              {{ userInfo }}
            </p>
          </div>
        </div>
      </div>
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