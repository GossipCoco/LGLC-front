<template>
    <div class="puzzle-container-global">
        <div class="title-puzzle">
            <h1>Jeu de Puzzle</h1>
            <button type="button" class="btn btn-primary shufflePieces" @click="shufflePieces">Mélanger les
                pièces</button>
            <button type="button" class="btn btn-primary shufflePieces" @click="changeImage">Changer l'image</button>
        </div>

        <!-- <p>Utilisateur actuel : {{ userCurrent }}</p> -->
        <div class="puzzle-global-game">
            <div v-if="isSolved" class="congrats-message">
                Félicitations! Vous avez réussi le puzzle.
            </div>
            <div class="puzzle-container" :style="containerStyle">
                <div v-for="(piece, index) in shuffledPieces" :key="index" class="puzzle-piece" :style="piece.style"
                    draggable="true" @dragstart="dragStart($event, index)" @dragover="dragOver($event)"
                    @drop="drop($event, index)"></div>
            </div>
        </div>
    </div>

</template>
<script>
import Images from '../../../Datas/DatasReactives/ImagesPuzzle'
import ImageService from '../../../services/ImageService'
export default {
    name: 'JeuDePuzzle',
    inject: ["user"],
    data() {
        return {
            userCurrent: this.$store.state.auth.user.usrID,
            pieces: [],
            shuffledPieces: [],
            images: Images,
            imagesByRequest: {},
            selectedImage: '',
            imageWidth: 0,
            imageHeight: 0,
            draggedIndex: null,
            isSolved: false
        };
    },
    created() {
        this.userCurrent = this.$store.state.auth.user.usrID;
        this.changeImage();
        this.GetAllIllustrations()
    },
    computed: {
        containerStyle() {

            // const size = Math.sqrt(this.pieces.length);
            // const pieceSize = this.imageHeight / size;
            return {
                // gridTemplateColumns: `repeat(${size}, ${pieceSize}px)`,
                // gridTemplateRows: `repeat(${size}, ${pieceSize}px)`,
                gridTemplateColumns: `repeat(${Math.sqrt(this.pieces.length)}, ${this.imageWidth / Math.sqrt(this.pieces.length)}px)`,
                gridTemplateRows: `repeat(${Math.sqrt(this.pieces.length)}, ${this.imageHeight / Math.sqrt(this.pieces.length)}px)`,
                maxHeight: '800px',  // Limite la hauteur maximale à 600px
                maxWidth: this.imageWidth + 'px',  // Assure que la largeur ne dépasse pas la largeur de l'image
                overflow: 'hidden'  // Ajoute un défilement si nécessaire
            };
        }
    },

    methods: {
        GetAllIllustrations() {
            ImageService.GetAllIllustrations()
                .then((response) => {
                    this.imagesByRequest = response.data.ob.map(item => '/images/Fictions/' + item.Id);
                })
                .catch(err => {
                    console.error(err);
                })
        },
        getRandomImage() {
            const randomIndex = Math.floor(Math.random() * this.imagesByRequest.length);
            return this.imagesByRequest[randomIndex];
        }, createPieces() {
            this.pieces = [];
            this.shuffledPieces = [];
            // const numPieces = 9; // Supposons un puzzle 3x3
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
                            backgroundPosition: `-${col * pieceWidth}px -${row * pieceHeight}px`,
                            width: `${pieceWidth}px`,
                            height: `${pieceHeight}px`,
                            border: '1px solid #000'
                        }
                    });
                }
            }
            this.shuffledPieces = [...this.pieces];
            this.shufflePieces();
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
        checkIfSolved() {
            this.isSolved = this.shuffledPieces.every((piece, index) => {
                const correctPiece = this.pieces[index];
                return piece.row === correctPiece.row && piece.col === correctPiece.col;
            });
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

    }
}
</script>

<style scoped>
.puzzle-container {
    display: grid;
}

.puzzle-piece {
    background-repeat: no-repeat;
    cursor: pointer;
}

.congrats-message {
    margin-top: 20px;
    font-size: 18px;
    color: green;
    font-weight: bold;
}
</style>