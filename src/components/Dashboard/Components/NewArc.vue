<template>
  <div
    class="card background-lineart02 border-none arc-card last-arc-container height-40-vh margin-0-0-0-1vh"
  >
    <TitleHeaderDashboard
      v-bind:title="'Dernier arc en cours'"
      v-bind:type="'chapters'"
    />
    <arc-book-summary
      v-bind:route="'/OneArc/'"
      v-bind:Id="Id"
      v-bind:Title="Title"
      v-bind:Image="Image"
      v-bind:Summary="Summary"
    />
  </div>
</template>
<script>
import ArcBookService from "../../../services/ArcBookService";
import TitleHeaderDashboard from "../../Components/SpecificComponent/TitleHeaderDashboard.vue";
import ArcBookSummary from "../ComponentGeneric/ArcBookSummary.vue";
export default {
  name: "NewArc",
  components: { TitleHeaderDashboard, ArcBookSummary },
  data() {
    return {
      currentArc: null,
      Id: null,
      Image: null,
      Title: null,
      Summary: null,
    };
  },
  mounted() {
    ArcBookService.GetCurrentArc()
      .then((response) => {
        this.currentArc = response.data.ob;
        this.Id = this.currentArc.Id;
        this.Image = this.currentArc.Image;
        this.Title = this.currentArc.Title;
        this.Summary = this.currentArc.Summary;
      })
      .catch((err) => {
        console.error("Erreur lors de la récupération de l'arc :", err);
      });
  },
};
</script>