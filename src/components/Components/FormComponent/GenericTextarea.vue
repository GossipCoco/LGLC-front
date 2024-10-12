<template>
  <div :class="col">
    <div :class="mb">
      <label :for="forId" class="form-label"
        >{{ label }}</label
      >
      <textarea
        class="form-control"
        :id="forId"
        :rows="rows"
        v-model="form.Biography"
        required
      ></textarea>
    </div>
  </div>
</template>
<script>
export default {
  name: "GenericTextArea",
  props:['col', 'mb', 'forId', 'label', 'rows']
};
</script>