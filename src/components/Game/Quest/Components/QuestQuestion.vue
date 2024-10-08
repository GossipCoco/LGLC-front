<template><div class="card-container-parallax" >
  <div  class="card bubble-dialog">
    <div v-for="(text, index) in questData.QuestQuestions" :key="index">
      <p>{{ text.QuestionText }}</p>
    </div>
    <div v-for="(options, index) in questData.QuestQuestions" :key="index">
      <div v-for="(option, indexdeux) in options.QuestionOptions" :key="indexdeux">
        <input
          type="radio"
          :id="'option' + indexdeux"
          :value="option.Id"
          v-model="selectedOption"
        />
        <label :for="'option' + indexdeux">{{ option.OptionText }}</label>
      </div>
    </div>
    <button class="btn btn-primary" @click="submitAnswer">
      Valider la réponse
    </button>
    <div v-if="feedback">{{ feedback }}</div>
  </div></div>
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
  created() {
    console.log(this.questData.QuestQuestions);
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