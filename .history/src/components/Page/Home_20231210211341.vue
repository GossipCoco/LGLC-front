<template>
 <div class="container-fluid">
    <div class="row">
        <div class="col-12 col-sm-12  col-md-12 col-lg-12 col-xl-12  col-xxl-12">
        <main class="container">
          <div class="row">
          <router-view></router-view>
        </div>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
};
</script>