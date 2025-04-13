<template>
  <div class="col-xxl-4 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div class="display-flex-column flex-one all-chapters-list-container">
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="(chapter, index) in Chapters"
          :key="index"
        >
          <router-link
            :to="'/chapter/' + chapter.Title"
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