<template>
  <div
    class="fiction-globale-container background-lineart card display-flex-column fiction-container flex-one opensans-text"
  >
    <div v-if="showspinner" class="d-flex justify-content-center">
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div
      id="card-display-flex-column fiction-container"
      class="card-header display-flex-row"
    >
      <Rating :fictionId="IdFiction" :rating="rating" />
      <div class="Comment-icon">
        <router-link :to="'/CommentByFiction/' + Title"
          ><img src="../../../../public/images/icons/comments-solid.svg"
        /></router-link>
        <br>
        <CreateCommentModal 
          v-bind:fanfiction="Title"
          v-bind:fictionId="IdFiction"                                
        />
      </div>
      <TitleFiction
        v-bind:Title="Title"
        v-bind:Author="Author"
        v-bind:dateCreation="dateCreation"
      />
      <router-link
        type="button"
        class="btn btn-primary"
        :to="'/allFictions/' + Author"
        >Retour à la liste des fictions</router-link
      >
    </div>
    <div class="card-body">
      <div class="display-flex-row flex-one">
        <div class="display-flex-column left-side-container">
          <div
            class="display-flex-column image-fiction-container"
            v-bind:style="{
              backgroundImage:
                'url(' + backgroundImageFiction + ')',
            }"
          ></div>
          <div class="display-flex-column all-characters-of-fiction">
            <AddANewCharacterModal
              v-if="AuthorId === usrCurrent"
              v-bind:IdGame="IdGame"
            />
            <CarrouselCharacter v-bind:Characters="listOfCharacter" />
          </div>
        </div>
        <div
          class="character-chapters display-flex-column fiction-container background-summary-global-container"
        >
          <div class="display-flex-row character-chapters-container">
            <div v-if="nbIllus > 0">
              <div
                class="illustration-background"
                v-for="(illus, index) in illustration"
                :key="index"
              >
                <div :style="{ backgroundImage: 'url(' + illus.IllustrationId + ')'}" class="background-size-cover background-fiction-contain">
                  <ListOfChapter
                    v-bind:AuthorId="AuthorId"
                    v-bind:usrCurrent="usrCurrent"
                    v-bind:IdFiction="IdFiction"
                    v-bind:lastChap="lastChap"
                    v-bind:fiction="fiction"
                    v-bind:Summary="Summary"
                  />
                </div>
              </div>
            </div>
            <div v-else class="background-fiction-contain">
              <ListOfChapter
                v-bind:AuthorId="AuthorId"
                v-bind:usrCurrent="usrCurrent"
                v-bind:IdFiction="IdFiction"
                v-bind:lastChap="lastChap"
                v-bind:fiction="fiction"
                v-bind:Summary="Summary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FictionService from "../../../services/FictionService";
import AddANewCharacterModal from "./AddANewCharacterModal.vue";
import Rating from "./Rating.vue";
import CarrouselCharacter from "./CarrouselCharacter.vue";
import TitleFiction from "./TitleFiction.vue";
import ListOfChapter from "./ListOfChapters.vue";
import CreateCommentModal from "../Comments/CreateCommentModal.vue";

export default {
  name: "FictionContain",
  inject: ["user"],
  components: {
    AddANewCharacterModal,
    Rating,
    TitleFiction,
    CarrouselCharacter,
    ListOfChapter,
    CreateCommentModal
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
        step: 6,
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
      listOfCharacter: {},
      nbChapter: 0,
      rating: 0,
      illustration: null,
      nbIllus: null,
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
          const lastChapNum = response.data.ob.NumberChapter;
          this.lastChap = lastChapNum + 1;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getFictionByName(id) {
      this.showspinner = true;
      FictionService.getFictionByName(id, this.nav)
        .then((response) => {
          this.fiction = response.data.ob;
          this.rating = response.data.ob.AverageRating;
          this.IdFiction = this.fiction.Id;
          this.IdGame = this.fiction.Game.Id;
          this.Author = this.fiction.User.UserName;
          this.AuthorId = this.fiction.User.Id;
          this.Title = this.fiction.Title;
          this.backgroundImageFiction = this.fiction.Image;
          this.listOfCharacter = this.fiction.Game.GameCharacters;
          this.Summary = this.fiction.Summary;
          this.dateCreation = this.fiction.DateCreation;
          this.nbChapter = this.fiction.lenght;
          this.illustration = this.fiction.FictionIllustrations;
          this.nbIllus = Object.keys(this.illustration).length;
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