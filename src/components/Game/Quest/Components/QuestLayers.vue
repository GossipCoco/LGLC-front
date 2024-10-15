<template>
  <div
    v-for="(layer, index) in layersData"
    :key="index"
    :style="{
      backgroundImage: `url(${layer.Image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      zIndex: layer.Position,
      transform: `translateZ(${layer.translateZ}) translateY(${layer.translateY}) translateX(${layer.translateX}) scale(${layer.scale})`,
    }"
    class="parallax-layer width-100-percent"
  ></div>
</template>
<script>
export default {
  name: "QuestLayers",
  props: ["layersData"],
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
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const layers = document.querySelectorAll(".parallax-layer");
      const scrollTop = window.scrollY;
      layers.forEach((layer, index) => {
        const speed = (index + 1) * 0.75;
        const yPos = -(scrollTop * speed);
        layer.style.transform = `translate3d(0rem, ${yPos}px, 0rem)`;
      });
    },
  },
};
</script>