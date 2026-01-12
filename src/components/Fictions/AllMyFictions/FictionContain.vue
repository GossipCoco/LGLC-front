<template>
  <div class="fiction-globale-container height-90 background-lineart margin-0-0-4-0 card display-flex-column padding-0 overflowY-scroll overflowX-hidden text-white flex-one opensans-text">
    <Spinner v-if="showspinner" />
    <div
      v-if="!showspinner"
      id="card-display-flex-column padding-2-vh"
      class="card-header fiction-global-information-container-hearder display-flex-row align-items-content-justify-content"
    >
      <CreateCommentModal
        v-bind:fanfiction="Title"
        v-bind:fictionId="IdFiction"
        v-bind:Title="Title"
        v-bind:rating="rating"
      />
      <Rating :fictionId="IdFiction" :rating="rating" />
      <TitleFiction
        v-bind:Title="Title"
        v-bind:Author="Author"
        v-bind:dateCreation="dateCreation"
      />
      <BackToFileBtnGroup v-bind:Author="Author" />
    </div>    
    <Spinner v-if="showspinner" />
    <div class="card-body margin-0-0-5vh-0 width-100-100 height-60-vh padding-1-0-0-1vh overflowY-scroll overflowX-hidden" v-if="!showspinner">
      <div class="row">
        <div class="col-12">
          <div class="display-flex-column flex-one">
            <div class="character-chapters display-flex-column flex-one
            overflowY-X-hidden background-summary-global-container border-radius-12px">
              <div class="display-flex-row character-chapters-container ">
                <div
                  :style="{
                    backgroundImage: 'url(' + backgroundImageFiction + ')',
                  }"
                  class="background-size-cover width-100-100 display-flex-column background-fiction-contain"
                >
                  <ListOfChapter
                    v-bind:AuthorId="AuthorId"
                    v-bind:usrCurrent="usrCurrent"
                    v-bind:IdFiction="IdFiction"
                    v-bind:lastChap="lastChap"
                    v-bind:fiction="fiction"
                    v-bind:Summary="Summary"
                    v-bind:IdGame="IdGame"
                    v-bind:backgroundImageFiction="backgroundImageFiction"
                    v-bind:Characters="listOfCharacter"
                    v-bind:OCCharacters="Gamers"
                    v-bind:IllustrationId="illustration"
                    v-bind:Kinds="Kinds"
                    v-bind:nbChapter="nbChapter"
                  />
                </div>             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FictionService from "../../../services/FictionService";
import Rating from "../Components/Rating.vue";
import TitleFiction from "../Components/TitleFiction.vue";
import ListOfChapter from "./ListOfChapters.vue";
import CreateCommentModal from "../Comments/CreateCommentModal.vue";
import Spinner from "../../Components/GenericComponent/Spinner.vue";
import BackToFileBtnGroup from "../Components/BackToFileBtnGroup.vue";
export default {
  name: "FictionContain",
  inject: ["user"],
  components: {
    Rating,
    TitleFiction,
    ListOfChapter,
    CreateCommentModal,
    Spinner,
    BackToFileBtnGroup,
  },
  data() {
    return {
      showspinner: false,
      usrCurrent: this.$store.state.auth.user.usrID,
      dateCreation: new Date(),
      backgroundImageFiction: null,
      IdGame: null,
      fiction: {},
      url: null,
      nav: {
        current: 0,
        pages: 0,
        step: 9,
      },
      IdFiction: null,
      lastChap: null,
      lastChapNumber: null,
      message: null,
      Author: null,
      AuthorId: null,
      Title: null,
      CharImg: null,
      Summary: null,
      TypeFiction: null,
      listOfCharacter: {},
      nbChapter: 0,
      rating: 0,
      illustration: null,
      nbIllus: null,
      nbBackground: null,
      Gamers: {},
      Kinds:{}
    };
  },
  created() {
    this.url = this.$route.params.id;
    this.getFictionByName(this.url);
    this.GetLastChapterOfAFiction(this.url);
  },
  methods: {
    formatDate(isoDateString) {
      if (isoDateString) {
        const date = new Date(isoDateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      } else return "";
    },
    GetLastChapterOfAFiction(id) {
      FictionService.GetLastChapterOfAFiction(id)
        .then((response) => {          
          if(!response.data.ob){
            this.lastChap = 1
          }else{
            const lastChapNum = response.data.ob.NumberChapter;
            this.lastChap = lastChapNum + 1;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getFictionByName(id) {
      this.showspinner = true;
      FictionService.GetFictionByName(id, this.nav)
        .then((response) => {
          this.fiction = response.data.ob;
          this.rating = response.data.ob.AverageRating;
          this.IdFiction = this.fiction.Id;
          this.IdGame = this.fiction.Game.Id;
          this.Author = this.fiction.User.UserName;
          this.AuthorId = this.fiction.User.Id;
          this.Title = this.fiction.Title;
          this.backgroundImageFiction = this.fiction.Image;
          this.TypeFiction = this.fiction.FictionKinds;
          this.listOfCharacter = this.fiction.Game.GameCharacters;
          this.Gamers = this.fiction.Game.GameGamers;
          this.Summary = this.fiction.Summary;
          this.dateCreation = this.fiction.DateCreation;
          this.nbChapter = this.fiction.lenght;
          this.illustration = this.fiction.FictionIllustrations;
          this.Kinds = this.fiction.FictionKinds;
          this.nbIllus =  Object.keys(this.illustration).length;
          this.nbBackground =  Object.keys(this.backgroundImageFiction).length;
          if (this.fiction.Chapters.length > 0) {
            this.GetLastChapterOfAFiction(this.IdFiction);
          }
          this.showspinner = false;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>