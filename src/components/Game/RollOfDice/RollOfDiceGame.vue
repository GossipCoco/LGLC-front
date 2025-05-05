<template>
  <div class="margin-2vh roll-dice-container card-height border-none background-color-main-lineart flex-one card display-flex-column overflowY-X-hiddengame-card">
    <CardHeader v-bind:Title="'Lancé de Dés'" />
    <div class="card-body height-70-vh">
      <div class="display-flex align-items-content-justify-content">
        <div class="text-game-container  flex-one">
          <p class="white-text">Utilisateur actuel : {{ userCurrent }}</p>
        </div>

        <div class="display-flex-row">
          <div class="dice" :class="diceClass(dice1)">
            <div class="face face1 display-flex align-items-content-justify-content">1</div>
            <div class="face face2 display-flex align-items-content-justify-content">2</div>
            <div class="face face3 display-flex align-items-content-justify-content">3</div>
            <div class="face face4 display-flex align-items-content-justify-content">4</div>
            <div class="face face5 display-flex align-items-content-justify-content">5</div>
            <div class="face face6 display-flex align-items-content-justify-content">6</div>
          </div>
          <div class="dice" :class="diceClass(dice2)">
            <div class="face face1 display-flex align-items-content-justify-content">1</div>
            <div class="face face2 display-flex align-items-content-justify-content">2</div>
            <div class="face face3 display-flex align-items-content-justify-content">3</div>
            <div class="face face4 display-flex align-items-content-justify-content">4</div>
            <div class="face face5 display-flex align-items-content-justify-content">5</div>
            <div class="face face6 display-flex align-items-content-justify-content">6</div>
          </div>
          <div class="dice" :class="diceClass(dice3)">
            <div class="face face1 display-flex align-items-content-justify-content">1</div>
            <div class="face face2 display-flex align-items-content-justify-content">2</div>
            <div class="face face3 display-flex align-items-content-justify-content">3</div>
            <div class="face face4 display-flex align-items-content-justify-content">4</div>
            <div class="face face5 display-flex align-items-content-justify-content">5</div>
            <div class="face face6 display-flex align-items-content-justify-content">6</div>
          </div>
        </div>
        <div class="text-game-container flex-one">
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
