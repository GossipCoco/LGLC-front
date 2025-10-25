<template>
  <div class="card background-lineart height-90-vh">
    <div class="card-header text-white">
      <h1 class="text-white">{{ url }}</h1>
    </div>
    <div class="card-body">
      <h5 class="card-title">Créer un fil de discusssion</h5>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Titre</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="titre du post"
          v-model="form.Title"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Votre post</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="form.Content"
        ></textarea>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CreateANewPost",
  data() {
    return {
      url: null,
      userCurrent: null,
      form: {
        Title: "",
        Content: "",
        UserID: null,
      },
    };
  },
  created() {
    this.url = this.$route.params.id;
    this.userCurrent = this.$store.state.auth.user.usrID;
    console.log("CreateANewPost created with url:", this.url);
    console.log("Current user ID:", this.userCurrent);
    this.form.UserID = this.userCurrent;
  },
};
</script>