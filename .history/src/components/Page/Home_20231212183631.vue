<template>  <div class="container-fluid">
  <div class="row">
    <div class="col-2 col-sm-2  col-md-2 col-lg-2 col-xl-2  col-xxl-2"><LeftMenu /></div>
    <div class="col-10 col-sm-10  col-md-10 col-lg-10 col-xl-10  col-xxl-10">
      <nav-bar />
      <main class="container">
        <div class="row">
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
  </div></div>
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