<template>
  <div
    id="mouse-shot"
    class="dashboard-max-card-container border-none background-color-main-lineart flex-one card display-flex-column fiction-container"
  >
    <CardHeader v-bind:Title="'Jeu du chat et de la souris'" />
    <div class="game height-75-vh" @keydown="handleKeyPress" tabindex="0">
      <div
        v-if="gameStarted"
        ref="gameArea"
        :style="{ backgroundImage: 'url(' + backgroundImage + ')' }"
        class="game-area"
        @mousemove="handleMouseMove"
      >
        <img :src="mouseImage" :style="mouseStyle" class="mouse" />
        <img :src="catImage" :style="catStyle" class="cat" />
      </div>
      <button
        class="btn btn-primary"
        type="button"
        v-if="!gameStarted"
        @click="startGame"
      >
        Start Game
      </button>
      <button
        class="btn btn-primary"
        type="button"
        v-if="!gameStarted"
        @click="resetGame"
      >
        Nouvelle Partie
      </button>
      <div v-if="gameOver" class="score">
        <div class="alert alert-success" role="alert">
          Score: {{ score }} / 35
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardHeader from "../../Components/GenericComponent/CardHeader.vue";
// import PointService from '../../../services/PointService';
import EventService from '../../../services/EventService';
export default {
  name: "MouseShot",
  components: { CardHeader },
  data() {
    return {
      mouseImage: "/images/Game/mouse.png", // Adjust path as necessary
      catImage: "/images/Game/Etoiledefeu.png", // Adjust path as necessary
      backgroundImage:
        "/images/paysage/Warriors_3538.png", // Adjust path as necessary
      mouseStyle: { top: "0px", left: "0px" },
      catStyle: { bottom: "20px", left: "50px" },
      score: 0,
      gameStarted: false,
      gameOver: false,
      mouseCount: 35,
      gameDuration: 45000, // 75 seconds
    };
  },
  methods: {
    startGame() {
      this.resetGame();
      this.gameStarted = true;
      this.gameOver = false;
      this.score = 0;
      let interval = setInterval(() => {
        this.dropMouse();
        if (--this.mouseCount <= 0) {
          clearInterval(interval);
          this.gameOver = true;
          this.gameStarted = false;
        }
      }, this.gameDuration / 45);
    },
    resetGame() {
      this.gameOver = false;
      this.gameStarted = false;
      this.score = 0;
      this.mouseCount = 35;
      this.catStyle.left = "50px"; // Reset the position of the cat
    },
    dropMouse() {
      const gameArea = this.$refs.gameArea;
      if (!gameArea) return;
      const maxX = gameArea.clientWidth - 100;
      const newX = Math.floor(Math.random() * maxX);
      this.mouseStyle.left = `${newX}px`;
      this.mouseStyle.top = "0px";
      //   let fallDuration = 2000;
      let fallInterval = setInterval(() => {
        let newY = parseInt(this.mouseStyle.top) + 5;
        if (newY < gameArea.clientHeight - 100) {
          this.mouseStyle.top = `${newY}px`;
        } else {
          clearInterval(fallInterval);
          if (
            Math.abs(
              parseInt(this.mouseStyle.left) - parseInt(this.catStyle.left)
            ) < 100
          ) {
            this.score++;
            console.log("score :", this.score);
          }
        }
        //
      }, 10);
      const results = {
        foundTreasures: "ShotMouse",
        points: this.score
      };
      EventService.saveGameResults(this.$store.state.auth.user.usrID, results)
        .then(response => {
          console.log('Results saved:', response.data);
        })
        .catch(error => {
          console.error('Error saving results:', error);
        });
    },
    handleKeyPress(event) {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        let currentPosition = parseInt(this.catStyle.left);
        const moveAmount = event.key === "ArrowLeft" ? -100 : 100; // Smaller increment for smoother movement
        const newPosition = currentPosition + moveAmount;
        if (
          newPosition >= 0 &&
          newPosition <= this.$refs.gameArea.clientWidth - 150
        ) {
          this.moveCat(newPosition);
        }
      }
    },
    handleMouseMove(event) {
      const gameArea = this.$refs.gameArea;
      let newPosition = event.clientX - gameArea.getBoundingClientRect().left;
      if (newPosition >= 0 && newPosition <= gameArea.clientWidth - 150) {
        this.moveCat(newPosition);
      }
    },
    moveCat(position) {
      const gameArea = this.$refs.gameArea;
      if (!gameArea) return;
      this.catStyle.left = `${position}px`;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$el.focus();
    });
    document.addEventListener("keydown", this.handleKeyPress);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  },
};
</script>