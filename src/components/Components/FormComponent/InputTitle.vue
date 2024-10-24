<template>
  <div class="row">
    <div class="mb-3">
      <label for="Title" class="form-label text-white">{{ Title }}</label>
      <input
        id="Title"
        type="text"
        class="form-control"
        v-model="title"
        @change="getDatas"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "InputTitle",
  props: ["Title"],
  data() {
    return {
      title: null,
    };
  },
  methods: {
    getDatas() {
      this.$emit("input-title", this.title);
    },
  },
};
</script>