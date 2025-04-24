<template>
  <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 card-global">
    <div class="card background-lineart border-none fiction-card">
      <TitleHeaderDashboard v-bind:title="'Mes 4 derniers chapitres'" v-bind:type="'chapters'"/>
      <div class="card-body last-chapter-card display-flex-column align-items-content-justify-content height-70-vh">
        <div
          class="display-flex-row list-all-fictions-globale--container three-last-chapters-container"
          v-for="(chapter, index) in FiveLastChapters"
          :key="index"
        >
            <ImageRondDashboard
              v-bind:src=" chapter.Image"
              v-bind:alt="chapter.Image"
            />
            <fiction-text
            v-bind:FictionTitle="chapter.Fiction.Title"
            v-bind:ChapterTitle="chapter.Title"
            />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FictionService from "../../../services/FictionService";
import TitleHeaderDashboard from "../../Components/SpecificComponent/TitleHeaderDashboard.vue";
import ImageRondDashboard from "../../Components/SpecificComponent/ImageRondDashboard.vue";
import FictionText from "../ComponentGeneric/FictionText.vue";
export default {
  name: "ExtractLastChap",
  components: { TitleHeaderDashboard, ImageRondDashboard,
    FictionText
   },
  data() {
    return {
      usr: this.$store.state.auth.user.usrID,
      FiveLastChapters: {},
      Title: null,
      Fiction: null,
    };
  },
  created() {
    this.GetFiveLastChapByUser(this.usr);
  },
  methods: {
    GetFiveLastChapByUser(user) {
      FictionService.GetFiveLastChapByUser(user)
        .then((response) => {
          this.FiveLastChapters = response.data.ob;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>