<template>
  <div class="container-fluid">
    <div class="row height-100-vh">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-3 col-xxl-3">
        <profil-component />
      </div>
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-9 col-xxl-9">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <title-welcome-component></title-welcome-component>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-4 col-xxl-4">
                <last-fictions-component />
              </div>
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-4 col-xxl-4">
                <last-chapters />
              </div>
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-4 col-xxl-4">
                <my-clubs-components />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProfilComponent from "./GenericComponent/ProfilComponent.vue";
import TitleWelcomeComponent from "./GenericComponent/TitleWelcomeComponent.vue";
import LastFictionsComponent from "./GenericComponent/LastFictionsComponent.vue";
import LastChapters from "./GenericComponent/LastChapters.vue";
import MyClubsComponents from "./GenericComponent/MyClubsComponents.vue";
export default {
  name: "WelcomeLayout",
  components: {
    ProfilComponent,
    TitleWelcomeComponent,
    LastFictionsComponent,
    LastChapters,
    MyClubsComponents
  },
  data() {
    return {
      showspinner: false,
      usrId: this.$store.state.auth.user.usrID,
    };
  },
};
</script>