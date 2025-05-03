<template>
  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 col-middle padding-0-0-0-4vh">
    <div class="display-flex-column flex-one all-chapters-list-container overflowY-scroll width-70-vh">
      <ul class="list-group width-50-vh overflowY-scroll background-color-dark-green-01 custom-scroll-list all-chapter-ul-scroll">
        <li
          class="list-group-item"
          v-for="(chapter, index) in Chapters"
          :key="index"
        >
          <router-link :to="'/chapter/' + chapter.Title"
            class="font-variant-small-caps title-fiction-links font-weight-400 color-clear-green-01 Noto-Sans"       
          >
            {{ chapter.Title }}
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