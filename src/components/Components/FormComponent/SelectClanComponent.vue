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
          v-for="(clan, index) in Allclans"
          :value="clan.Id"
          :key="index"
        >
          {{ clan.Name }}
        </option>
      </select>
    </div>
  </template>
  <script>
  import ClansServices from '../../../services/ClansServices';
  export default {
    name: "SelectCharacterComponent",
    props: ["For", "label", "Clans", "col"],
    data() {
      return {
        clanId: null,
        NameClan: null,
        Allclans:[]
      };
    },
    created(){
      this.GetAllClans();
    },
    methods: {
      getClan() {
        console.log("form-clans", this.clanId)
        this.$emit("form-clans", this.clanId);
      },
      GetAllClans() {
        ClansServices.getAllClans()
        .then((response) => {
          this.Allclans = response.data.ob;
          console.log(this.Allclans)
        })
        .catch((e) => {
          console.log(e);
        })
      }
    },
  };
  </script>