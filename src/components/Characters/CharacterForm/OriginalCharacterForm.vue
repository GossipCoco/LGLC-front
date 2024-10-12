<template>
  <div class="card-body" style="height: 80vh">
    <form class="create-character-form" @submit.stop.prevent="onSubmit">
      <div class="row">
        <InputName
          v-bind:col="'col-3 col-md-3'"
          v-bind:forId="'inputName'"
          v-bind:label="'Nom actuel du personnage'"
          v-bind:getNameData="'getUserName'"
          @getUserName="getUserName"
        />
        <InputName
          v-bind:col="'col-3 col-md-3'"
          v-bind:forId="'inputKitName'"
          v-bind:label="'Nom de chaton'"
          v-bind:getNameData="'getKitName'"
          @getKitName="getKitName"
        />
        <InputName
          v-bind:col="'col-3 col-md-3'"
          v-bind:forId="'inputApprenticeName'"
          v-bind:label="'Nom d\'apprenti'"
          v-bind:getNameData="'getNameKitty'"
          @getNameKitty="getNameKittye"
        />
        <InputName
          v-bind:col="'col-3 col-md-3'"
          v-bind:forId="'inputWarriorName'"
          v-bind:label="'Nom de Guerrier/Guérisseur'"
          v-bind:getNameData="'getWarriorName'"
          @getWarriorName="getWarriorName"
        />
      </div>
      <div class="row">   
        <SelectClanComponent
          v-bind:For="'SearchClan'"
          v-bind:label="'Clan'"
          v-bind:formdata="''"
          v-bind:col="'col-3'"
          @form-clans="getclan"
        />
        <SelectGadeComponent
          v-bind:For="'SearchGrade'"
          v-bind:label="'Grade'"
          v-bind:formdata="''"
          v-bind:col="'col-3'"
          @form-grades="getgrade"
        />
        <GerenicSelect
          v-bind:For="'SearchGenre'"
          v-bind:label="'Genre'"
          v-bind:col="'col-3'"
          v-bind:formdata="''"
          @form-grades="getgenre"
        />
        <StatusSelect
        v-bind:For="'SearchStatus'"
          v-bind:label="'Status'"
          v-bind:col="'col-3'"
          v-bind:formdata="''"
          @form-Status="getStatus"
        />
      </div>
    </form>
  </div>
</template>
<script>
import InputName from "../../Components/FormComponent/InputName.vue";
import SelectClanComponent from "../../Components/FormComponent/SelectClanComponent.vue";
import SelectGadeComponent from "../../Components/FormComponent/SelectGadeComponent.vue";
import GerenicSelect from "../../Components/FormComponent/GenericSelect.vue";
import StatusSelect from "../../Components/FormComponent/StatusSelect.vue";
export default {
  name: "OriginalCharacterForm",
  components: { InputName, SelectClanComponent, SelectGadeComponent, GerenicSelect, StatusSelect },
  date() {
    return {
      genres: [
        { name: "Mâle", id: "Mâle" },
        { name: "Femelle", id: "Femelle" },
      ],
      NameKitty: "Nom d'apprenti",
      grades: [],
      Allclans: [],
      form: {
        UserId: this.$store.state.auth.user.usrID,
        UserName: null,
        imageChar: null,
        Description: null,
        Biography: null,
        ClanId: null,
        Status: null,
        Genre: null,
        GradeId: null,
        Personnality: null,
        KitName: null,
        ApprenticeName: null,
        WarriorName: null,
      },
    };
},
  methods: {
    getUserName(e) {
      console.log(e);
    },
    getKitName(e) {
      console.log(e);
    },
    getclan(e) {
      console.log(e);
    },
    getgrade(e) {
      console.log(e);
    },
    NameKitty(e) {
      console.log(e);
    },
    getWarriorName(e) {
      console.log(e);
    },
    getgenre(e){
        console.log(e)
    },
    getStatus(e){
        console.log(e)
    },
    handleOk(e) {
      console.log(e);
    },
  },
};
</script>