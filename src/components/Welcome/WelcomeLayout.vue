<template>
  <div class="container-fluid">
    <div class="row height-100-vh">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-3 col-xxl-3">
        <div class="card" style="width: 18rem">          
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-9 col-xxl-9"></div>
    </div>
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