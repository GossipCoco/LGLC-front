<template>
  <div class="margin-1vh-0-0-0 mb-3">
    <label for="Summary" class="form-label text-white poppins-text">{{ Title }} inspirée de "La Guerre des Clans"</label>
    <textarea
      v-model="content"
      class="form-control"
      id="Summary"
      rows="6"
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