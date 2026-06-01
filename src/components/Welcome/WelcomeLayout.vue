<template>
  <div class="container-fluid">
    <div class="row height-100-vh">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-3 col-xxl-3">
        <profil-component />
      </div>
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-9 col-xxl-9"></div>
    </div>
  </div>
</template>
<script>
import ProfilComponent from './GenericComponent/ProfilComponent.vue';
export default {
  name: "WelcomeLayout",
  components: {ProfilComponent},
  data() {
    return {
      showspinner: false,
      usrId: this.$store.state.auth.user.usrID,
    };
  },
};
</script>