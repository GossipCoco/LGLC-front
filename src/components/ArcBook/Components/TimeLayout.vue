<template>
  <div class="single-timeline-area">
    <TimelineArc v-bind:Title="arc.Title" v-bind:position="'left'"/>
    <div class="row">      
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
        <TimelineArc v-bind:Title="arc.Title" v-bind:id="arc.Id" v-bind:position="'title-main'"/>
        <div class="row">
          <BookImage v-bind:Illustration="illustration" v-bind:Title="arc.Title"/>
          <SummaryArc v-bind:Summary="arc.Summary" />
          <ListAllBooksByArc v-bind:Books="arc.Books"/>
          <CharacterByArc />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TimelineArc from './TimelineComponent/TitleArc.vue'
import BookImage from './TimelineComponent/BookImage.vue';
import SummaryArc from './TimelineComponent/SummaryArc.vue'
import ListAllBooksByArc from './TimelineComponent/ListAllBooksByArc.vue'
import CharacterByArc from './TimelineComponent/CharactersByArc.vue'
export default {
  name: "TimeLayout",
  props: ["arc"],
  components: {TimelineArc, BookImage, SummaryArc, ListAllBooksByArc, CharacterByArc},
  data(){
    return{
      illustration: this.arc.IllustrationOne
    }
  }
};
</script>