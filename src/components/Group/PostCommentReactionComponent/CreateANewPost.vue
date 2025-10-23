<template>
<div class="card background-lineart height-90-vh">
  <div class="card-header text-white">
    <h1>{{ url }} </h1>
  </div>
  <div class="card-body">
    <h5 class="card-title">Créer un fil de discusssion</h5>
    <p class="card-text">
        
    </p>
  </div>
</div>
</template>
<script>
export default {
    name: "CreateANewPost",
    data() {
        return {
            url: null,
            userCurrent: null
        };
    },
    created() {
        this.url = this.$route.params.id;
         this.userCurrent = this.$store.state.auth.user.usrID;
        console.log("CreateANewPost created with url:", this.url);
        console.log("Current user ID:", this.userCurrent);
    }   
}
</script>