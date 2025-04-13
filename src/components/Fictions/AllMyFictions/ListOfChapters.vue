<template>
  <div class="opacity-container display-flex-row">
    <div class="summary-container overflowY-auto overflowX-hidden">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-2">
          <UploadImage
            v-bind:id="IdFiction"
            v-bind:service="'UploadFictionBackgroundIllustration'"
            v-bind:css="'mb-3'"
          />
        </div>
        <div class="col-3">
          <EditSummary v-bind:FictionId="IdFiction" v-bind:Summary="Summary" />
        </div>
        <div class="col-1"></div>
        <div class="col-4">
          <div class="d-grid gap-2">
            <router-link
              type="button"
              class="btn btn-primary btn-lg"
              v-if="AuthorId === usrCurrent"
              :to="'/fiction/createChapter/' + IdFiction"
              v-bind="lastChap"
            >
              Créer le chapitre {{ lastChap }}
            </router-link>
          </div>
        </div>
      </div>
      <div class="row middle-fiction-card">
        <div
          class="col-xxl-2 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 right-column-image-container"
        >
          <div class="display-flex-column all-characters-of-fiction">
            <div
              class="display-flex-column image-fiction-container overflowY-X-hidden background-size-cover"
              v-bind:style="{
                backgroundImage: 'url(' + backgroundImageFiction + ')',
              }"
            ></div>
            <CarrouselCharacter v-bind:Characters="Characters" />
            <CarrouselCharacter v-bind:Characters="OCCharacters" />
          </div>
        </div>
        <div class="col-xxl-2 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <AddANewCharacterModal
            v-if="AuthorId === usrCurrent"
            v-bind:IdGame="IdGame"
          />
        </div>
        <div class="col-xxl-4 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <p class="text-align-justify overflowY-auto summary-height-container" v-html="Summary"></p>
        </div>
        <ListAllChapters v-bind:Chapters="fiction.Chapters" />
      </div>
    </div>
  </div>
</template>

<script>
import EditSummary from "../FictionsForm/EditSummary.vue";
import AddANewCharacterModal from "./AddANewCharacterModal.vue";
import CarrouselCharacter from "./CarrouselCharacter.vue";
import UploadImage from "../../Components/GenericComponent/UploadImage.vue";
import ListAllChapters from "../Components/ListAllChapters.vue";
export default {
  name: "ListOfChapters",
  props: [
    "AuthorId",
    "usrCurrent",
    "IdFiction",
    "lastChap",
    "fiction",
    "Summary",
    "IdGame",
    "backgroundImageFiction",
    "Characters",
    "OCCharacters",
    "UploadIllustration",
    "IllustrationId",
  ],
  components: {
    EditSummary,
    CarrouselCharacter,
    AddANewCharacterModal,
    UploadImage,
    ListAllChapters,
  },
  data() {
    return {
      NewImage: null,
      currentImage: undefined,
      previewImage: undefined,
      file: null, // Ajout de cette ligne pour stocker le fichier
    };
  },
};
</script>