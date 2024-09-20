<template>
  <div
    class="dashboard-max-card-container background-color-main-lineart flex-one card display-flex-column fiction-container"
  >
    <CardHeader v-bind:Title="'Les romans de La Guerre des Clans'" />
    <div class="card-body">
      <div class="row event-container">
        <div class="col-12 col-sm-12 col-md-12">
          <h2>Livres</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardHeader from "../Components/GenericComponent/CardHeader.vue";
import ArcBookService from "../../services/ArcBookService";
export default {
  name: "ArcBookLayout",
  components: { CardHeader },
  data() {
    return {
      allBooks: {},
      filters: [],
      nav: {
        current: 0,
        pages: 0,
        step: 6,
      },
    };
  },
  created(){
    this.getAllBooks(this.nav)
    this.GetAllArcsWithBooks(this.nav)
  },
  methods:{
    GetAllArcsWithBooks(nav){
        ArcBookService.GetAllArcsWithBooks(nav)
        .then((response) => {
          console.log(response.data.ob);
        })
        .catch((e) => {
          console.log(e);
        });
    },  
    getAllBooks(nav){
        ArcBookService.getAllBooks(nav)
        .then((response) => {
          console.log(response.data.ob);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }
};
</script>