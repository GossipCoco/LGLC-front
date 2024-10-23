<template>
  <div class="quest-details align-items-content-justify-content">
    <div class="display-flex-column">
      <div class="display-flex-column">
        <p class="text-align-justify flex-one">{{ questDatas.Description }}</p>
        <p class="text-align-justify flex-one">{{ questDatas.Hint }}</p>
        <p class="text-align-justify flex-one">{{ questDatas.ObjectiveDescription }}</p>
      </div>
    </div>
  </div>
  <div class="display-flex-column">
    <p class="card-text text-align-justify">
      <router-link to="/Quest" type="button" class="btn btn-primary">
        Retour à la liste des quêtes
      </router-link>
    </p>
    <button class="btn btn-success" @click="completeQuest">
      Compléter la quête
    </button>
    <div v-if="showReward" class="reward-message">
      <div class="alert alert-success" role="alert">
        <p class="text-align-justify">Félicitations ! Vous avez gagné 100 points !</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "QuestMissionTarget",
  props: ["questDatas"],
  data() {
    return {
      selectedOption: null,
      feedback: null,
    }
}, methods: {
    completeQuest() {
      this.showReward = true;
      // Logic to add points to the user's profile can be added here
      setTimeout(() => {
        this.showReward = false;
      }, 3000);
    },
    submitAnswer() {
      if (this.selectedOption === this.quest.Question.CorrectAnswerId) {
        this.feedback = "Bonne réponse !";
      } else {
        this.feedback = "Mauvaise réponse. Réessayez !";
      }
    },
}
};
</script>