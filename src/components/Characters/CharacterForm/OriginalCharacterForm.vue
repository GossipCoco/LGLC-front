<template>
  <div class="card-body">
    <form
      class="create-original-character-form"
      @submit.stop.prevent="onSubmit"
    >
      <div class="row">
        <InputName
          v-bind:col="'col-3 col-md-3'"
          v-bind:forId="'inputName'"
          v-bind:label="'Nom actuel'"
          v-bind:getNameData="'getUserName'"
          @getUserName="getUserName"
        />
        <InputName
          v-bind:col="'col-3 col-md-3'"
          v-bind:forId="'inputKitName'"
          v-bind:label="'Nom de chaton'"
          v-bind:getNameData="'getKitName'"
          @getKitName="getKitName"
        />
        <InputName
          v-bind:col="'col-3 col-md-3'"
          v-bind:forId="'inputApprenticeName'"
          v-bind:label="'Nom d\'apprenti'"
          v-bind:getNameData="'getNameApprentice'"
          @getNameApprentice="getNameApprentice"
        />
        <InputName
          v-bind:col="'col-3 col-md-3'"
          v-bind:forId="'inputWarriorName'"
          v-bind:label="'Nom de Guerrier ou de Guérisseur'"
          v-bind:getNameData="'getWarriorName'"
          @getWarriorName="getWarriorName"
        />
      </div>
      <div class="row">
        <GerenicSelect
          v-bind:For="'SearchClan'"
          v-bind:label="'Clan'"
          v-bind:formdata="'getclan'"
          v-bind:col="'col-3'"
          @getclan="getclan"
        />
        <GerenicSelect
          v-bind:For="'SearchGrade'"
          v-bind:label="'Grade'"
          v-bind:formdata="'getgrade'"
          v-bind:col="'col-3'"
          @getgrade="getgrade"
        />
        <GerenicSelect
          v-bind:For="'SearchGenre'"
          v-bind:label="'Genre'"
          v-bind:col="'col-3'"
          v-bind:formdata="'getgenre'"
          @getgenre="getgenre"
        />
        <GerenicSelect
          v-bind:For="'SearchStatus'"
          v-bind:label="'Status'"
          v-bind:col="'col-3'"
          v-bind:formdata="'getStatus'"
          @getStatus="getStatus"
        />
      </div>
      <div class="row">
        <GenericTextarea
          v-bind:col="'col-12'"
          v-bind:md="'md-6'"
          v-bind:forId="'description'"
          v-bind:label="'Description'"
          v-bind:rows="3"
          v-bind:getData="'getDescription'"
          @getDescription="getDescription"
        />
      </div>
      <div class="row">
        <GenericTextarea
          v-bind:col="'col-12'"
          v-bind:md="'md-6'"
          v-bind:forId="'personnality'"
          v-bind:label="'Personnalité'"
          v-bind:rows="3"
          v-bind:getData="'getPersonnality'"
          @getPersonnality="getPersonnality"
        />
      </div>
      <div class="row">
        <GenericTextarea
          v-bind:col="'col-12'"
          v-bind:md="'md-6'"
          v-bind:forId="'biography'"
          v-bind:label="'Biographie'"
          v-bind:rows="3"
          v-bind:getData="'getbiography'"
          @getbiography="getbiography"
        />
      </div>
      <div class="row">
        <LinkGenerateImage />
        <div class="col-md-4">
          <label for="inputImage" class="form-label text-white"
            >Envoyer une image (2Mo max ou 1000 * 1000)</label
          >
          <input
            type="file"
            class="form-control"
            id="inputImage"
            @change="handleFileUpload"
          />
        </div>
        <div class="col-md-4 create-character-button display-flex">
          <button
            class="btn btn-primary margin-2vh-0-0-0"
            type="submit"
            v-on:click="handleOk"
            title="endpart"
          >
            Créer le nouveau personnage
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import CharacterService from "../../../services/CharacterService";
import InputName from "../../Components/FormComponent/InputName.vue";
import GerenicSelect from "../../Components/FormComponent/GenericSelect.vue";
import GenericTextarea from "../../Components/FormComponent/GenericTextarea.vue";
import LinkGenerateImage from "../../Components/FormComponent/LinkGenerateImage.vue";
import { resizeImage } from "../../../services/functions";

export default {
  name: "OriginalCharacterForm",
  components: {
    InputName,
    GerenicSelect,
    GenericTextarea,
    LinkGenerateImage,
  },
  data() {
    return {
      file: null,
      form: {
        UserId: this.$store.state.auth.user.usrID,
        UserName: "",
        KitName: "",
        ApprenticeName: "",
        WarriorName: "",
        ClanId: "",
        Status: "",
        Genre: "",
        GradeId: "",
        Personnality: "",
        Biography: "",
        Description: "",
      },
    };
  },
  methods: {
    // Traitement texte → <p>
    formatText(text) {
      return text
        ? text.split("\n").map(p => `<p>${p}</p>`).join("")
        : "";
    },

    // Récupération des données par events
    getUserName(e) {
      this.form.UserName = e;
    },
    getKitName(e) {
      this.form.KitName = e;
    },
    getclan(e) {
      console.log("getclan", e);
      this.form.ClanId = e; },
    getgrade(e) {
      console.log("getgrade", e);
      this.form.GradeId = e;
    console.log(this.form) },
    getNameApprentice(e) {
      this.form.ApprenticeName = e;
    },
    getWarriorName(e) {
      this.form.WarriorName = e;
    },
    getgenre(e) {
      console.log(e)
      this.form.Genre = e;
    },
    getStatus(e) {
      console.log(e)
      this.form.Status = e;
    },
    getDescription(e) {
      this.form.Description = this.formatText(e);
    },
    getPersonnality(e) {
      this.form.Personnality = this.formatText(e);
     },
    getbiography(e) {
      this.form.Biography = this.formatText(e);
    },

    // Upload + Resize
    handleFileUpload(event) {
      const file = event.target.files[0];
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

      if (!allowedTypes.includes(file.type)) {
        return alert("Seuls les formats JPEG, PNG et WEBP sont acceptés.");
      }
      if (file.size > 5 * 1024 * 1024) {
        return alert("L'image dépasse la limite de 5 Mo.");
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          if (img.width > 1920) {
            resizeImage(img, 1920, file).then((resized) => {
              this.file = resized;
            }).catch((err) => console.error("Erreur resize:", err));
          } else {
            this.file = file;
          }
        };
      };
      reader.readAsDataURL(file);
    },

    // Submit final
    handleOk() {
      const formData = new FormData();

      Object.keys(this.form).forEach(key => {
        formData.append(key, this.form[key]);
      });

      if (this.file) {
        formData.append("image", this.file);
      }

      this.CreateAnOriginalCharacter(this.form.UserId, formData);
    },

    async CreateAnOriginalCharacter(id, formData) {
      console.log(formData)
      try {
        const response = await CharacterService.CreateAnOriginalCharacter(id, formData);
        console.log("Réponse de création :", response?.data);
        this.$router.push({ path: "/OriginaleCharacterByUser" });
      } catch (error) {
        console.error("Erreur création personnage :", error);
        this.$router.push({ path: "/OriginaleCharacterByUser" });
      }
    },
  },
};
</script>