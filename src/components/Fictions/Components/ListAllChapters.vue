<template>
  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 col-middle padding-0-0-0-4vh">
    <div class="display-flex-column flex-one all-chapters-list-container width-55-vh
              overflowY-scroll width-70-vh margin-0-rem padding-0-rem">
      <ul class="list-group width-50-vh overflowY-scroll background-color-dark-green-01 custom-scroll-list all-chapter-ul-scroll">
        <li
          class="list-group-item"
          v-for="(chapter, index) in Chapters"
          :key="index"
        >
          <router-link :to="'/chapter/' + chapter.Title"
            class="title-fiction-links font-size-1 font-weight-400 color-clear-green-01 poppins-text"       
          >
            {{ chapter.Title }} -  {{ chapter.NbWords }} mots
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListAllChapters",
  props: ["Chapters"],
};
</script>