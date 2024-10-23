<template>
  <div class="dashboard-max-card-container border-none background-color-main-lineart flex-one card display-flex-column fiction-container  overflowY-X-hiddengame-card">
    <CardHeader v-bind:Title="'Lancé de Dés'" />
    <div class="card-body">
      <div class="game-roll-container">
        <div class="text-game-container  flex-one">
          <p>Utilisateur actuel : {{ userCurrent }}</p>
        </div>

        <div class="result-roll-dice">
          <div class="dice" :class="diceClass(dice1)">
            <div class="face face1">1</div>
            <div class="face face2">2</div>
            <div class="face face3">3</div>
            <div class="face face4">4</div>
            <div class="face face5">5</div>
            <div class="face face6">6</div>
          </div>
          <div class="dice" :class="diceClass(dice2)">
            <div class="face face1">1</div>
            <div class="face face2">2</div>
            <div class="face face3">3</div>
            <div class="face face4">4</div>
            <div class="face face5">5</div>
            <div class="face face6">6</div>
          </div>
          <div class="dice" :class="diceClass(dice3)">
            <div class="face face1">1</div>
            <div class="face face2">2</div>
            <div class="face face3">3</div>
            <div class="face face4">4</div>
            <div class="face face5">5</div>
            <div class="face face6">6</div>
          </div>
        </div>
        <div class="text-game-container  flex-one">
        <button type="button" class="btn btn-primary" @click="lancerDes">
          Lancer les dés
        </button>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardHeader from "../../Components/GenericComponent/CardHeader.vue";

export default {
  name: "LancedeDes",
  components: { CardHeader },
  data() {
    return {
      userCurrent: this.$store.state.auth.user.usrID,
      dice1: 1,
      dice2: 1,
      dice3: 1,
    };
  },
  methods: {
    lancerDes() {
      this.dice1 = this.getRandomDiceValue();
      this.dice2 = this.getRandomDiceValue();
      this.dice3 = this.getRandomDiceValue();
    },
    getRandomDiceValue() {
      return Math.floor(Math.random() * 6) + 1;
    },
    diceClass(value) {
      return `show-${value}`;
    },
    addRollingClass() {
      document.querySelectorAll(".dice").forEach((die) => {
        die.classList.add("rolling");
      });
    },
    removeRollingClass() {
      document.querySelectorAll(".dice").forEach((die) => {
        die.classList.remove("rolling");
      });
    },
  },
};
</script>
