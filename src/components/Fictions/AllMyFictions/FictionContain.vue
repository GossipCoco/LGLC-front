<template>
  <div class="fiction-globale-container card display-flex-column fiction-container flex-one opensans-text">
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
        <router-link :to="'/CommentByFiction/'+Title"><img src="../../../../public/images/icons/comments-solid.svg" /></router-link>
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
          >Retour à la liste des fictions</router-link>

    </div>
    <div class="card-body">
      <div class="one-fiction-container">
        <div class="left-fiction-summary-container">
          <div
            class="image-fiction-container"
            v-bind:style="{
              backgroundImage:
                'url(/images/Fictions/' + backgroundImageFiction + ')',
            }"
          ></div>
          <div class="all-characters-of-fiction">
            <div class="button-modal">
              <AddANewCharacterModal
                v-if="AuthorId === usrCurrent"
                v-bind:IdGame="IdGame"
              />
            </div>
            <div class="all-characters-list-container">
              <div
                class="characters-list-container"
                v-for="(character, index) in listOfCharacter"
                :key="index"
              >               
                <img
                  :src="'/images/Characters/' + character.Character.Image"
                  v-if="character.Character"
                  class="character-image"
                />
                <span v-if="character.Character">
                  {{ character.Character.CurrentName }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="character-chapters-fiction-container  background-summary-global-container">
          <div class="character-chapters-container">
            <div
              class="illustration-background"
              v-for="(illus, index) in illustration"
              :key="index"
            >
              <div
                :style="{
                  backgroundImage:
                    'url(/images/Fictions/' + illus.IllustrationId + ')',
                }"
                class="background-fiction-contain"
              >
                <div class="opacity-container">
                  <div class="list-of-chapters-content">
                    <ul>
                      <li
                        v-for="(chapter, index) in fiction.Chapters"
                        :key="index"
                      >
                        <router-link
                          class="dropdown-item"
                          :to="'/chapter/' + chapter.Title"
                        >
                          {{ chapter.Title }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                  <div class="summary-container" v-html="Summary"></div>
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
// import GameService from "../../../services/GameService";
import AddANewCharacterModal from "./AddANewCharacterModal.vue";
import Rating from "./Rating.vue";

export default {
  name: "FictionContain",
  inject: ["user"],
  components: {
    AddANewCharacterModal,
    Rating,
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
    };
  },
  created() {
    this.url = this.$route.params.id;
    this.getFictionByName(this.url);
    // this.GetLastChapterOfAFiction(this.url)
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
          const lastChapNum = response.data.ob;
          this.lastChap = lastChapNum.NumberChapter + 1;
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
          console.log(this.fiction);
          this.rating = this.fiction.AverageRating;

          this.IdFiction = this.fiction.Id;
          this.IdGame = this.fiction.Game.Id;
          this.Author = this.fiction.User.UserName;
          this.AuthorId = this.fiction.User.Id;
          this.Title = this.fiction.Title;
          this.backgroundImageFiction = this.fiction.Image;
          this.listOfCharacter = this.fiction.Game.GameCharacters;
          this.Summary = this.fiction.Summary;
          this.dateCreation = this.fiction.DateCreation;
          this.nbChapter = this.fiction.Chapters.length;
          this.illustration = this.fiction.FictionIllustrations;
          if (this.fiction.Chapters.length > 0) {
            this.GetLastChapterOfAFiction(this.url);
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