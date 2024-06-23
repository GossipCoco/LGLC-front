<template>
  <div class="dashboard-max-card-container card fiction-container">
    <div class="card-head"><h2>Chasse au trésor</h2></div>
    <div class="card-body">
      <div class="game-container" @keydown="handleKeydown" tabindex="0">
        <div class="score-banner">
          <div>Treasures: {{ foundTreasures }}</div>
          <div>Points: {{ points }}</div>
        </div>
        <img :src="backgroundImage" alt="background" class="background">
        <img :src="characterImage" :style="characterStyle" alt="character" class="character">
        <div v-for="(treasure, index) in treasures" :key="index" :style="treasureStyle(treasure)" class="treasure">💎
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import EventService from '../../../services/EventService';

export default {
  name: 'TreasureHunt',
  data() {
    return {
      backgroundImage: '/images/Backgrounds/_3b330c06-8a19-4a0b-8f57-feaa180a9dbf.jpeg', // Path to your background image in the public folder
      characterImage: '/images/Characters/Ravenpaw.warrior.webp', // Path to your character image in the public folder
      characterPosition: { top: 50, left: 50 }, // Initial position of the character
      treasures: [],
      foundTreasures: 0, // Counter for found treasures
      points: 0 // Counter for points
    }
  },

  computed: {
    characterStyle() {
      return {
        usrId: this.$store.state.auth.user.usrID,
        top: this.characterPosition.top + '%',
        left: this.characterPosition.left + '%',
        position: 'absolute',
        width: '5%',
        height: 'auto',
      }
    }
  },
  created() {
    this.generateRandomTreasures();
  },
  methods: {
    handleKeydown(event) {
      switch (event.key) {
        case 'ArrowUp':
          this.moveCharacter(0, -5);
          break;
        case 'ArrowDown':
          this.moveCharacter(0, 5);
          break;
        case 'ArrowLeft':
          this.moveCharacter(-5, 0);
          break;
        case 'ArrowRight':
          this.moveCharacter(5, 0);
          break;
      }
      this.checkForTreasure();
    },
    moveCharacter(dx, dy) {
      let newTop = this.characterPosition.top + dy;
      let newLeft = this.characterPosition.left + dx;
      // Ensure the character stays within bounds
      if (newTop >= 0 && newTop <= 95) {
        this.characterPosition.top = newTop;
      }
      if (newLeft >= 0 && newLeft <= 95) {
        this.characterPosition.left = newLeft;
      }
    },
    generateRandomTreasures() {
      const numberOfTreasures = Math.floor(Math.random() * 10) + 1; // Random number of treasures between 1 and 10
      this.treasures = [];
      for (let i = 0; i < numberOfTreasures; i++) {
        this.treasures.push({
          top: Math.random() * 95, // Random position between 0 and 95%
          left: Math.random() * 95 // Random position between 0 and 95%
        });
      }
    },
    checkForTreasure() {
      let foundTreasure = false;
      this.treasures = this.treasures.filter(treasure => {
        const distance = Math.sqrt(
          Math.pow(this.characterPosition.top - treasure.top, 2) +
          Math.pow(this.characterPosition.left - treasure.left, 2)
        );
        if (distance <= 5) {
          foundTreasure = true;
          this.foundTreasures++;
          this.points += 10; // Each treasure gives 10 points
          return false;
        }
        return true;
      });

      if (foundTreasure) {
        if (this.treasures.length === 0) {
          // All treasures found
          Swal.fire({
            title: 'Félicitations!',
            text: 'Vous avez trouvé tous les trésors!',
            icon: 'success',
            confirmButtonText: 'Super!'
          });
          this.saveResults();
        } else {
          // A single treasure found
          Swal.fire({
            title: 'Félicitations!',
            text: 'Vous avez trouvé un trésor!',
            icon: 'success',
            confirmButtonText: 'Super!'
          });
        }
      }
    },
    saveResults() {
      // This method would call your backend to save the results
      const results = {
        foundTreasures: this.foundTreasures,
        points: this.points
      };

      EventService.saveGameResults(this.$store.state.auth.user.usrID, results)
        .then(response => {
          console.log('Results saved:', response.data);
        })
        .catch(error => {
          console.error('Error saving results:', error);
        });
    },
    treasureStyle(treasure) {
      return {
        top: treasure.top + '%',
        left: treasure.left + '%',
        position: 'absolute',
        fontSize: '2em',
      }
    }
  },
  mounted() {
    this.$el.focus();
  }
}
</script>

<style scoped>
.game-container {
  position: relative;
  width: 95%;
  height: 90%;
  overflow: hidden;
  outline: none;
}

.background {
  width: 93%;
  height: 93%;
  object-fit: cover;
}

.character {
  position: absolute;
  width: 5%;
  height: auto;
}

.treasure {
  position: absolute;
  font-size: 2em;
}

.score-banner {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  border-radius: 0 0 10px 0;
}
</style>