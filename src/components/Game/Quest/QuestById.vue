<template>
  <div
    id="quest-by-id"
    class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 card-global quest-container"
  >
    <div class="card quest-by-id-card">
      <card-header v-bind:Title="''">
        <div class="quest-details">
          <div class="display-flex-column">
            <div class="display-flex-column">
              <h2>{{ quest.Title }}</h2>
              <p>{{ quest.Description }}</p>
            </div>
          </div>
        </div>
        <div class="display-flex-column">
          <p class="card-text">
            <router-link to="/Quest" type="button" class="btn btn-primary">
              Retour à la liste des quêtes
            </router-link>
          </p>
          <button class="btn btn-success" @click="completeQuest">
            Compléter la quête
          </button>
          <div v-if="showReward" class="reward-message">
            <p>Félicitations ! Vous avez gagné 100 points !</p>
          </div>
          
        </div>
      </card-header>
      <div class="card-body">
        <div class="parallax-container">
          <div
            v-for="(layer, index) in layers"
            :key="index"
            :style="{
              backgroundImage: `url(${layer.Image})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              zIndex: layer.Position,
            }"
            class="parallax-layer"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuestService from "../../../services/QuestService";
import { Toast } from "bootstrap"; // Import Bootstrap's Toast component
import CardHeader from "../../Components/GenericComponent/CardHeader.vue";

export default {
  name: "QuestById",
  components: { CardHeader },
  data() {
    return {
      quest: {},
      url: null,
      layers: [],
      showReward: false,
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
    handleClick(element) {
      console.log(`Action: ${element.action}`);
    },
    GetQuestById(id) {
      QuestService.GetQuestById(id)
        .then((response) => {
          this.quest = response.data.ob;
          this.layers = response.data.ob.QuestParallaxes.map((item) => ({
            Image: `/images/parallax/${item.Parallax.Image}`,
            Position: item.Parallax.Position,
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
        const speed = (index + 1) * 0.25;
        const yPos = -(scrollTop * speed);
        layer.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
      });
    },
    showToast() {
      const toastEl = document.getElementById("liveToast");
      const toast = new Toast(toastEl);
      toast.show();
    },
    completeQuest() {
      this.showReward = true;
      // Logic to add points to the user's profile can be added here
      setTimeout(() => {
        this.showReward = false;
      }, 3000);
    },
  },
};
</script>
