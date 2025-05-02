<template>
  <div class="opacity-container height-80 display-flex-row">
    <div class="summary-container height-70-vh overflow-hidden">
      <div class="row top-fiction height-5-vh" v-if="AuthorId === usrCurrent">        
        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <EditSummary v-bind:FictionId="IdFiction" v-bind:Summary="Summary" v-if="AuthorId === usrCurrent"/>         
        </div>
        <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2">
          
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
        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 upload-input-component">
        </div>
      </div>
      <div class="row middle-fiction-card">
        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 padding-0-0-0-5vh">
          <div class="display-flex-column">
            <div
                class="display-flex-column image-fiction-container margin-21vh-0-0-0 all-illustrations-fiction-container padding-1-rem overflowY-X-hidden background-size-cover"
                v-bind:style="{
                  backgroundImage: 'url(' + backgroundImageFiction + ')',
                }"
              >
            </div>
            <div class="summary-fiction-container-wrapper width-50-vh height-35-vh overflowY-scroll margin-1vh-0-0-1vh">
              <p class="text-align-justify overflowY-auto summary-height-container Noto-Sans" v-html="Summary"></p>
            </div>
          </div>
        </div>
        <ListAllChapters v-bind:Chapters="fiction.Chapters" />
        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 right-column-image-container">
          <div class="display-flex-column all-characters-of-fiction">
            <div v-if="nbKind > 0 " class="display-flex-column kind-fiction-container Noto-Sans">
              <p>Genre(s) : &nbsp;</p>
              <div v-for="(kind, index) in Kinds" :key="index" class="display-flex-row">
                <p>
                  <span>{{ kind.KindId }}</span>                
                </p>
              </div>
            </div>
            <AddANewCharacterModal
            v-if="AuthorId === usrCurrent"
            v-bind:IdGame="IdGame"
            />
            <div class="row width-60-vh">
              <div class="col-6">
                <CarrouselCharacter v-bind:Characters="Characters" />
              </div>
              <div class="col-6">
                <CarrouselCharacter v-bind:Characters="OCCharacters" />
              </div>
            </div>
          </div>
        </div>
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
      nbKind: null,
      Illustration:{}
    };
  },
  created(){
    this.getNbKind()
    this.getAllIllustration()
  },
  methods: {
    getNbKind(){
      this.nbKind = Object.keys(this.Kinds).length
    },
    getAllIllustration(){
      this.Illustration = this.IllustrationId
      console.log(this.Illustration)
    }
  }
};
</script>