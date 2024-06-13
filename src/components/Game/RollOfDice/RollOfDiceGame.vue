<template>
    <div class="dashboard-max-card-container card fiction-container">
        <h1>Lancé de Dés</h1>
        <p>Utilisateur actuel : {{ userCurrent }}</p>
        <div>
            <p>Dé 1: {{ dice1 }}</p>
            <p>Dé 2: {{ dice2 }}</p>
            <p>Dé 3: {{ dice3 }}</p>
        </div>
        <button @click="lancerDes">Lancer les dés</button>
    </div>

</template>

<script>
//   import GameService from '../../services/GameService'

export default {
    name: 'LancedeDes',
    inject: ["user"],
    data() {
        return {
            userCurrent: this.$store.state.auth.user.usrID,
            dice1: 1,
            dice2: 1,
            dice3: 1
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
        }
    }
}
</script>