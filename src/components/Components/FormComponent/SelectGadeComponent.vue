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
    <option
        v-for="(grade, index) in grades"
        :value="grade.Id"
        :key="index"
      >
        {{ grade.Name }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: "SelectCharacterComponent",
  props: ["For", "label",  "grades", "col"],
  data() {
    return {
      form: null,
      gradeId: null,
    };
  },
  methods: {
    getGrades() {
      console.log("form-grades", this.gradeId)
      this.$emit("form-grades", this.gradeId);
    },
  },
};
</script>