<template>
    <div class="form-group margin-top-2vh">
      <label :for="forId" class="text-white poppins-text">{{ label }}</label>
      <select
        :id="forId"
        class="form-control"
        v-model="selectedValue"
        @change="emitSelection"
      >
        <option :value="''">{{ defaultOption }}</option>
        <option
          v-for="option in options"
          :key="option[optionKey]"
          :value="option[optionKey]"
        >
          {{ option[optionLabel] }}
        </option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    name: "SelectComponent",
    props: {
      label: String,
      forId: String,
      options: Array,
      optionKey: {
        type: String,
        default: "Id"
      },
      optionLabel: {
        type: String,
        default: "Name"
      },
      defaultOption: {
        type: String,
        default: "Tous"
      }
    },
    data() {
      return {
        selectedValue: ""
      };
    },
    methods: {
      emitSelection() {
        this.$emit("selectChange", this.selectedValue);
      }
    }
  };
  </script>
  