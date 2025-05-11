<template>
<div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-12">
  <div class="card background-color-dark-green-01 margin-2vh-0-0-0 height-80-vh">
    <div class="card-header">
      <h3 class="text-white poppins-text">Filtrer</h3>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <input-component
            v-bind:forId="'inputName'"
            v-bind:label="'Nom du personnage'"
            v-bind:getNameData="'getCurrentName'"
            @getCurrentName="getCurrentName"
          />
          <select-component
            :label="'Filtrer par Clan'"
            :forId="'selectClan'"
            :options="clans"
            :optionKey="'Id'"
            :optionLabel="'Name'"
            @selectChange="onSelectClan"
          /><select-component
            :label="'Filtrer par Grade'"
            :forId="'selectGrade'"
            :options="grades"
            :optionKey="'Id'"
            :optionLabel="'Name'"
            @selectChange="onSelectGrade"
          />
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import ClansServices from '../../../services/ClansServices';
import GradeService from '../../../services/GradeService';
import InputComponent from './InputComponent.vue';
import SelectComponent from './SelectComponent.vue';

export default {
    name: "FilterComponent",
    components:{
        InputComponent,
        SelectComponent
    },
    data(){
        return {
            navClans: {
                current: 0,
                pages: 0,
                step: 100,
            },
            clans: {},
            grades:{}
        }
    },
    async created() {
        this.userCurrent = this.$store.state.auth.user.usrID;
        await this.initPage();
    },
    methods: {
        // --- INITIALISATION ---
        async initPage() {
            try {
                await this.getAllClans(this.navClans);
                await this.getAllGrades()
            }
            catch (error) {
                console.error("Error initializing page:", error);
            }
        },
        async getAllClans(nav) {
            try {
                const response = await ClansServices.getAllClans(nav);
                this.clans = response.data.ob;
            } catch (e) {
                console.log(e);
            }
        },
        async getAllGrades(){
          try{
            const response = await GradeService.getAllGrades()
            this.grades = response.data.ob;
            console.log(this.grades)
          }catch (e) {
            console.log(e);
          }
        },
        getCurrentName(e) {
             this.$emit('getCurrentName', e);
        },
        onSelectClan(e){
            this.$emit('onSelectClan', e);
        },
        onSelectGrade(e){
          this.$emit('onSelectGrade', e);
        }
    }
};
</script>