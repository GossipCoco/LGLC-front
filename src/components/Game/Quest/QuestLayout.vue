<template>
  <div
    class="border-none background-none flex-one card padding-0 one-quest-container height-32-vh align-items-content-justify-content padding-zero"
  >
    <CardHeader
      class="width-190-vh"
      v-bind:Title="'Liste des quêtes à réaliser'"
    />
    <div class="card-body height-90-vh">
      <Spinner v-if="showspinner" />
      <div
        v-if="!showspinner"
        class="row list-quest-card-container width-180-vh height-70-vh"
      >
        <div class="row width-180-vh">
          <div
            class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-12"
          ></div>
          <div
            class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-10"
          >
            <div class="row width-160-vh">
              <div
                class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 display-flex-row flex-wrap quest--global-container flex-wrap height-40-vh margin-0-0-2vh-0"
                v-for="(quest, index) in allQuests"
                :key="index"
              >
                <div
                  class="card border-none display-flex-column quest-container height-40-vh flex-wrap mb-4 background-lineart-other03"
                  v-for="(image, index) in quest.QuestImages"
                  :key="index"
                >
                  <QuestCard v-bind:quest="quest" v-bind:image="image" />
                </div>
              </div>
            </div>
          </div>
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
        step: 8,
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
  },
  watch: {
    $route() {
      this.initPage();
    },
  },
  methods: {
    async initPage() {
      this.showspinner = true;
      try {
        await this.GetTotalQuest();
        await this.GetAllQuests(this.nav);
      } catch (e) {
        console.log(e);
      } finally {
        this.showspinner = false;
      }
    },
    async QuestPagination(e) {
      this.nav.current = e;
      await this.GetAllQuests(this.nav);
    },
    async GetTotalQuest() {
      try {
        const response = await QuestService.GetTotalQuest();
        this.nbQuests = response.data.ob.count;
      } catch (e) {
        console.log(e);
      }
    },
    async GetAllQuests(nav) {
      try {
        const response = await QuestService.GetAllQuests(nav);
        this.allQuests = response.data.ob;
        functions.CalcPagination(this.nbQuests, this.nav);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>