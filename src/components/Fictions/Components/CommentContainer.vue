<template>
  <div class="Comment-icon">
    <div class="display-flex-column">
      <router-link :to="'/CommentByFiction/' + Title" class="btn btn-primary">
        Lire les commentaires
      </router-link>
      <CreateCommentModal
        v-bind:fanfiction="Title"
        v-bind:IdFiction="IdFiction"
      />
    </div>
  </div>
</template>
<script>
import CreateCommentModal from '../Comments/CreateCommentModal.vue';

export default {
    name: 'ComponentContainer',
    props:['Title', 'IdFiction'],
    components:{ CreateCommentModal}
};
</script>