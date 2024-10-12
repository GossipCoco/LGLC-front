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
      <option v-for="(stat, index) in status" :value="stat.Id" :key="index">
        {{ stat.Name }}
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
            dataId: null,
            status: [
              { Name: "Vivant(e)", Id: "Vivant" },
              { Name: "Décédé(e)", Id: "Décéde" },
            ],

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