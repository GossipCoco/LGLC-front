<template>
    <div
      v-if="!showspinner" 
      id="card-display-flex-column fiction-container"
      class="card-header fiction-global-informarion-container-hearder display-flex-row align-items-content-justify-content"
    >
      <div class="Comment-icon">
        <div class="display-flex-column">
            <router-link :to="'/CommentByFiction/' + Title" class=" btn btn-primary">
            Lire les commentaire
            </router-link>
            <CreateCommentModal
            v-bind:fanfiction="Title"
            v-bind:fictionId="IdFiction"
            />
        </div>
      </div>
      <Rating :fictionId="IdFiction" :rating="rating" />
      <TitleFiction
        v-bind:Title="Title"
        v-bind:Author="Author"
        v-bind:dateCreation="dateCreation"
      />
      <div class="back-to-all-fictions-container">
        <div class="flex-one display-flex-column align-items-content-justify-content">
          <router-link
            type="button"
            class="btn btn-primary"
            :to="'/allFictions/' + Author"
            >Retour à la liste mes fictions</router-link
          >
          <router-link
            type="button"
            class="btn btn-primary"
            :to="'/AllExistingFictionsLayout'"
            >Retour à la liste des fictions</router-link
          >
        </div>
      </div>
    </div>
</template>
<script>
import Rating from "./Rating.vue";
import TitleFiction from "./TitleFiction.vue";

import CreateCommentModal from "../Comments/CreateCommentModal.vue";

export default {
    name: "FictionHeaderCard",
    props: ['Title', 'Author',  'Id', 'rating', 'dateCreation'],
    components: {
        CreateCommentModal,Rating,TitleFiction,
    }
    
}
</script>