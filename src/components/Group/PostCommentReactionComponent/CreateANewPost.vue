<template>
  <div class="card background-lineart height-95-vh">
    <div class="card-header text-white display-flex display-row">
      <h1 class="text-white">{{ url }}</h1> - <h5 class="card-title ">Créer un fil de discussion</h5>
    </div>
    <div class="card-body height-90-vh">      
      <form class="needs-validation" novalidate @submit.prevent="onSubmit">
        <div class="row">
          <div class="col-12 mb-3">
            <label for="postTitle" class="form-label text-white">Titre</label>
            <input
              id="postTitle"
              type="text"
              class="form-control"
              placeholder="Titre du post"
              v-model="form.Title"
              maxlength="140"
            />
            <small class="text-light opacity-75"
              >{{ form.Title.length }}/140</small
            >
          </div>
        </div>
        <div class="row">
          <div class="col-12 mb-3">
            <label class="form-label text-white">Votre post</label>
            <QuillEditor
              v-model:content="form.Content"
              content-type="html"
              theme="snow"
              toolbar="full"
              placeholder="Écris ton post ici…"
              class="bg-white rounded"
            />
            <small class="text-light opacity-75 mt-1 d-block">
              Astuce : formate ton texte (gras, italique, listes, titres). Le
              contenu est enregistré en HTML.
            </small>
          </div>
        </div>
        <div id="btn-submit-post-form" class="row">
          <div class="col-12 mb-3">
            <button
              class="btn btn-primary"
              type="submit"
              :disabled="submitting"
            >
              {{ submitting ? "Publication…" : "Publier" }}
            </button>
            <button
              class="btn btn-outline-light ms-2"
              type="button"
              @click="resetForm"
              :disabled="submitting"
            >
              Effacer
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import PostCommentReactions from "../../../services/PostCommentReactions";

export default {
  name: "CreateANewPost",
  components: { QuillEditor },
  data() {
    return {
      url: null,
      userCurrent: null,
      submitting: false,
      form: {
        Title: "",
        Content: "", // HTML renvoyé par l’éditeur
        UserId: null,
      },
    };
  },
  created() {
    this.url = this.$route.params.id;
    this.userCurrent = this.$store.state.auth.user.usrID;
    this.form.UserId = this.userCurrent;
  },
  methods: {
    isEmptyHtml(html) {
      // Quill vide => "<p><br></p>"
      return !html || html.trim() === "<p><br></p>";
    },
    sanitize(html) {
      // Sanitation minimale côté front (la vraie sécurité doit rester côté back)
      return String(html || "")
        .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
        .replace(/\son\w+="[^"]*"/gi, "")
        .replace(/\son\w+='[^']*'/gi, "");
    },
    resetForm() {
      this.form.Title = "";
      this.form.Content = "";
    },
    async onSubmit() {
      // validations simples
      if (!this.form.Title?.trim()) {
        alert("Le titre est obligatoire.");
        return;
      }
      const cleaned = this.sanitize(this.form.Content);
      if (this.isEmptyHtml(cleaned)) {
        alert("Le contenu est obligatoire.");
        return;
      }

      const payload = {
        Title: this.form.Title.trim(),
        Content: cleaned, // on envoie le HTML produit par l’éditeur
        UserId: this.form.UserId, // mapping UserId
      };

      try {
        this.submitting = true;
        await PostCommentReactions.CreateANewPost(this.url, payload);
        this.$router.push({ path: `/OneGroupLayout/${this.url}` });
      } catch (err) {
        console.error("CreateANewPost error:", err);
        alert("Impossible de publier le post pour le moment.");
      } finally {
        this.submitting = false;
      }
    },
  },
};
</script>

<style scoped>
/* Zone de saisie confortable */
:deep(.ql-editor) {
  min-height: 240px;
}

/* Option : harmoniser la toolbar avec ton thème sombre */
:deep(.ql-toolbar) {
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
}
</style>
