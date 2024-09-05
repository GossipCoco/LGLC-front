<template>
  <div class="dashboard-max-card-container background-color-main-lineart flex-one  card display-flex-column fiction-container">
    <CardHeader v-bind:Title="'Créer une nouvelle fanfiction'" />
    <div class="card-body">
      <form class="create-character-form" @submit.stop.prevent="handleOk" ref="uploadForm">
        <div class="row">
          <div class="col-12">
            <InputTitle v-bind:Title="'Titre de la fiction'" @input-title="InputTitle"/>
            <div class="row">
              <SelectCharacterComponent
                v-bind:For="'FirstCharacterId'"
                v-bind:label="'Sélectionner un personnage'"
                v-bind:characterId="form.FirstCharacterId"
                v-bind:characters="characters"
                @form-character="handleFirstCharacterChange"
              />
              <SelectCharacterComponent
                v-bind:For="'SecondCharacterId'"
                v-bind:label="'Sélectionner un personnage'"
                v-bind:characterId="form.SecondCharacterId"
                v-bind:characters="characters"
                @form-character="handleSecondCharacterChange"
              />
            </div>
            <TextAreaComponent
              v-bind:Title="'Résumé de la fiction'"
              @input-content="getContent"
            />
            <div class="row">
              <LinkGenerateImage />
              <div class="col-4">
                <div class="mb-3">
                  <label for="file" class="form-label"
                    >Image de couverture</label
                  >
                  <input
                    type="file"
                    class="form-control"
                    @change="handleFileUpload"
                  />
                </div>
              </div>
              <div class="col-4 display-flex button-validate-container">
                <div class="mb-3">
                  <button type="submit" class="btn btn-primary">
                    Créer la fiction
                  </button>
                </div>
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
import CharacterService from "../../../services/CharacterService";
import axios from "axios";
import Config from "../../../../server";
import CardHeader from "../../Components/GenericComponent/CardHeader.vue";
import InputTitle from "../../Components/FormComponent/InputTitle.vue";
// import SelectCharacterComponent from "../../Components/FormComponent/SelectCharacterComponent.vue";
import TextAreaComponent from "../../Components/FormComponent/TextAreaComponent.vue";
import LinkGenerateImage from "../../Components/FormComponent/LinkGenerateImage.vue";

export default {
  name: "CreateFiction",
  components: {
    CardHeader,
    InputTitle,
    TextAreaComponent,
    // SelectCharacterComponent,
    LinkGenerateImage,
  },
  inject: ["user"],
  data() {
    return {
      userCurrent: this.$store.state.auth.user.usrID,
      textInput: null,
      characters: {},
      form: {
        Title: null,
        Summary: null,
        FirstCharacterId: null,
        SecondCharacterId: null,
        LocationId: null,
      },
      file: null,
      prompt: "",
      imageUrl: null,
    };
  },
  created() {
    this.GetAllNamesAndIdsCharacters();
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
    InputTitle(e) {
      console.log(e);
      this.form.Title = e;
    },
    handleFirstCharacterChange(field) {
      this.form.FirstCharacterId = field;
    },
    handleSecondCharacterChange(field) {
      this.form.SecondCharacterId = field;
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
    handleFileUpload(event) {
      this.file = event.target.files[0];
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
      if (this.file) {
        formData.append("image", this.file);
      }

      // Log formData entries for debugging
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }
      console.log(formData);
      this.CreateANewFiction(this.userCurrent, formData);
    },
    CreateANewFiction(usr, formData) {
      GameService.CreateANewGame(usr, formData)
        .then((response) => {
          console.log(response);
          if (response) {
            this.$router.push({
              path: "/allFictions/" + this.$store.state.auth.user.usrID,
            });
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
