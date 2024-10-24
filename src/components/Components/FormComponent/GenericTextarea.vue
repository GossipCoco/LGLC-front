<template>
  <div :class="col">
    <div :class="mb">
      <label :for="forId" class="form-label text-white">{{ label }}</label>
      <textarea
        class="form-control"
        :id="forId"
        :rows="rows"
        v-model="text"
        required
        @change="getDatas"
      ></textarea>
    </div>
  </div>
</template>
<script>
export default {
  name: "GenericTextArea",
  props: ['col', 'mb', 'forId', 'label', 'rows', 'getData'],
  data() {
    return {
      text: null
    };
  },
  methods: {
    getDatas() {
      console.log(this.text);
      this.$emit(this.getData, this.text);  // Corrigé ici
    },
  },
};
</script>