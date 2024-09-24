<template>
  <div class="row">
    <div class="col-2 col-sm-12 col-md-2 col-lg-2 col-xxl-2 image-book-container">
        <img :src="arc.IllustrationOne" :alt="arc.Title" class="image-book"/>
    </div>
    <div class="col-10 col-sm-12 col-md-10 col-lg-10 col-xxl-10">
        <h2>{{ arc.Title }}</h2>
        <div v-html="arc.Summary" class="text-align-justify"></div>
        <div v-for="(book, index) in arc.Books" :key="index">
            <p><router-link :to="'/BookByTitle/'+ book.Title">{{ book.Title }}</router-link></p>
        </div>        
    </div>    
  </div>
</template>
<script>
export default {
  name: "BookLayout",
  props: ["arc"],
};
</script>