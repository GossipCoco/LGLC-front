<template>
  <div :class="col">
    <label :for="For" class="text-white form-label">
      {{ label }}
    </label>
    <select
      :id="For"
      class="form-select"
      aria-label="Default select example"
      v-model="dataId"
      @change="getData"
    >
      <option v-for="(option, index) in options" :value="option.Id" :key="index">
        {{ option.Name }}
      </option>
    </select>
  </div>
</template>
<script>
import GradeServices from '../../../services/GradeService';
import ClansServices from '../../../services/ClansServices';
  
export default {
    name:'GenericSelect',
    props: ["For", "label",  "datas", "col", "formdata"],
    data(){
        return { 
          NameLabel: this.label,
          GradeId: null,
          allGrades: [],
          options:{},
          dataId: null,
        }
    },
    mounted(){
      if( this.label === 'Grade'){
        this.GetAllGrade()
      }
      if(this.label === 'Genre'){
        this.GetGenre()
      }if( this.label === 'Clan'){
        this.GetAllClans()
      }if( this.label === 'Status'){
        this.GetStatus()
      }
    },
    methods: {
    getData() {
      this.$emit(this.formdata, this.dataId);
    },
    GetGenre(){
      this.options = [
            { Name: "Mâle", Id: "Mâle" },
            { Name: "Femelle", Id: "Femelle" },
          ]
    },
    GetAllGrade() {
      GradeServices.getAllGrades()
        .then((response) => {          
          this.options = response.data.ob;
        })
        .catch((e) => {
          console.log(e);
        });
    },
      GetAllClans() {
        ClansServices.getAllClans()
        .then((response) => {
          this.options = response.data.ob;
        })
        .catch((e) => {
          console.log(e);
        })
      },
      GetStatus(){
        this.options = [
              { Name: "Vivant(e)", Id: "Vivant" },
              { Name: "Décédé(e)", Id: "Décéde" },
            ]
      }
  },
}
</script>