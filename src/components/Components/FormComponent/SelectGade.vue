<template>
  <div class="col-md-6">
    <label for="inputClans" class="form-label">Grade</label>
    <select class="form-select" v-model="gradeSelected" required>
      <option
        v-for="(grade, index) in grades"
        :value="grade.Id"

        :key="index"
        id="inputClans"
        @change="SelectGrade"
      >
        {{ grade.Name }}
      </option>
    </select>
  </div>
</template>
<script>
import GradeServices from "../../../services/GradeService";
export default {
  name: 'SelectGrade',
  data() {
    return {
      grades: {},
      gradeSelected: null
    };
  },
  mounted() {
    this.GetAllGrade();
  },
  methods: {
    GetAllGrade() {
      GradeServices.getAllGrades()
        .then((response) => {
          console.log(response.data.ob)
          this.grades = response.data.ob;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    SelectGrade(){
      console.log(this.gradeSelected)
      this.$emit("SelectGade", this.gradeSelected)
    }
  },
};
</script>