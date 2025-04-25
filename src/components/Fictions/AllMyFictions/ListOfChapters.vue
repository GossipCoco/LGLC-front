<template>
  <div class="opacity-container display-flex-row">
    <div class="summary-container height-70-vh overflowY-auto overflowX-hidden">
      <div class="row top-fiction">
        <div class="col-3">
           <UploadImage
            v-bind:id="IdFiction"
            v-bind:service="'UploadFictionBackgroundIllustration'"
            v-bind:css="'mb-3'"
            v-if="AuthorId === usrCurrent"
          /></div>
        <div class="col-6">
          <EditSummary v-bind:FictionId="IdFiction" v-bind:Summary="Summary" v-if="AuthorId === usrCurrent"/>
        </div>
        <div class="col-3">
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
      <div class="row middle-fiction-card">
        <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12 right-column-image-container">
          <div class="display-flex-column all-characters-of-fiction">
            <div
              class="display-flex-column image-fiction-container overflowY-X-hidden background-size-cover"
              v-bind:style="{
                backgroundImage: 'url(' + backgroundImageFiction + ')',
              }"
            ></div>
            <AddANewCharacterModal
            v-if="AuthorId === usrCurrent"
            v-bind:IdGame="IdGame"
            />
            <CarrouselCharacter v-bind:Characters="Characters" />
            <CarrouselCharacter v-bind:Characters="OCCharacters" />
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
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