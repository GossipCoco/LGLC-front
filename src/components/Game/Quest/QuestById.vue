<template>
  <div id="quest-by-id" class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 card-global quest-container flex-one">
    <div class="card quest-by-id-card background-color-main-lineart">
      <card-header v-bind:Title="quest.Title" />      
      <div class="card-body">
        <div class="parallax-container">
          <QuestMissionTarget v-bind:questDatas="quest"/>
          <div class="card-container-parallax">
            <div class="card" width="200px" height="200px">
              <div v-if="quest.TypeQuest === 'question'">
                <QuestQuestion v-bind:questData="quest"/>                
              </div>
            </div>
          </div>
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
import QuestMissionTarget from './Components/QuestMissionTarget.vue'
import QuestQuestion from "./Components/QuestQuestion.vue";
import QuestLayers from "./Components/QuestLayers.vue";


export default {
  name: "QuestById",
  components: { CardHeader, QuestQuestion, QuestMissionTarget, QuestLayers },
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
