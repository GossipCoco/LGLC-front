<template>
  <div :class="col">
    <label :for="For" class="text-white form-label">
      {{ label }}
    </label>
    <select
      v-if="label !== 'Auteur'"
      :id="For"
      class="form-select"
      aria-label="Default select example"
      v-model="dataId"
      @change="getData"
    >
    <option  v-for="(option, index) in options" :value="option.Id" :key="index">
        {{ option.Name }}
      </option>
    </select>
    <select
      v-if="label === 'Auteur'"
      :id="For"
      class="form-select"
      aria-label="Default select example"
      v-model="dataId"
      @change="getData"
    >
      <option v-for="(option, index) in allAuthors"  :value="option.Id" :key="index">
          {{ option.Username }}
        </option>
      </select>
  </div>
</template>
<script>
import GradeServices from '../../../services/GradeService';
import ClansServices from '../../../services/ClansServices';
import FictionService from '../../../services/FictionService';
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
          characters: {},
          allAuthors: {}
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
      }if( this.label === 'Auteur'){
        this.GetAllAUthors()
      }
    },
    methods: {
    getData() {
      console.log(this.formdata, this.dataId)
      if(this.formdata === 'getclan'){
        this.$emit('getclan', this.dataId);
      }else if(this.formdata === 'getCharacter'){
        this.$emit('getCharacter', this.dataId);        
      }else if(this.formdata === 'getAuthor'){
        this.$emit('getAuthor', this.dataId);        
      }
    },
    GetGenre(){
      this.options = [
            { Name: "Mâle", Id: "Mâle" },
            { Name: "Femelle", Id: "Femelle" },
          ]
    },
    GetAllAUthors(){
      FictionService.GetAllAUthors()
      .then((response) => {
        this.allAuthors = response.data.ob
        console.log(this.allAuthors)
      })      
      .catch((e) => {
          console.log(e);
        });
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