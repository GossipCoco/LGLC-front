<template>
  <div :class="col">
    <div class="mb-3 row">
      <label :for="forId" class="col-sm-5 col-form-label white-text">{{ label }}</label>
      <div class="col-sm-7">
        <input
          type="text"
          class="form-control form-control-sm"
          :id="forId"
          v-model="name"
          @change="getDatas"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "InputName",
  props: ["col", "forId", "label", "getNameData"],
  data() {
    return {
      name: null,
    };
  },
  methods: {
    getDatas() {
      this.$emit(this.getNameData, this.name);
    },
  },
};
</script>