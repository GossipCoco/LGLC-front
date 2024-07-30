<template>
  <div class="dashboard-max-card-container card fiction-container game-card">
    <CardHeader v-bind:Title="'Lancé de Dés'" />
    <div class="card-body">
     
      <div class="result-roll-dice">
        <p>Utilisateur actuel : {{ userCurrent }}</p>
        <p>Dé 1: {{ dice1 }}</p>
        <p>Dé 2: {{ dice2 }}</p>
        <p>Dé 3: {{ dice3 }}</p>
      </div>
      <button type="button" class="btn btn-primary" @click="lancerDes">
        Lancer les dés
      </button>
    </div>
  </div>
</template>

<script>
//   import GameService from '../../services/GameService'
import CardHeader from '../../Components/GenericComponent/CardHeader.vue'
export default {
  name: "LancedeDes",
  inject: ["user"],
  components: {CardHeader},
  data() {
    return {
      userCurrent: this.$store.state.auth.user.usrID,
      dice1: 1,
      dice2: 1,
      dice3: 1,
    };
  },
  created() {
    this.userCurrent = this.$store.state.auth.user.usrID;
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
  },
};
</script>