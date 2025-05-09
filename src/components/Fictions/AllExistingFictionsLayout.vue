<template>
  <div class="border-none display-flex-column padding-0 overflowY-X-hidden height-100-vh all-fictions-container-global">
    <CardHeader :Title="title"/>
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
