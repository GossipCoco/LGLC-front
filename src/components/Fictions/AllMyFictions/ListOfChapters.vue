<template>
  <div class="opacity-container height-80 display-flex-row">
    <div class="summary-container height-70-vh overflow-hidden">
      <div class="row top-fiction" v-if="AuthorId === usrCurrent">        
        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <div v-if="nbKind > 0 " class="display-flex-row kind-fiction-container">
            Genre(s) : &nbsp;
            <p v-for="(kind, index) in Kinds" :key="index" class="display-flex-row">
              <span>{{ kind.KindId }}</span><span v-if="index < Kinds.length - 1">&nbsp;-&nbsp;</span>
            </p>
          </div>
        </div>
        <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2">
          <EditSummary v-bind:FictionId="IdFiction" v-bind:Summary="Summary" v-if="AuthorId === usrCurrent"/>
        </div>
        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 upload-input-component">
           <!-- <UploadImage
            v-bind:id="IdFiction"
            v-bind:service="'UploadFictionBackgroundIllustration'"
            v-bind:css="'mb-3'"
            v-if="AuthorId === usrCurrent"
          /> -->
        </div>
        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 btn-create-chapter-container">
            <router-link
              type="button"
              class="btn btn-primary btn-lg btn-create-chapter-button"
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
            <!-- <div
              class="display-flex-column image-fiction-container padding-1-rem overflowY-X-hidden background-size-cover"
              v-bind:style="{
                backgroundImage: 'url(' + backgroundImageFiction + ')',
              }"
            ></div> -->
            <AddANewCharacterModal
            v-if="AuthorId === usrCurrent"
            v-bind:IdGame="IdGame"
            />
            <CarrouselCharacter v-bind:Characters="Characters" />
            <CarrouselCharacter v-bind:Characters="OCCharacters" />
          </div>
        </div>
        <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12">
          <div class="summary-fiction-container-wrapper">
            <p class="text-align-justify overflowY-auto summary-height-container" v-html="Summary"></p>
          </div>
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
// import UploadImage from "../../Components/GenericComponent/UploadImage.vue";
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
    "Kinds"
  ],
  components: {
    EditSummary,
    CarrouselCharacter,
    AddANewCharacterModal,
    // UploadImage,
    ListAllChapters,
  },
  data() {
    return {
      NewImage: null,
      currentImage: undefined,
      previewImage: undefined,
      file: null, // Ajout de cette ligne pour stocker le fichier
      nbKind: null
    };
  },
  created(){
    console.log(Object.keys(this.Kinds).length)
    console.log(this.Kinds)
    this.nbKind = Object.keys(this.Kinds).length
  }
};
</script>