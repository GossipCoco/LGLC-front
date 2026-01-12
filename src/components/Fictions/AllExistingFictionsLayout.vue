<template>
  <div class="border-none background-none flex-one card display-flex-column width-100-100 overflowY-X-hidden height-100-vh all-fictions-container-global">
    <CardHeader :Title="title">
      <router-link to="/createANewFiction" type="button" class="btn btn-primary margin-2vh-0-0-0 poppins-text width-20-vh">
        Créer une nouvelle fiction
      </router-link>
    </CardHeader>
    <SummaryFiction :typePage="typePage" />
  </div>
</template>

<script>
import CardHeader from "../Components/GenericComponent/CardHeader.vue";
import SummaryFiction from './AllMyFictions/SummaryFiction.vue';

export default {
  name: "AllExistingFictionsLayout",
  components: { CardHeader, SummaryFiction },
  data() {
    return {
      title: null,
      typePage: null
    };
  },
  created() {
    this.title = 'Lire des fictions';
    this.typePage = 'allFictions';
}
}
</script>
