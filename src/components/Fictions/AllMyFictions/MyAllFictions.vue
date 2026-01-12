<template>
  <div class="card border-none background-none flex-one card display-flex-column
              width-100-100 overflowY-X-hidden height-100-vh all-fictions-container-global">
    <CardHeader v-bind:Title="'Lire toutes mes fictions'">
      <router-link to="/createANewFiction" type="button"
                  class="btn btn-primary margin-2vh-0-0-0 poppins-text width-40-vh">
        Créer une nouvelle fiction
      </router-link>
    </CardHeader>
        <all-fictions-layout />
    </div>
</template>
<script>
import CardHeader from '../../Components/GenericComponent/CardHeader.vue';
import AllFictionsLayout from './AllFictionsLayout.vue';
export default {
    name: 'MyAllFictions',
    components: { AllFictionsLayout, CardHeader }
}
</script>