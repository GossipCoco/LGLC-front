<template>
<div class="card-container-parallax display-flex-column" >
  <div  class="card bubble-dialog height-40-vh width-40-vh">
    <div v-for="(text, index) in questData.QuestQuestions" :key="index">
      <p class="poppins-text">{{ text.QuestionText }}</p>
    </div>
    <div v-for="(options, index) in questData.QuestQuestions" :key="index">
      <div v-for="(option, indexdeux) in options.QuestionOptions" :key="indexdeux">
        <input
          type="radio"
          :id="'option' + indexdeux"
          :value="option.Id"
          v-model="selectedOption"
        />
        <label :for="'option' + indexdeux" class="poppins-text">{{ option.OptionText }}</label>
      </div>
    </div>
    <button class="btn btn-primary margin-4-0-0-0 poppins-text" @click="submitAnswer">
      Valider la réponse
    </button>
    <div v-if="feedback">
      <p class="poppins-text">{{ feedback }}</p>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "QuestQuestion",
  props: ["questData"],
  data() {
    return {
      quest: {},
      feedback: null,
      nbPoints: null
    };
  },
  methods: {
    submitAnswer() {
      if (
        this.selectedOption ===
        this.questData.QuestQuestions[0].CorrectAnswer.Id
      ) {
        this.feedback = "Bonne réponse !";
      } else {
        this.feedback = "Mauvaise réponse. Réessayez !";
      }
    },
  },
};
</script>