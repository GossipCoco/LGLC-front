<template>
  <div id="quest-by-id" class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 card-global flex-wrap quest-container flex-one width-100-percent">
    <div class="card quest-by-id-card background-color-main-lineart width-100-percent">
      <card-header v-bind:Title="quest.Title"><router-link class="btn btn-primary" to="/Quest">Retour à la liste de quêtes</router-link></card-header> />
      <div class="card-body">
        <div class="parallax-container width-100-percent">
          <QuestMissionTarget v-bind:questDatas="quest" />
          <QuestQuestion v-if="quest.TypeQuest === 'question'" v-bind:questData="quest" />
          <QuestKeyObjects v-if="quest.TypeQuest === 'object'" v-bind:findobjects="quest.QuestKeyObjects"/>
          <QuestLayers v-bind:layersData="layers" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import QuestService from "../../../services/QuestService";
import { Toast } from "bootstrap"; // Import Bootstrap's Toast component
import CardHeader from "../../Components/GenericComponent/CardHeader.vue";
import QuestMissionTarget from "./Components/QuestMissionTarget.vue";
import QuestQuestion from "./Components/QuestQuestion.vue";
import QuestLayers from "./Components/QuestLayers.vue";
import QuestKeyObjects from "./Components/QuestKeyObjects.vue";

export default {
  name: "QuestById",
  components: { CardHeader, QuestQuestion, QuestMissionTarget, QuestLayers, QuestKeyObjects },
  data() {
    return {
      quest: {},
      url: null,
      layers: [],
      showReward: false,
      translateZ: null,
      translateY: null,
      translateX: null,
      scale: null,
    };
  },
  created() {
    this.url = this.$route.params.id;
    this.GetQuestById(this.$route.params.id);
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    GetQuestById(id) {
      QuestService.GetQuestById(id)
        .then((response) => {
          console.log(response.data.ob);
          this.quest = response.data.ob;
          this.layers = response.data.ob.QuestParallaxes.map((item) => ({
            Image: `/images/parallax/${item.Parallax.Image}`,
            Position: item.Parallax.Position,
            translateZ: item.Parallax.translateZ,
            translateY: item.Parallax.translateY,
            translateX: item.Parallax.translateX,
            scale: item.Parallax.scale,
          }));
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleScroll() {
      const layers = document.querySelectorAll(".parallax-layer");
      const scrollTop = window.scrollY;
      layers.forEach((layer, index) => {
        const speed = (index + 1) * 0.75;
        const yPos = -(scrollTop * speed);
        layer.style.transform = `translate3d(0rem, ${yPos}px, 0rem)`;
      });
    },
    showToast() {
      const toastEl = document.getElementById("liveToast");
      const toast = new Toast(toastEl);
      toast.show();
    },
  },
};
</script>
