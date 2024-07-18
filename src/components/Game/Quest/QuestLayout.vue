<template>
  <div class="dashboard-max-card-container card one-quest-container">
    <div class="card-header">
      <h2>Liste des quêtes à réaliser</h2>
    </div>
    <div v-if="showspinner" class="d-flex justify-content-center">
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-if="!showspinner" class="row list-fiction-card-container">
      <div
        class="col-sm-3 mb-3 mb-sm-0 quest--global-container"
        v-for="(quest, index) in allQuests"
        :key="index"
      >
        <div
          class="card quest-container mb-3"
          v-for="(image, index) in quest.QuestImages"
          :key="index"
        >
          <div class="quest-image-container">
            <div class="card-header quest-title">
              <h4>{{ quest.Title }}</h4>
            </div>
            <div class="card-body one-quest">
              <div
                class="card-img-top background-image-quest-image-container"
              >
              <img :src="'/images/Fictions/'+ image.Image" />
            </div>

              <div class="quest-button-text">
                <p class="quest-description">{{ quest.Description }}</p>
                <p class="quest-button-link">
                  <router-link
                    :to="'/QuestById/' + quest.Id"
                    type="button"
                    class="btn btn-primary"
                  >
                    Relever le défi
                  </router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row pagination-container">
      <div class="row">
        <div class="pagination-container">
          <div class="row bottom-top-dashboard">
            <div v-if="showspinner" class="d-flex justify-content-center">
              <div class="spinner-border text-success" role="status"></div>
            </div>
          </div>
          <pagination
            v-if="!showspinner"
            v-bind:nav="nav"
            v-bind:filters="filters"
            v-bind:getDatas="'QuestPagination'"
            @QuestPagination="QuestPagination"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuestService from "../../../services/QuestService";
import Pagination from "../../Components/GenericComponent/Pagination.vue";
import functions from "../../../services/functions";
export default {
  name: "Quest",
  components: { Pagination },
  data() {
    return {
      userCurrent: null,
      showspinner: false,
      allQuests: {},
      Title: null,
      Quest: null,
      NbPoints: null,
      nbQuests: null,
      filters: [],
      nav: {
        current: 0,
        pages: 0,
        step: 6,
      },
    };
  },
  provide() {
    return {
      allQuests: this.allQuests,
    };
  },
  created() {
    this.userCurrent = this.$store.state.auth.user.usrID;
    this.GetAllQuests(this.nav);
    this.GetTotalQuest();
  },
  watch: {
    $route() {
      this.initPage();
    },
  },
  methods: {
    initPage() {
      this.showspinner = true;
      Promise.all([
        this.GetTotalQuest(),
        this.GetAllQuests(this.nav.current),
      ]).then(() => {
        this.showspinner = false;
      });
    },
    QuestPagination(e) {
      console.log(e);
      this.nav.current = e;
      this.GetAllQuests(this.nav);
    },
    GetTotalQuest() {
      QuestService.GetTotalQuest()
        .then((response) => {
          console.log(response);
          this.nbQuests = response.data.ob;
          console.log(this.nbQuests);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    GetAllQuests(nav) {
      QuestService.GetAllQuests(nav)
        .then((response) => {
          this.allQuests = response.data.ob;
          this.showspinner = false;
          functions.CalcPagination(
            this.nbQuests,
            this.showPagination,
            this.nav,
            this.loading
          );
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>