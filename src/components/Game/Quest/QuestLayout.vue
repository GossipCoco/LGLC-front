<template>
  <div class="dashboard-max-card-container card one-quest-container">
    <CardHeader v-bind:Title="'Liste des quêtes à réaliser'" />
    <Spinner v-if="showspinner" />
    <div v-if="!showspinner" class="row list-fiction-card-container">
      <div
        class="col-sm-3 mb-3 mb-sm-0 display-flex-row quest--global-container"
        v-for="(quest, index) in allQuests"
        :key="index"
      >
        <div
          class="card display-flex-column quest-container mb-3"
          v-for="(image, index) in quest.QuestImages"
          :key="index"
        >
          <QuestCard v-bind:quest="quest" v-bind:image="image" />
        </div>
      </div>
    </div>
    <div class="row pagination-container">
      <div class="row">
        <div class="pagination-container">
          <div class="row bottom-top-dashboard">
            <Spinner v-if="showspinner" />
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
import CardHeader from "../../Components/GenericComponent/CardHeader.vue";
import QuestCard from "./QuestCard.vue";
import Spinner from "../../Components/GenericComponent/Spinner.vue";
export default {
  name: "Quest",
  components: { Spinner, QuestCard, CardHeader, Pagination },
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
        step: 4,
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
    this.initPage();
    // this.GetAllQuests(this.nav);
    // this.GetTotalQuest();
  },
  watch: {
    $route() {
      this.initPage();
    },
  },
  methods: {
    initPage() {
      this.showspinner = true;
      this.GetTotalQuest()
      this.GetAllQuests(this.nav)
    },
    QuestPagination(e) {
      this.nav.current = e;
      this.GetAllQuests(this.nav);
    },
    GetTotalQuest() {
      QuestService.GetTotalQuest()
        .then((response) => {
          this.nbQuests = response.data.ob;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    GetAllQuests(nav) {
      QuestService.GetAllQuests(nav)
        .then((response) => {
          this.allQuests = response.data.ob;
          console.log(this.allQuests)
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