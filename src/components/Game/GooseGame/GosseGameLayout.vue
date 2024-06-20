<template>
    <div class="dashboard-max-card-container card fiction-container">
        <div class="card-header">
            <h4>Jeu</h4>
        </div>
        <div class="row list-fiction-card-container">
            <div class="game-map-container">
                <img src="/images/Game/Forest.OS-2.webp" alt="Map" class="game-map">
                <div v-for="(square, index) in squares" :key="index" class="game-square"
                    :style="{ top: square.y + 'px', left: square.x + 'px' }" @click="moveCatToSquare(square)"></div>
                <img v-for="cat in cats" :key="cat.id" :src="cat.image"
                    :style="{ top: cat.position.y + 'px', left: cat.position.x + 'px' }" class="game-cat">
            </div>
            <div class="dice-container">
                <button @click="rollDice">Lancer le dé</button>
                <p>Résultat du dé: {{ diceResult }}</p>
                <p>Joueur actuel: {{ currentPlayerIndex + 1 }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GosseGameLayout',
    data() {
        return {
            usrId: this.$store.state.auth.user.usrID,
            cats: [
                {
                    id: 1,
                    image: '/images/Characters/Etoiledefeu.png',
                    position: { x: 100, y: 100 }
                },
                {
                    id: 2,
                    image: '/images/Characters/Etoile_Bleue1.png',
                    position: { x: 200, y: 200 }
                }
            ],
            draggingCat: null,
            offset: { x: 0, y: 0 },
            currentPlayerIndex: 0,
            diceResult: 0,
            squares: [],
            gridSize: 50,
            mapSize: { width: 800, height: 600 },
            movesLeft: 0
        };
    },
    created() {
    this.createGrid();
  },
  methods: {
    createGrid() {
      for (let y = 0; y < this.mapSize.height; y += this.gridSize) {
        for (let x = 0; x < this.mapSize.width; x += this.gridSize) {
          this.squares.push({ x, y });
        }
      }
    },
    rollDice() {
      this.diceResult = Math.floor(Math.random() * 6) + 1;
      this.movesLeft = this.diceResult;
    },
    moveCatToSquare(square) {
      if (this.movesLeft > 0) {
        const currentCat = this.cats[this.currentPlayerIndex];
        const distanceX = Math.abs(currentCat.position.x - square.x);
        const distanceY = Math.abs(currentCat.position.y - square.y);
        if ((distanceX === this.gridSize && distanceY === 0) || 
            (distanceY === this.gridSize && distanceX === 0)) {
          currentCat.position.x = square.x;
          currentCat.position.y = square.y;
          this.movesLeft--;
          if (this.movesLeft === 0) {
            this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.cats.length;
          }
        }
      }
    }
  }
};
</script>

<style>
.game-map-container {
  position: relative;
  width: 800px; /* Same as mapSize width */
  height: 600px; /* Same as mapSize height */
  border: 1px solid #000;
}

.game-map {
  width: 100%;
  height: 100%;
}

.game-square {
  position: absolute;
  width: 50px; /* Same as gridSize */
  height: 50px; /* Same as gridSize */
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
}

.game-cat {
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: grab;
}

.dice-container {
  margin-top: 20px;
}
</style>