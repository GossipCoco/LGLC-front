<template>
  <div
    class="dashboard-max-card-container border-none background-color-main-lineart flex-one card display-flex-column fiction-container"
  >
    <CardHeader v-bind:Title="'Créer une nouvelle fanfiction'" />
    <div class="card-body">
      <form
        class="create-character-form"
        @submit.stop.prevent="handleOk"
        ref="uploadForm"
      >
        <div class="row">
          <div class="col-12">
            <InputTitle
              v-bind:Title="'Titre de la fiction'"
              @input-title="InputTitle"
            />
          </div>
          <div class="row">
            <SelectCharacterComponent
              v-bind:For="'FirstCharacterId'"
              v-bind:label="'Sélectionner un personnage'"
              v-bind:characterId="form.FirstCharacterId"
              v-bind:characters="characters"
              v-bind:col="'col-3'"
              @getCharacter="handleFirstCharacterChange"
            />
            <SelectCharacterComponent
              v-bind:For="'SecondCharacterId'"
              v-bind:label="'Sélectionner un personnage'"
              v-bind:characterId="form.SecondCharacterId"
              v-bind:characters="characters"
              v-bind:col="'col-3'"
              @getCharacter="handleSecondCharacterChange"
            />
            <SelectOriginalCharacterComponent
              v-bind:For="'OriginalFirstCharacterId'"
              v-bind:label="'Sélectionner un de vos personnages'"
              v-bind:characterId="form.OriginalFirstCharacterId"
              v-bind:characters="myAllCharacters"
              v-bind:col="'col-3'"
              v-bind:getDatas="'getOriginalFirstCharacter'"
              @getOriginalFirstCharacter="getOriginalFirstCharacter"
            />
            <SelectOriginalCharacterComponent
              v-bind:For="'OriginalSecondCharacterId'"
              v-bind:label="'Sélectionner un de vos personnages'"
              v-bind:characterId="form.OriginalSecondCharacterId"
              v-bind:characters="myAllCharacters"
              v-bind:col="'col-3'"
              v-bind:getDatas="'getOriginalSecondCharacter'"
              @getOriginalSecondCharacter="getOriginalSecondCharacter"
            />
          </div>
          <div class="row">
            <div class="col-6">
              <div class="margin-top-1rem">
                <label for="selectClan" class="text-white form-label">
                  Clan principal
                </label>
                <select
                  id="selectClan"
                  class="form-select"
                  aria-label="Default select example"
                  v-model="form.ClanId"
                  @change="selectClan"
                >
                  <option selected disabled>Sélectionnez le clan</option>
                  <option
                    v-for="(clan, index) in allClans"
                    :value="clan.Id"
                    :key="index"
                  >
                    {{ clan.Name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-6">
              <div class="margin-top-1rem">
                <label for="selectClan" class="text-white form-label">
                  Sélectionnez un type de fiction
                </label>
                <select
                  id="selectClan"
                  class="form-select"
                  aria-label="Default select example"
                  v-model="form.KindId"
                  @change="selectKind"
                >
                  <option selected disabled>Sélectionnez un type de fiction</option>
                  <option
                    v-for="(kind, index) in allKinds"
                    :value="kind.Id"
                    :key="index"
                  >
                    {{ kind.Id }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <TextAreaComponent
            v-bind:Title="'Résumé de la fiction'"
            @input-content="getContent"
          />
          <div class="row">
            <LinkGenerateImage />
            <div class="col-6">
              <div class="mb-3">
                <label for="file" class="form-label text-white"
                  >Image de couverture</label
                >
                <input
                  type="file"
                  class="form-control"
                  @change="handleFileUpload"
                />
              </div>
            </div>
            <div class="col-2 display-flex button-validate-container">
              <div class="d-grid gap-2 margin-top-1rem">
                <button type="submit" class="btn btn-primary">
                  Créer la fiction
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import GameService from "../../../services/GameService";
import ClansServices from "../../../services/ClansServices";
import KindService from "../../../services/KindService"
import CharacterService from "../../../services/CharacterService";
import axios from "axios";
import Config from "../../../../server";
import CardHeader from "../../Components/GenericComponent/CardHeader.vue";
import InputTitle from "../../Components/FormComponent/InputTitle.vue";
import SelectCharacterComponent from "../../Components/FormComponent/SelectCharacterComponent.vue";
import SelectOriginalCharacterComponent from "../../Components/FormComponent/SelectOriginalCharacterComponent.vue";
import TextAreaComponent from "../../Components/FormComponent/TextAreaComponent.vue";
import LinkGenerateImage from "../../Components/FormComponent/LinkGenerateImage.vue";
import { resizeImage } from "../../../services/functions";

export default {
  name: "CreateFiction",
  components: {
    CardHeader,
    InputTitle,
    TextAreaComponent,
    SelectCharacterComponent,
    LinkGenerateImage,
    SelectOriginalCharacterComponent,
  },
  inject: ["user"],
  data() {
    return {
      userCurrent: this.$store.state.auth.user.usrID,
      textInput: null,
      characters: {},
      myAllCharacters: {},
      allClans: {},
      allKinds:{},
      form: {
        Title: null,
        Summary: null,
        FirstCharacterId: null,
        SecondCharacterId: null,
        OriginalFirstCharacterId: null,
        OriginalSecondCharacterId: null,
        LocationId: null,
        ClanId: null,
        KindId: null
      },
      file: null,
      prompt: "",
      imageUrl: null,
    };
  },
  created() {
    this.GetAllNamesAndIdsCharacters();
    this.GetAllNamesAndIdsOriginaCharacters(this.userCurrent);
    this.getAllClans();
    this.GetAllKinds()
  },
  methods: {
    getContent(e) {
      console.log(e);
      this.form.Summary = e
        .split("\n")
        .filter((paragraph) => paragraph.trim() !== "") // Remove empty lines
        .map((paragraph) => `<p>${paragraph}</p>`)
        .join("");
    },
    GetAllKinds(){
      KindService.GetAllKinds()
      .then((response) => {
        console.log(response.data.ob)
          this.allKinds = response.data.ob;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getAllClans() {
      ClansServices.getAllClans()
        .then((response) => {
          this.allClans = response.data.ob;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    InputTitle(e) {
      console.log(e);
      this.form.Title = e;
    },
    handleFirstCharacterChange(field) {
      console.log(field)
      this.form.FirstCharacterId = field;
    },
    handleSecondCharacterChange(field) {
      console.log(field)
      this.form.SecondCharacterId = field;
    },
    getOriginalFirstCharacter(e){
      this.form.OriginalFirstCharacterId = e
    },
    getOriginalSecondCharacter(e){
    this.form.OriginalSecondCharacterId = e
    },
    async generateImage() {
      try {
        const response = await axios.post(Config.Url + "/api/generate-image", {
          prompt: this.prompt,
        });

        this.imageUrl = response.data.data[0].url;
      } catch (error) {
        console.error("Error generating image:", error);
      }
    },
    GetAllNamesAndIdsCharacters() {
      CharacterService.GetAllNamesAndIdsCharacters()
        .then((response) => {
          this.characters = response.data.ob;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    GetAllNamesAndIdsOriginaCharacters(usr) {
      CharacterService.GetAllNamesAndIdsOriginaCharacters(usr)
        .then((response) => {
          this.myAllCharacters = response.data.ob;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    handleFileUpload(event) {
      this.file = event.target.files[0];

      this.file = event.target.files[0];
      // Vérifier le type MIME pour les images acceptées
      const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/webp",
      ];
      if (!allowedTypes.includes(this.file.type)) {
        alert("Seuls les formats JPEG, PNG et WEBP sont acceptés.");
        return;
      }
      // Vérification du poids de l'image (5 Mo)
      if (this.file.size > 5 * 1024 * 1024) {
        alert("L'image dépasse la limite de 5 Mo.");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          // Redimensionner l'image si elle dépasse 1200px de largeur
          if (img.width > 1200) {
            resizeImage(img, 1920, this.file)
              .then((resizedFile) => {
                this.file = resizedFile;
                this.sendFile();
              })
              .catch((error) => {
                console.error("Erreur lors du redimensionnement:", error);
              });
          } else {
            this.sendFile(); // Appel de l'envoi de fichier
          }
        };
      };
      reader.readAsDataURL(this.file);
    },
    sendFile() {
      const formData = new FormData();
      formData.append("image", this.file);
      this.handleOk(formData); // Envoi de l'image via la fonction UploadNewImage
    },
    handleOk() {
      const formattedText = this.form.Summary;
      this.form.Summary = formattedText;

      const formData = new FormData();
      formData.append("Title", this.form.Title);
      formData.append("Summary", this.form.Summary);
      formData.append("FirstCharacterId", this.form.FirstCharacterId);
      formData.append("SecondCharacterId", this.form.SecondCharacterId);
      formData.append("LocationId", this.form.LocationId);
      formData.append("ClanId", this.form.ClanId)
      formData.append("KindId", this.form.KindId)
      formData.append(
        "OriginalFirstCharacterId",
        this.form.OriginalFirstCharacterId
      );
      formData.append(
        "OriginalSecondCharacterId",
        this.form.OriginalSecondCharacterId
      );
      if (this.file) {
        formData.append("image", this.file);
      }

      // Log formData entries for debugging
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }
      this.CreateANewFiction(this.userCurrent, formData);
    },
    async CreateANewFiction(usr, formData) {
      try {
        const response = await GameService.CreateANewGame(usr, formData);
        if (response && response.data) {
          // Assure-toi que la réponse contient bien les données attendues
          console.log("Fiction créée avec succès, redirection...");
          this.$router.push({
            path: "/allFictions/" + this.$store.state.auth.user.usrID,
          });
        } else {
          console.error(
            "Erreur lors de la création de la fiction, réponse inattendue :",
            response
          );
          this.$router.push({
            path: "/allFictions/" + this.$store.state.auth.user.usrID,
          });
        }
      } catch (error) {
        console.error("Erreur lors de la création de la fiction :", error);
        this.$router.push({
          path: "/allFictions/" + this.$store.state.auth.user.usrID,
        });
      }
    },
  },
};
</script>
