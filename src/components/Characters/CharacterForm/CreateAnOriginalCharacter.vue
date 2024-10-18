<template>
  <div class="display-flex-column form-character-container flex-one opensans-text">
    <div class="card border-none white-text display-flex-column card-form-create-character align-items-content-justify-content flex-one mb-12">
      <CardHeader :Title="title" style="width: 100%;"/>
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