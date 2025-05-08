<template>
  <div class="display-flex-column form-character-container flex-one opensans-text">
    <div class="card border-none background-color-main-lineart overflowY-X-hidden 
    text-white display-flex-column card-form-create-character height-90-vh padding-4-vh
    align-items-content-justify-content flex-one mb-12 margin-0-0-4-0">
      <CardHeader :Title="title"/>
      <OriginalCharacterForm />
    </div>
  </div>
</template>
<script>

import CardHeader from '../../Components/GenericComponent/CardHeader.vue'
import OriginalCharacterForm from './OriginalCharacterForm.vue';
export default {
  name: "CreateAnOriginalCharacter",
  components:{CardHeader, OriginalCharacterForm},
  data() {
    return {
      title: 'Créer votre chat guerrier',
    };
  },
};
</script>