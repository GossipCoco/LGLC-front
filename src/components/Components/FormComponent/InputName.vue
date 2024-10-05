<template>
    <div :class="col">
      <label :for="forId" class="form-label">{{ label }}</label>
      <input
        type="text"
        class="form-control"
        :id="forId"
        v-model="name"
        @change="getDatas"
      />
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