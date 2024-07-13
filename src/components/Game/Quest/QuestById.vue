<template>
  <div
    id="quest-by-id"
    class="col-xxl-12 col-xl-12 col-lg-312 col-md-12 col-sm-12 col-xs-12 card-global quest-container"
  >
    <div class="card quest-by-id-card">
      <div class="card-header quest-container-header">
        <h2>{{ quest.Title }}</h2>
        <button type="button" class="btn btn-primary" id="liveToastBtn" @click="showToast">
          Ma mission
        </button>

        <div class="toast-container top-50 end-0 translate-middle-y">
          <div
            id="liveToast"
            class="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div class="toast-header" style="width: 350px;">
              <strong class="me-auto">{{ quest.Title }}</strong>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
            <div class="toast-body">{{quest.Description}}</div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="parallax-container">
          <div
            v-for="(layer, index) in layers"
            :key="index"
            :style="{
              backgroundImage: `url(${layer})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
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
import { Toast } from 'bootstrap';  // Import Bootstrap's Toast component

export default {
  name: "QuestById",
  data() {
    return {
      quest: {},
      url: null,
      layers: [
        "/images/parallax/warrior-img01-38.png",
        '/images/parallax/fond--12.png',
        '/images/parallax/warrior-img01-92.png',
      ],
      interactiveElements: [
        {
          top: "20%",
          left: "30%",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          label: "Point 1",
          action: "action1",
        },
        {
          top: "50%",
          left: "50%",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          label: "Point 2",
          action: "action2",
        },
        {
          top: "80%",
          left: "70%",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          label: "Point 3",
          action: "action3",
        },
      ],
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
          console.log(this.quest)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleScroll() {
      const layers = document.querySelectorAll(".parallax-layer");
      const scrollTop = window.scrollY;

      layers.forEach((layer, index) => {
        const speed = (index + 1) * 0.5;
        const yPos = -(scrollTop * speed);
        layer.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
      });
    },
    showToast() {
      const toastEl = document.getElementById('liveToast');
      const toast = new Toast(toastEl);
      toast.show();
    }
  },
};
</script>
