<template>
  <div
    id="group-details"
    class="width-190-vh height-100-vh background-none border-none padding-2-vh card mb-3 overflowY-auto"
  >
    <group-header v-bind:group="Group">
      <header-component v-bind:group="Group" />
    </group-header>

    <div class="row gy-2">
      <div class="col-12 col-md-12">
        <div
          class="card group-container background-color-main-lineart border-none height-auto details-infos-group border-radius-12px poppins-text text-white"
          v-bind:style="bgStyle"
        >
          <div class="card-body height-90-vh">
            <div class="row height-10-vh">
              <div
                class="col-12 display-flex align-items-content-justify-content"
              >
                <router-link
                  to="/GroupLayout"
                  class="btn btn-primary margin-1vh height-5-vh"
                  >Retour à la liste des groupes</router-link
                >
               <router-link
                  :to="'/OneGroupLayout/' + Group.Id"
                  class="btn btn-primary margin-1vh height-5-vh"
                >
                  {{ Group.Name }}
                </router-link>
              </div>
            </div>
            <form
              class="needs-validation"
              novalidate
              @submit.prevent="onSubmit"
            >
              <div class="row">
                <div class="col-12 mb-3">
                  <label for="postTitle" class="form-label text-white"
                    >Titre</label
                  >
                  <small class="text-light opacity-75"
                    >{{ form.Title.length }}/140</small
                  >
                  <input
                    id="postTitle"
                    type="text"
                    class="form-control"
                    placeholder="Titre du post"
                    v-model="form.Title"
                    maxlength="100"
                  />
                </div>
              </div>
              <div class="row height-auto">
                <div class="col-12 mb-3">
                  <label class="form-label text-white">Votre post</label>
                  <QuillEditor
                    v-model:content="form.Content"
                    content-type="html"
                    theme="snow"
                    :toolbar="toolbarOptions"
                    placeholder="Écris ton post ici…"
                    class="bg-white rounded black-text"
                  />
                  <small class="text-light opacity-75 mt-1 d-block">
                    Astuce : formate ton texte (gras, italique, listes, titres).
                    Le contenu est enregistré en HTML.
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
      </div>
    </div>
  </div>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import PostCommentReactions from "../../../services/PostCommentReactions";
import GroupService from "../../../services/GroupService";
import GroupHeader from "../GroupComponent/GroupHeader.vue";
import HeaderComponent from "../GroupComponent/HeaderComponent.vue";
export default {
  name: "CreateANewPost",
  components: { GroupHeader, QuillEditor, HeaderComponent },
  data() {
    return {
      toolbarOptions: ["bold", "italic", "underline", "strike"],
      Group: {},
      url: null,
      userCurrent: null,
      submitting: false,
      Background: null,
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

  mounted() {
    this.getGroup();
  },
  computed: {
    bgStyle() {
      // 1) source = Background si dispo, sinon group.Background, sinon group.Image
      const src = this.Background;
      console.log("Background source:", this.Background);
      if (!src) return {}; // => pas de style tant qu’on n’a rien (évite url(null))
      return {
        backgroundImage: `url("${src}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      };
    },
  },
  methods: {
    getGroup() {
      GroupService.GetGroupById(this.url)
        .then((response) => {
          this.Group = response.data.ob;
          this.Background = this.Group.Background;
          console.log("Background:", this.Background);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    isEmptyHtml(html) {
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
  min-height: 200px;
}

/* Option : harmoniser la toolbar avec ton thème sombre */
:deep(.ql-toolbar) {
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
}
</style>
