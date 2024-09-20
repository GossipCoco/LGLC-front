<template>
  <div
  id="arc-book-container"
    class="dashboard-max-card-container background-color-main-lineart flex-one card display-flex-column fiction-container"
  >
    <CardHeader v-bind:Title="'Les romans de La Guerre des Clans'" />
    <div class="card-body">
      <div class="row book-container">
        <div class="col-12 col-sm-12 col-md-12">
          <div v-for="(arc, index) in allBooks" :key="index">
            <BookLayout v-bind:arc="arc" />           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardHeader from "../Components/GenericComponent/CardHeader.vue";
import BookLayout from "./Components/BookLayout.vue";
import ArcBookService from "../../services/ArcBookService";
export default {
  name: "ArcBookLayout",
  components: { CardHeader, BookLayout },
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
    // this.getAllBooks(this.nav)
    this.GetAllArcsWithBooks(this.nav)
  },
  methods:{
    GetAllArcsWithBooks(nav){
        ArcBookService.GetAllArcsWithBooks(nav)
        .then((response) => {
          console.log(response.data.ob);
          this.allBooks = response.data.ob
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