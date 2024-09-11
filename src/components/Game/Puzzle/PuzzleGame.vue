<template>
  <div id="puzzle-game">
    <CardHeader v-bind:Title="'Jeu de Puzzle'" />
    <div class="card-body">
      <div class="display-flex-row">
        <div class="title-puzzle">
          <button
            type="button"
            class="btn btn-primary shufflePieces"
            @click="shufflePieces"
          >
            Mélanger les pièces
          </button>
          <button
            type="button"
            class="btn btn-primary shufflePieces"
            @click="changeImage"
          >
            Changer l'image
          </button>
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
      <div class="puzzle-global-game">
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
</template>
<script>
import Images from "../../../Datas/DatasReactives/ImagesPuzzle";
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
      images: Images,
      imagesByRequest: {},
      selectedImage: "",
      imageWidth: 0,
      imageHeight: 0,
      draggedIndex: null,
      isSolved: false,
      startTime: null, // Pour enregistrer l'heure de début
      elapsedTime: 0, // Temps écoulé en secondes
      timerInterval: null, // Référence pour le setInterval du timer
      points: 1000, // Points de départ
      pointReductionRate: 10, // Réduction des points par seconde
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

    calculatePoints() {
      this.points = Math.max(
        0,
        1000 - this.elapsedTime * this.pointReductionRate
      );
    },

    // Appeler startTimer au début du jeu
    createPieces() {
      this.pieces = [];
      this.shuffledPieces = [];
      const pieceWidth = this.imageWidth / 3;
      const pieceHeight = this.imageHeight / 3;
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
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
      this.startTimer(); // Démarrer le timer quand les pièces sont prêtes
    },

    // Appeler stopTimer quand le puzzle est résolu
    checkIfSolved() {
      this.isSolved = this.shuffledPieces.every((piece, index) => {
        const correctPiece = this.pieces[index];
        return piece.row === correctPiece.row && piece.col === correctPiece.col;
      });
      if (this.isSolved) {
        this.stopTimer(); // Arrêter le timer si le puzzle est résolu
      }
    },
    GetAllIllustrations() {
      ImageService.GetAllIllustrations()
        .then((response) => {
          this.imagesByRequest = response.data.ob.map(
            (item) => "/images/Fictions/" + item.Id
          );
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