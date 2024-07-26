<template>
  <div class="mb-3">
    <label for="Summary" class="form-label">{{ Title }} inspiré de "La Guerre des Clans"</label>
    <textarea
      v-model="content"
      class="form-control"
      id="Summary"
      rows="12"
      @change="getData"
    ></textarea>
  </div>
</template>
<script>
export default {
    name: 'TextAreaComponent',
    props:['Title'],
    data(){
        return{
            content: null
        }
    },
    methods:{
        getData(){
          console.log(this.content)
            this.$emit("input-content", this.content);
        }
    }
};
</script>