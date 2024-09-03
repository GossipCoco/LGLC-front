<template>
  <div class="opacity-container">
    <div class="display-flex-column flex-one all-chapters-list-container">
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
    </div>
    <div class="summary-container"><p v-html="Summary"></p></div>
  </div>
</template>
<script>
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
};
</script>