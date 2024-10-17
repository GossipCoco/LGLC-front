<template>
  <div class="opacity-container">
    <div class="display-flex-column flex-one align-items-content-justify-content all-chapters-list-container">
      <p>
        <EditSummary v-bind:FictionId="IdFiction" v-bind:Summary="Summary" />
      </p>
      
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="(chapter, index) in fiction.Chapters"
          :key="index"
        >
          <router-link class="dropdown-item" :to="'/chapter/' + chapter.Title">
            {{ chapter.Title }}
          </router-link>
        </li>
      </ul>
      <p>
        <router-link
          type="button"
          class="btn btn-primary"
          v-if="AuthorId === usrCurrent"
          :to="'/fiction/createChapter/' + IdFiction"
          v-bind="lastChap"
        >
          Créer le chapitre {{ lastChap }}
        </router-link>
      </p>
    </div>
    <div class="summary-container"><p v-html="Summary"></p></div>
  </div>
</template>
<script>
import EditSummary from "../FictionsForm/EditSummary.vue"
export default {
  name: "ListOfChapters",
  props: [
    "AuthorId",
    "usrCurrent",
    "IdFiction",
    "lastChap",
    "fiction",
    "Summary",
  ],
  components:{EditSummary}
};
</script>