<template>
  <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 btn-create-chapter-container">
  <router-link
    type="button"
    class="btn btn-primary btn-create-chapter-button"
    :to="'/fiction/createChapter/' + IdFiction"
    v-bind="lastChap"
  >
    Créer le chapitre {{ lastChap }}
  </router-link>
  </div>
</template>
<script>
export default {
    name: 'CreateChapterButton',
    props: ['IdFiction', 'lastChap']
}
</script>