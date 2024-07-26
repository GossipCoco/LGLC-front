<template>
<<<<<<< HEAD
<div class="card-body">
      <div v-if="showspinner" class="d-flex justify-content-center">
        <div class="spinner-border text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div class="row list-fiction-card-container" v-else>
        <!-- <SummaryFiction v-bind:games="games" /> -->
        <div
          class="col-3 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 mb-3 mb-sm-3 mb-3 mb-sm-3"
          v-for="(game, index) in games"
          :key="index"
        >
          <div
            class="card mb-3"
            style="max-width: 440px; max-height: 240px"
            v-for="(fiction, index) in game.Fiction"
            :key="index"
          >
            <div class="row g-0">
              <div class="col-md-6">
                <div
                  class="image-fiction-container"
                  v-bind:style="{
                    backgroundImage:
                      'url(/images/Fictions/' + fiction.Image + ')',
                  }"
                ></div>
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h5 class="card-title" style="color: black">
                    {{ fiction.Title }}
                  </h5>
                  <p
                    class="card-text"
                    style="color: black; font-size: 14px"
                    v-html="truncateText(fiction.Summary, 35)"
                  ></p>
                  <p class="card-text" style="color: black">
                    <small class="text-body-secondary">
                      <router-link
                        class="link-text-a"
                        :to="'/fiction/' + fiction.Id"
                        >Lire</router-link
                      >
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row pagination-container">
      <Pagination
        v-if="!showspinner"
        :nav="nav"
        :filters="filters"
        :getDatas="'GamesPagination'"
        @GamesPagination="GamesPagination"
      />
    </div>
=======
  <div class="card-body">
    <spinner v-if="showspinner"/>
    <AllCardsFictions v-else v-bind:games="games" />    
  </div>
  <div class="row pagination-container">
    <Pagination
      v-if="!showspinner"
      :nav="nav"
      :filters="filters"
      :getDatas="'GamesPagination'"
      @GamesPagination="GamesPagination"
    />
  </div>
>>>>>>> dev3
</template>
<script>
import Pagination from "../../Components/GenericComponent/Pagination.vue";
import GameService from "../../../services/GameService";
import AllCardsFictions from "./AllCardsFictions.vue";
import Spinner from "../../Components/GenericComponent/Spinner.vue";
export default {
  name: "SummaryFiction",
  components: { AllCardsFictions, Pagination, Spinner },
  data() {
    return {
      showspinner: false,
      usrId: "",
      NbAllMyGamesFictions: 0,
      games: [],
      filters: [],
      nav: {
        current: 0,
        pages: 0,
        step: 6,
      },
    };
  },
  created() {
    this.usrId = ""; // Assurez-vous de définir ou récupérer l'ID utilisateur
    this.initData();
  },
  methods: {
    truncateText(text, maxLength) {
      return text.length <= maxLength
        ? text
        : text.substring(0, maxLength) + "...";
    },
    async initData() {
      this.showspinner = true;
      await this.countAllGames();
      await this.getAllGames(this.nav);
      this.showspinner = false;
    },
    async GamesPagination(page) {
      this.nav.current = page;
      await this.getAllGames(this.nav);
    },
    async countAllGames() {
      try {
        const response = await GameService.countAllGames();
        console.log(response.data.ob);
        this.NbAllMyGamesFictions = response.data.ob;
        this.nav.pages = Math.ceil(this.NbAllMyGamesFictions / this.nav.step);
      } catch (error) {
        console.error(error);
      }
    },
    async getAllGames(nav) {
      try {
        const response = await GameService.getAllGames(nav);
        this.games = response.data.ob;
        console.log(this.games);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>