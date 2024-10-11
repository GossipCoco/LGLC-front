<template>
  <div :class="col">
    <label :for="For" class="white-text form-label">
      {{ label }}
    </label>
    <select
      :id="For"
      class="form-select"
      aria-label="Default select example"
      v-model="gradeId"
      @change="getGrades"
    >
      <option v-for="(grade, index) in allGrades" :value="grade.Id" :key="index">
        {{ grade.Name }}
      </option>
    </select>
  </div>
</template>
<script>
import GradeServices from '../../../services/GradeService';
export default {
  name: "SelectCharacterComponent",
  props: ["For", "label", "Grades", "col"],
  data() {
    return {
      gradeId: null,
      allGrades: []
    };
  },
  created() {
    this.GetAllGrade();   
  },
  methods: {
    getGrades() {
      this.$emit("form-grades", this.gradeId);
    },
    GetAllGrade() {
      GradeServices.getAllGrades()
        .then((response) => {
          this.allGrades = response.data.ob;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>