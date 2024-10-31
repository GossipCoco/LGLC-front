<template>
  <div class="mb-3">
    <label for="Summary" class="form-label text-white">Editer {{ Title }}</label>
    <textarea
      v-model="content"
      class="form-control"
      id="Summary"
      rows="6"
      @change="getData"
    ></textarea>
    <slot></slot>
  </div>
</template>
<script>
export default {
    name: 'TextAreaOriginalCharacter',
    props:['Title', 'Text', 'getDatas'],
    data(){
        return{
            content: this.Text
        }
    },
    methods:{
        getData(){
          console.log(this.content)
            this.$emit(this.getDatas, this.content);
        }
    }
}
</script>