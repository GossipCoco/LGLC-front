<template>
  <div class="card background-lineart height-90-vh">
    <div class="card-header text-white">
      <h1 class="text-white">{{ url }}</h1>
    </div>
    <div class="card-body">
      <h5 class="card-title">Créer un fil de discusssion</h5>
      <form class="row g-3 needs-validation" novalidate @submit.prevent="onSubmit">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label text-white">Titre</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="titre du post"
            v-model="form.Title"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label text-white"
            >Votre post</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model="form.Content"
          ></textarea>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import PostCommentReactions from "../../../services/PostCommentReactions";
export default {
  name: "CreateANewPost",
  data() {
    return {
      url: null,
      userCurrent: null,
      form: {
        Title: "",
        Content: "",
        UserId: null,
      },
    };
  },
  created() {
    this.url = this.$route.params.id;
    this.userCurrent = this.$store.state.auth.user.usrID;
    console.log("CreateANewPost created with url:", this.url);
    console.log("Current user ID:", this.userCurrent);
    this.form.UserId = this.userCurrent;
  },
methods: {
    toParagraphs(e) {
      return (e || "")
        .split("\n")
        .filter(paragraph => paragraph.trim() !== "")
        .map(paragraph => `<p>${paragraph}</p>`)
        .join("");
    },
    async onSubmit() {
      // validations simples
      if (!this.form.Title?.trim() || !this.form.Content?.trim()) {
        alert("Le titre et le contenu sont obligatoires.");
        return;
      }
      const payload = {
        Title: this.form.Title,
        Content: this.toParagraphs(this.form.Content), // ← conversion ici
        UserId: this.form.UserId,                      // ← mapping UserID → UserId
      };

      try {
        await PostCommentReactions.CreateANewPost(this.url, payload);
        // retour sur la page du groupe
        this.$router.push({ path: `/OneGroupLayout/${this.url}` });
      } catch (err) {
        console.error("CreateANewPost error:", err);
        alert("Impossible de publier le post pour le moment.");
      }
    },
  },
};
</script>