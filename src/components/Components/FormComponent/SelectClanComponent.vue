<template>
    <div :class="col">
      <label :for="For" class="white-text form-label">
        {{ label }}
      </label>
      <select
        :id="For"
        class="form-select"
        aria-label="Default select example"
        v-model="clanId"
        @change="getClan"
      >
      <option
          v-for="(clan, index) in clans"
          :value="clan.Id"
          :key="index"
        >
          {{ clan.Name }}
        </option>
      </select>
    </div>
  </template>
  <script>
  export default {
    name: "SelectCharacterComponent",
    props: ["For", "label",  "clans", "col"],
    data() {
      return {
        form: null,
        clanId: null,
      };
    },
    methods: {
      getClan() {
        console.log("form-clans", this.clanId)
        this.$emit("form-clans", this.clanId);
      },
    },
  };
  </script>