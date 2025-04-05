<template>
  <div :class="col">
    <div class="form-floating mb-2 margin-top-2-rem">    
    <input
      type="text"
      class="form-control"
      :id="forId"
      v-model="name"
      @change="getDatas"
    />
    <label :for="forId">{{ label }}</label>
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