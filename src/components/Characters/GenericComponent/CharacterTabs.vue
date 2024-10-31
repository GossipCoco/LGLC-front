<template>
  <div class="col-12">
    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-home"
          type="button"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
        >
          Description
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-profile"
          type="button"
          role="tab"
          aria-controls="pills-profile"
          aria-selected="false"
        >
          Peronnalité
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="pills-contact-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-contact"
          type="button"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
        >
          Histoire
        </button>
      </li>
      <li class="nav-item" role="family">
        <button
          class="nav-link"
          id="pills-family-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-family"
          type="button"
          role="tab"
          aria-controls="pills-family"
          aria-selected="false"
        >
          Famille
        </button>
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="pills-home"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
        tabindex="0"
      >
        <p>
          <button type="button" class="btn btn-primary" @click="editDescription">
            <font-awesome-icon icon="pen" />
          </button>
        </p>
        <div v-if="!EditDescriptionTextArea" class="text-align-justify" v-html="Description"></div>
        <TextAreaOriginalCharacter v-if="EditDescriptionTextArea" v-bind:Title="'Description'" v-bind:Text="Description" v-bind:getDatas="'getDescription'" @getDescription="getDescription">
          <button type="button" class="btn btn-primary" v-on:click="editAndSendDescription">Editer la description</button>
        </TextAreaOriginalCharacter>
      </div>
      <div
        class="tab-pane fade"
        id="pills-profile"
        role="tabpanel"
        aria-labelledby="pills-profile-tab"
        tabindex="1"
      >
        <div class="text-align-justify" v-html="Personnality"></div>
      </div>
      <div
        class="tab-pane fade"
        id="pills-contact"
        role="tabpanel"
        aria-labelledby="pills-contact-tab"
        tabindex="2"
      >
        <div class="text-align-justify" v-html="Biography"></div>
      </div>
      <div
        class="tab-pane fade"
        id="pills-family"
        role="tabpanel"
        aria-labelledby="pills-family-tab"
        tabindex="3"
      >
        <RelationCharacterComponent v-bind:Relation="Relation" />
      </div>
    </div>
  </div>
</template>
<script>
import RelationCharacterComponent from "./RelationCharacterComponent.vue";
import TextAreaOriginalCharacter from "../CharacterForm/TextAreaOriginalCharacter.vue";
import CharacterService from "../../../services/CharacterService";
export default {
  name: "CharacterTabs",
  props: ["CurrentName", "Description", "Personnality", "Biography", "Relation"],
  components: { RelationCharacterComponent, TextAreaOriginalCharacter },
  data(){
    return{
      EditDescriptionTextArea: false,
      newDescription: null
    }
  },
  methods:{
    editDescription(){
      this.EditDescriptionTextArea = true
    },
    getDescription(e){
      this.newDescription = e
    },
    editAndSendDescription(){
      console.log(this.newDescription)
      const formData = new FormData();
      formData.append('typeField', 'Description')
      formData.append('Description', this.newDescription)
      this.EditOriginalCharacter(this.CurrentName, formData)
    },
      EditOriginalCharacter(id, formData){
        CharacterService.EditOriginalCharacter(id, formData)
        .then((response) => {
          console.log(response)
          this.EditDescriptionTextArea = false
        })
        .catch(err => {
          console.log(err)
        })
      }

    }
  
};
</script>