<template>
  <div :class="col">
    <label :for="For" class="white-text form-label">
      {{ label }}
    </label>
    <select
      :id="For"
      class="form-select"
      aria-label="Default select example"
      v-model="dataId"
      @change="getData"
    >
      <option v-for="(data, index) in datas" :value="grade.Id" :key="index">
        {{ data.Name }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
    name:'GenericSelect',
    props: ["For", "label",  "datas", "col", "formdata"],
    data(){
        return {
            dataId: null
        }
    },
    methods: {
    getData() {
      console.log(this.formdata, this.dataId);
      this.$emit(this.formdata, this.dataId);
    },
  },
}
</script>