<template>
  <router-link
    type="button"
    class="btn btn-primary btn-create-chapter-button"
    :to="'/fiction/createChapter/' + IdFiction"
    v-bind="lastChap"
  >
    Créer le chapitre {{ lastChap }}
  </router-link>
</template>
<script>
export default {
    name: 'CreateChapterButton',
    props: ['IdFiction', 'lastChap']
}
</script>