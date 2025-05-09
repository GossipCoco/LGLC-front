<template>
  <div class="opacity-container height-80 display-flex-row">
    <div class="summary-container width-200-vh height-870-vh overflow-hidden">
      <div class="row top-fiction height-5-vh" v-if="AuthorId === usrCurrent">        
        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <EditSummary v-bind:FictionId="IdFiction" v-bind:Summary="Summary" v-if="AuthorId === usrCurrent"/>         
        </div>
        <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 btn-create-chapter-container">
          <create-chapter-button v-if="AuthorId === usrCurrent" v-bind:="lastChap" v-bind:IdFiction="IdFiction"/>
        </div>
        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 upload-input-component"></div>
      </div>
      <div class="row middle-fiction-card">
        <illustration-summary-col v-bind:backgroundImageFiction="backgroundImageFiction" v-bind:Summary="Summary"/>
        <ListAllChapters v-bind:Chapters="fiction.Chapters" />
        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 right-column-image-container col-right">
          <div class="display-flex-column all-characters-of-fiction">
            <div class="row width-60-vh">
              <div class="col-8">
                <p>Il y a {{ lastChap - 1 }} chapitre<span v-if="lastChap - 1 > 1">s</span></p>
                <p class="white-text font-size-medium margin-bottom-2">
                  Nombre total de mots : {{ totalNbWords }}
                </p>
                <div v-if="nbKind > 0 " class="display-flex-column kind-fiction-container Noto-Sans">
                  <p>Genre(s) : &nbsp;</p>
                  <div class="display-flex-row">
                    <div v-for="(kind, index) in Kinds" :key="index" class="display-flex-row genres">
                      <p>
                        <span class="badge-genre background-color-dark-green-01 white-text">{{ kind.KindId }}</span>                
                      </p>
                    </div>
                  </div>
                </div>
              </div>            
              <div class="col-4 margin-5-0-0-0">
                <div v-for="(chapter, index) in fiction.Chapters.slice(0,1)" :key="index">
                  <router-link
                    type="button"
                    class="btn btn-primary btn-create-chapter-button"
                    :to="'/chapter/' + chapter.Title">                    
                      Lire dès le début
                  </router-link>
                </div>
              </div>
            </div>
            <div class="row width-60-vh">
              <AddANewCharacterModal
                v-if="AuthorId === usrCurrent"
                v-bind:IdGame="IdGame"
                />
                <AddAOriginalCharacterModal            
                v-if="AuthorId === usrCurrent"
                v-bind:IdGame="IdGame"
                />
            </div>
            <div class="row width-60-vh margin-2vh-0-0-0">
              <CarrouselCharacter v-bind:Characters="Characters" />
              <CarrouselCharacter v-bind:Characters="OCCharacters" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EditSummary from "../FictionsForm/EditSummary.vue";
import AddANewCharacterModal from "../Components/AddANewCharacterModal.vue";
import AddAOriginalCharacterModal from "../Components/AddAOriginalCharacterModal.vue";
import CarrouselCharacter from "../Components/CarrouselCharacter.vue";
import ListAllChapters from "../Components/ListAllChapters.vue";
import CreateChapterButton from '../Components/CreateChapterButton.vue';
import IllustrationSummaryCol from '../Components/IllustrationSummaryCol.vue';
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
    "Kinds",
    "nbChapter"
  ],
  components: {
    EditSummary,
    CarrouselCharacter,
    AddANewCharacterModal,
    AddAOriginalCharacterModal,
    ListAllChapters,
    CreateChapterButton,
    IllustrationSummaryCol
  },
  data() {
    return {
      NewImage: null,
      currentImage: undefined,
      previewImage: undefined,
      file: null, // Ajout de cette ligne pour stocker le fichier
      nbKind: null,
      Illustration:{},
      nbWord: null
    };
  },
  created(){
    this.getNbKind()
    this.getAllIllustration()
    this.getNbWords()
  },
  mounted() {
    console.log("Chapters type:", typeof this.fiction.Chapters);
    console.log("Chapters value:", this.fiction.Chapters);
  },
  computed: {
    totalNbWords() {
      const chapters = [...this.fiction.Chapters];
      return chapters.reduce((total, chapter) => total + parseInt(chapter.NbWords || 0), 0).toLocaleString();
    }
  },
  methods: {
    getNbKind(){
      this.nbKind = Object.keys(this.Kinds).length
    },
    getAllIllustration(){
      this.Illustration = this.IllustrationId
    },
    getNbWords(){
      console.log(this.fiction.Chapters)
    }
  }
};
</script>