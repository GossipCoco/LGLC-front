<template>
  <div class="col-6">
    <Carousel class="width-24-vh">
      <Slide v-for="(character, slide) in Characters" :key="slide">
        <div class="display-flex-column align-items-content-justify-content carousel__item">
          <img v-if="character.Character"
              class="height-auto width-15-vh"
              :src="character.Character.Image"
              :alt="character.Character.CurrentName"
            />
            <img v-else-if="character.Gamer"
              class="height-auto width-15-vh"
            :src="character.Gamer.Image"
              :alt="character.Gamer.CurrentName"
            />
            <p v-if="character.Character">{{character.Character.CurrentName}}</p>
            <p v-if="character.Gamer">{{character.Gamer.CurrentName}}</p>
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
