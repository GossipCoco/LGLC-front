<template>
  <div class="fiction-globale-container card fiction-container">
    <div v-if="showspinner" class="d-flex justify-content-center">
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
<<<<<<< HEAD
    <div class="card-header title-chapter-container">
      <Rating :fictionId="IdFiction" :rating="rating" />
      <div class="title-author-container">
        <h1>{{ Title }}</h1>
        <div class="info-fan">
          <h3>
            par
            <router-link :to="'/getUserBy/' + Author" class="author-text">
              {{ Author }}</router-link
            >
          </h3>
          <p>{{ formatDate(dateCreation) }}</p>
        </div>
      </div>
      <div class="create-chapter-btn-container">
        <p>
          <router-link
            type="button"
            class="btn btn-primary"
            v-if="AuthorId === usrCurrent"
            :to="'/fiction/createChapter/' + IdFiction"
            v-bind="lastChap"
          >
            Créer un chapitre {{ lastChap }}
          </router-link>
        </p>
=======
    <div
      id="card-fiction-container"
      class="card-header title-chapter-container"
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
      <div class="">
        <router-link
          type="button"
          class="btn btn-primary"
          :to="'/allFictions/' + Author"
          >Retour à la liste des fictions</router-link
        >
>>>>>>> dev2
      </div>
    </div>
    <div class="card-body">
      <div class="one-fiction-container">
<<<<<<< HEAD
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
=======
        <div class="left-side-container">
          <div class="image-fiction-container" v-bind:style="{ backgroundImage: 'url(/images/Fictions/' + backgroundImageFiction + ')'}"></div>
          <div class="all-characters-of-fiction">
            <AddANewCharacterModal v-if="AuthorId === usrCurrent" v-bind:IdGame="IdGame"/>            
            <CarrouselCharacter v-bind:Characters="listOfCharacter" />
>>>>>>> dev2
          </div>
        </div>
        <div class="character-chapters-fiction-container">
          <div class="character-chapters-container">
<<<<<<< HEAD
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
=======
            <div v-if="nbIllus > 0">
              <div class="illustration-background" v-for="(illus, index) in illustration" :key="index">
                <div :style="{ backgroundImage:'url(/images/Fictions/' + illus.IllustrationId + ')'}" class="background-fiction-contain">
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
>>>>>>> dev2
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FictionService from "../../../services/FictionService";
<<<<<<< HEAD
// import GameService from "../../../services/GameService";
import AddANewCharacterModal from "./AddANewCharacterModal.vue";
import Rating from "./Rating.vue";
=======
import AddANewCharacterModal from "./AddANewCharacterModal.vue";
import Rating from "./Rating.vue";
import CarrouselCharacter from "./CarrouselCharacter.vue";
import TitleFiction from "./TitleFiction.vue";
import ListOfChapter from "./ListOfChapters.vue";
>>>>>>> dev2

export default {
  name: "FictionContain",
  inject: ["user"],
  components: {
    AddANewCharacterModal,
    Rating,
<<<<<<< HEAD
=======
    TitleFiction,
    CarrouselCharacter,
    ListOfChapter,
>>>>>>> dev2
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
<<<<<<< HEAD
=======
      nbIllus: null,
>>>>>>> dev2
    };
  },
  created() {
    this.url = this.$route.params.id;
    this.getFictionByName(this.url);
<<<<<<< HEAD
    // this.GetLastChapterOfAFiction(this.url)
=======
    this.GetLastChapterOfAFiction(this.url)
>>>>>>> dev2
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
<<<<<<< HEAD
          const lastChapNum = response.data.ob;
          this.lastChap = lastChapNum.NumberChapter + 1;
=======
          console.log(response)
          const lastChapNum = response.data.ob.NumberChapter;
          this.lastChap = lastChapNum + 1;
>>>>>>> dev2
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
<<<<<<< HEAD
          console.log(this.fiction);
          this.rating = this.fiction.AverageRating;

=======
          this.rating = response.data.ob.AverageRating;
>>>>>>> dev2
          this.IdFiction = this.fiction.Id;
          this.IdGame = this.fiction.Game.Id;
          this.Author = this.fiction.User.UserName;
          this.AuthorId = this.fiction.User.Id;
          this.Title = this.fiction.Title;
          this.backgroundImageFiction = this.fiction.Image;
          this.listOfCharacter = this.fiction.Game.GameCharacters;
          this.Summary = this.fiction.Summary;
          this.dateCreation = this.fiction.DateCreation;
<<<<<<< HEAD
          this.nbChapter = this.fiction.Chapters.length;
          this.illustration = this.fiction.FictionIllustrations;
          if (this.fiction.Chapters.length > 0) {
            this.GetLastChapterOfAFiction(this.url);
=======
          this.nbChapter = this.fiction.lenght;
          this.illustration = this.fiction.FictionIllustrations;
          this.nbIllus = Object.keys(this.illustration).length;
          if (this.fiction.Chapters.length > 0) {
            this.GetLastChapterOfAFiction(this.IdFiction);
>>>>>>> dev2
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