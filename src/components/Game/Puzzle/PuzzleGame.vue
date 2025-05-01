<template>
  <div id="puzzle-game">
    <CardHeader v-bind:Title="'Jeu de Puzzle'" />
    <div class="card-body">
      <div class="display-flex-row">
        <div class="display-flex-column">
          <div class="display-flex-row width-70-vh">
            <div class="title-puzzle display-flex-column">
              <button
                type="button"
                class="btn btn-primary shufflePieces margin-2vh-0-0-0"
                @click="shufflePieces"
              >
                Mélanger les pièces
              </button>
              <button
                type="button"
                class="btn btn-primary shufflePieces margin-2vh-0-0-0"
                @click="changeImage"
              >
                Changer l'image
              </button>
            </div>
            <div class="title-puzzle display-flex-column">
              <button
                type="button"
                class="btn btn-primary margin-2vh-0-0-0"
                @click="setDifficulty('facile')"
              >
                Facile (3x3)
              </button>
              <button
                type="button"
                class="btn btn-primary margin-2vh-0-0-0"
                @click="setDifficulty('moyen')"
              >
                Moyen (6x6)
              </button>
              <button
                type="button"
                class="btn btn-primary margin-2vh-0-0-0"
                @click="setDifficulty('difficile')"
              >
                Difficile (9x9)
              </button>
              <div class="puzzle-preview">
                <p>Image de prévisualisation :</p>
                <img
                  :src="selectedImage"
                  alt="Prévisualisation"
                  class="preview-image"
                />
              </div>
            </div>
          </div>
          <div class="display-flex-column">
            <div class="alert alert-success" role="alert">
              <div v-if="isSolved" class="congrats-message">
                Félicitations! Vous avez réussi le puzzle. Vous avez gagné
                {{ points }} points en {{ elapsedTime }} secondes.
              </div>
              <div v-else>
                <p>Temps écoulé : {{ elapsedTime }} secondes</p>
                <p>Points actuels : {{ points }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="display-flex-row align-items-content-justify-content flex-one">
          <div class="puzzle-container" :style="containerStyle">
            <div
              v-for="(piece, index) in shuffledPieces"
              :key="index"
              class="puzzle-piece"
              :style="piece.style"
              draggable="true"
              @dragstart="dragStart($event, index)"
              @dragover="dragOver($event)"
              @drop="drop($event, index)"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EventService from "../../../services/EventService";
import ImageService from "../../../services/ImageService";
import CardHeader from "../../Components/GenericComponent/CardHeader.vue";
export default {
  name: "JeuDePuzzle",
  inject: ["user"],
  components: { CardHeader },
  data() {
    return {
      userCurrent: this.$store.state.auth.user.usrID,
      pieces: [],
      shuffledPieces: [],
      imagesByRequest: {},
      selectedImage: "",
      imageWidth: 0,
      imageHeight: 0,
      draggedIndex: null,
      isSolved: false,
      startTime: null,
      elapsedTime: 0,
      timerInterval: null,
      points: 1000,
      pointReductionRate: 10,
      difficulty: "facile", // Default difficulty level
      gridSize: 3, // Default grid size for 'facile' (3x3)
    };
  },

  created() {
    this.userCurrent = this.$store.state.auth.user.usrID;
    this.changeImage();
    this.GetAllIllustrations();
  },
  computed: {
    containerStyle() {
      return {
        gridTemplateColumns: `repeat(${Math.sqrt(this.pieces.length)}, ${
          this.imageWidth / Math.sqrt(this.pieces.length)
        }px)`,
        gridTemplateRows: `repeat(${Math.sqrt(this.pieces.length)}, ${
          this.imageHeight / Math.sqrt(this.pieces.length)
        }px)`,
        maxHeight: "800px", // Limite la hauteur maximale à 600px
        maxWidth: this.imageWidth + "px", // Assure que la largeur ne dépasse pas la largeur de l'image
        overflow: "hidden", // Ajoute un défilement si nécessaire
      };
    },
  },
  methods: {
    startTimer() {
      this.startTime = Date.now();
      this.timerInterval = setInterval(() => {
        const currentTime = Date.now();
        this.elapsedTime = Math.floor((currentTime - this.startTime) / 1000);
        this.calculatePoints();
      }, 1000); // Mise à jour toutes les secondes
    },

    stopTimer() {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    },

    // Appeler startTimer au début du jeu
    createPieces() {
      this.pieces = [];
      this.shuffledPieces = [];

      // Ajuster la taille de la grille selon la difficulté
      const pieceCount = this.gridSize;
      const pieceWidth = this.imageWidth / pieceCount;
      const pieceHeight = this.imageHeight / pieceCount;

      for (let row = 0; row < pieceCount; row++) {
        for (let col = 0; col < pieceCount; col++) {
          this.pieces.push({
            row,
            col,
            style: {
              backgroundImage: `url('${this.selectedImage}')`,
              backgroundSize: `${this.imageWidth}px ${this.imageHeight}px`,
              backgroundPosition: `-${col * pieceWidth}px -${
                row * pieceHeight
              }px`,
              width: `${pieceWidth}px`,
              height: `${pieceHeight}px`,
              border: "1px solid #000",
            },
          });
        }
      }
      this.shuffledPieces = [...this.pieces];
      this.shufflePieces();
      this.startTimer();
    },
    setDifficulty(level) {
      this.difficulty = level;

      // Modifier la taille de la grille selon la difficulté
      if (level === "facile") {
        this.gridSize = 3; // 3x3
      } else if (level === "moyen") {
        this.gridSize = 6; // 6x6
      } else if (level === "difficile") {
        this.gridSize = 9; // 9x9
      }

      // Recréer les pièces avec la nouvelle difficulté
      this.createPieces();
    },
    calculatePoints() {
      let difficultyMultiplier = 1;
      if (this.difficulty === "moyen") {
        difficultyMultiplier = 1.5;
      } else if (this.difficulty === "difficile") {
        difficultyMultiplier = 2;
      }

      this.points = Math.max(
        0,
        (1000 - this.elapsedTime * this.pointReductionRate) *
          difficultyMultiplier
      );
    },

    // Appeler stopTimer quand le puzzle est résolu
    checkIfSolved() {
      this.isSolved = this.shuffledPieces.every((piece, index) => {
        const correctPiece = this.pieces[index];
        return piece.row === correctPiece.row && piece.col === correctPiece.col;
      });

      if (this.isSolved) {
        this.stopTimer();
        this.calculatePoints(); // calculer les points ici

        const results = {
          foundTreasures: "Puzzle",
          points: this.points,
          elapsedTime: this.elapsedTime,
          difficulty: this.difficulty,
        };

        EventService.saveGameResults(this.userCurrent, results)
          .then((response) => {
            console.log("Results saved:", response.data);
          })
          .catch((error) => {
            console.error("Error saving results:", error);
          });
      }
    },
    GetAllIllustrations() {
      ImageService.GetAllIllustrations()
        .then((response) => {
          this.imagesByRequest = response.data.ob.map((item) => item.Id);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    getRandomImage() {
      const randomIndex = Math.floor(
        Math.random() * this.imagesByRequest.length
      );
      return this.imagesByRequest[randomIndex];
    },
    shufflePieces() {
      this.shuffledPieces = this.shuffledPieces.sort(() => Math.random() - 0.5);
      this.isSolved = false;
    },
    dragStart(event, index) {
      this.draggedIndex = index;
    },
    dragOver(event) {
      event.preventDefault();
    },
    drop(event, index) {
      const draggedPiece = this.shuffledPieces[this.draggedIndex];
      this.shuffledPieces[this.draggedIndex] = this.shuffledPieces[index];
      this.shuffledPieces[index] = draggedPiece;
      this.draggedIndex = null;
      this.checkIfSolved();
    },
    changeImage() {
      this.selectedImage = this.getRandomImage();
      this.loadImage(this.selectedImage);
    },
    loadImage(src) {
      const img = new Image();
      img.onload = () => {
        this.imageWidth = img.width / 2.5;
        this.imageHeight = img.height / 2.5;
        this.createPieces();
      };
      img.src = src;
    },
  },
};
</script>