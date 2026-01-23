<template>

    <ul class="nav nav-pills" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active color-clear-green-01"
          id="pills-general-info-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-general-info"
          type="button"
          role="tab"
          aria-controls="pills-general-info"
          aria-selected="true"
        >
          Informations Générales
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link color-clear-green-01 border-radius-none"
          id="pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-home"
          type="button"
          role="tab"
          aria-controls="pills-home"
          aria-selected="false"
        >
          Description
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link white-text background-color-dark-green-01 border-radius-none"
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
          class="nav-link white-text background-color-dark-green-01 border-radius-none"
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
      <li class="nav-item" role="presentation">
        <button
          class="nav-link background-color-dark-green-01 white-text border-radius-none"
          id="pills-fiction-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-fiction"
          type="button"
          role="tab"
          aria-controls="pills-fiction"
          aria-selected="false"
        >
          Fictions
        </button>
      </li>
      <li class="nav-item" role="family">
        <button
          class="nav-link  background-color-dark-green-01 white-text"
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
    <div class="tab-content height-50-vh" id="pills-tabContent">
      <div
        class="tab-pane fade show active height-50-vh background-lineart02 overflowY-auto border-radius-12px padding-2-vh"
        id="pills-general-info"
        role="tabpanel"
        aria-labelledby="pills-general-info-tab"
        tabindex="0"
      >
      </div>
      <div
        class="tab-pane fade show active height-50-vh background-lineart02 overflowY-auto border-radius-12px padding-2-vh"
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
        <div v-if="!EditDescriptionTextArea" class="text-align-justify  height-30-vh overflowY-auto" v-html="Description"></div>
        <TextAreaOriginalCharacter v-if="EditDescriptionTextArea" v-bind:Title="'Description'" v-bind:Text="Description" v-bind:getDatas="'getDescription'" @getDescription="getDescription">
          <button type="button" class="btn btn-primary" v-on:click="editAndSendDescription">Editer la description</button>
          <button type="button" class="btn btn-primary" v-on:click="cancel">Annuler</button>
        </TextAreaOriginalCharacter>
      </div>
      <div
        class="tab-pane fade height-50-vh background-lineart02 overflowY-auto border-radius-12px padding-2-vh"
        id="pills-profile"
        role="tabpanel"
        aria-labelledby="pills-profile-tab"
        tabindex="1"
      >
        <p>
          <button type="button" class="btn btn-primary" @click="editPersonnality">
            <font-awesome-icon icon="pen" />
          </button>
        </p>
        <div v-if="!EditPersonnalityTextArea" class="text-align-justify    height-30-vh  overflowY-auto" v-html="Personnality"></div>
        <TextAreaOriginalCharacter v-if="EditPersonnalityTextArea" v-bind:Title="'Personnalité'" v-bind:Text="Personnality" v-bind:getDatas="'getPersonnality'" @getPersonnality="getPersonnality">
          <button type="button" class="btn btn-primary" v-on:click="editAndSendPersonnality">Editer la personnalité</button>
          <button type="button" class="btn btn-primary" v-on:click="cancel">Annuler</button>
        </TextAreaOriginalCharacter>
      </div>
      <div
        class="tab-pane fade height-50-vh  background-lineart02 overflowY-auto border-radius-12px padding-2-vh"
        id="pills-contact"
        role="tabpanel"
        aria-labelledby="pills-contact-tab"
        tabindex="2"
      >
        <p>
          <button type="button" class="btn btn-primary" @click="editBiography">
            <font-awesome-icon icon="pen" />
          </button>
        </p>
        <div v-if="!EditBiographyTextArea" class="text-align-justify    height-30-vh  overflowY-auto" v-html="Biography"></div>
        <TextAreaOriginalCharacter v-if="EditBiographyTextArea" v-bind:Title="'Biographie'" v-bind:Text="Biography" v-bind:getDatas="'getBiography'" @getBiography="getBiography">
          <button type="button" class="btn btn-primary" v-on:click="editAndSendBiography">Editer la biographie</button>
          <button type="button" class="btn btn-primary" v-on:click="cancel">Annuler</button>
        </TextAreaOriginalCharacter>
      </div>
      <div
        class="tab-pane fade height-50-vh  background-lineart02 overflowY-auto border-radius-12px padding-2-vh"
        id="pills-family"
        role="tabpanel"
        aria-labelledby="pills-family-tab"
        tabindex="3"
      >
        <RelationCharacterComponent v-bind:Relation="Relation" />
      </div>
      <div
        class="tab-pane fade height-50-vh  background-lineart02 overflowY-auto border-radius-12px padding-2-vh"
        id="pills-fiction"
        role="tabpanel"
        aria-labelledby="pills-fiction-tab"
        tabindex="5"
      >
        <p>Les fictions de ce personnage</p>
        <div v-for="(games, index) in Fictions" :key="index">
          <div v-for="(fictions, index) in games" :key="index">
            <div v-for="(fiction, index) in fictions.Fiction" :key="index">
              <p><router-link :to="'/fiction/' + fiction.Title" class="white-text">{{ fiction.Title }}</router-link></p>
            </div>
          </div>
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
  props: ["CurrentName", "Description", "Personnality", "Biography", "Relation", "Fictions"],
  components: { RelationCharacterComponent, TextAreaOriginalCharacter },
  data(){
    return{
      EditDescriptionTextArea: false,
      EditPersonnalityTextArea:false,
      EditBiographyTextArea:false,
      newDescription: null,
      newPersonnality: null,
      newBiography: null,
    }
  },
  methods:{
    cancel(){
      this.EditDescriptionTextArea = false
      this.EditPersonnalityTextArea = false
      this.EditBiographyTextArea = false
    },
    editDescription(){
      this.EditDescriptionTextArea = true
    },
    editPersonnality(){
      this.EditPersonnalityTextArea = true
    },
    editBiography(){
      this.EditBiographyTextArea = true
    },
    getDescription(e){
      this.newDescription = e
    },
    getPersonnality(e){
      this.newPersonnality = e
    },
    getBiography(e){
      this.newBiography = e
    },
    editAndSendDescription(){
      const formData = new FormData();
      formData.append('typeField', 'Description')
      formData.append('Description', this.newDescription)
      this.EditOriginalCharacter(this.CurrentName, formData)
    },
    editAndSendPersonnality(){
      const formData = new FormData();
      formData.append('typeField', 'Personnality')
      formData.append('Personnality', this.newPersonnality)
      this.EditOriginalCharacter(this.CurrentName, formData)
    },
    editAndSendBiography(){
      const formData = new FormData();
      formData.append('typeField', 'Biography')
      formData.append('Biography', this.newBiography)
      this.EditOriginalCharacter(this.CurrentName, formData)
    },
    EditOriginalCharacter(id, formData){
      CharacterService.EditOriginalCharacter(id, formData)
      .then((response) => {
        console.log(response)
        this.EditDescriptionTextArea = false
        location.reload()
      })
      .catch(err => {
        console.log(err)
      })
    }
  }  
};
</script>