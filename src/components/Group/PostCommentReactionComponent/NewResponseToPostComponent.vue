<template>
  <div
    id="group-details"
    class="width-190-vh height-100-vh background-none border-none padding-2-vh card mb-3 overflowY-auto"
  >
    <group-header v-bind:group="InfoGroup" />

    <div class="row gy-2">
      <div class="col-12 col-md-12">
        <div
          class="card group-container border-none height-auto details-infos-group border-radius-12px poppins-text text-white"
          v-bind:style="bgStyle"
        >
          <div class="card-body">
            <form
              class="needs-validation"
              novalidate
              @submit.prevent="onSubmit"
            >
              <div class="row height-40-vh">
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
// import PostCommentReactions from "../../../services/PostCommentReactions";

import GroupService from "../../../services/GroupService";
import GroupHeader from "../GroupComponent/GroupHeader.vue";
export default {
  name: "NewResponseToPostComponent",
  components: { GroupHeader, QuillEditor },
  data() {
    return {
      toolbarOptions: ["bold", "italic", "underline", "strike"],
      userCurrent: this.$store.state.auth.user.usrID,
      url: "",
      Group: {},
      InfoGroup: {},
      Background: null,
      form: {
        Content: "",
        PostID: this.$route.params.id,
        UserID: this.$store.state.auth.user.usrID,
      },
    };
  },
  created() {
    this.url = this.$route.params.id;
    this.GetGroupByPostId(this.url);
    console.log(this.form);
  },
  computed: {
    bgStyle() {
      // 1) source = Background si dispo, sinon group.Background, sinon group.Image
      const src = this.Background;
      console.log("Background source:", src);
      if (!src) return {}; // => pas de style tant qu’on n’a rien (évite url(null))
      return {
        backgroundImage: `url("${src}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      };
    },
  },
  methods: {
    GetGroupByPostId(id) {
      GroupService.GetGroupByPostId(id)
        .then((response) => {
          this.Group = response.data.ob;
          this.InfoGroup = this.Group.Group;
          this.Background = this.InfoGroup.Background;
          console.log("Group :", this.Group);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération du groupe :", error);
        });
    },
  },
};
</script>