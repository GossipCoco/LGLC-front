<template>
  <div class="row">
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2"></div>
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-10 col-xxl-10"></div>
  </div>
</template>
<script>
export default {
  name: "WelcomeLayout",
  data() {
    return {
      showspinner: false,
      usrId: this.$store.state.auth.user.usrID,
    };
  },
};
</script>