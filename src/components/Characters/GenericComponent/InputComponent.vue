<template>
    <div class="col-12">
        <label :for="forId" class="form-label white-text">
            {{ label }}
        </label>
        <input type="text" class="form-control" :id="forId" placeholder="Personnage" 
          v-model="name"
          @change="getDatas">
    </div>
</template>
<script>
export default{
    name: 'InputComponent',
    props:["forId", "label", "getNameData"],
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
}
</script>