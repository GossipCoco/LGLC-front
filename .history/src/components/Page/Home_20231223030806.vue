<template>
  <div class="container-fluid">
    <div class="row">
      <LeftMenu />
      <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
        <nav-bar />
        <main class="container">
          <div
            class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
          >
            <div class="row">
              <router-view></router-view>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import LeftMenu from "../Navigation/LeftMenu.vue";
export default {
  name: "Home",
  components: { LeftMenu },
};
</script>