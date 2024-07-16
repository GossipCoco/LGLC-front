<template>
  <div>
    <Carousel>
      <Slide v-for="(character, slide) in Characters" :key="slide">
        <div class="carousel__item">
          {{character.Character.CurrentName}}
            <img
              class="img-fluid"
              :src="'/images/Characters/' + character.Character.Image"
              :alt="character.Character.CurrentName"
            />
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>
<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  name: "CarrouselCharacter",
  props: ["Characters"],
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      allCharacters: null,
    };
  },
  created() {
    this.allCharacters = this.Characters;
  },
};
</script>
