<template>
  <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12">
    <div class="display-flex-column flex-one all-chapters-list-container overflowY-scroll width-70-vh">
      <ul class="list-group width-70-vh overflowY-scroll">
        <li
          class="list-group-item"
          v-for="(chapter, index) in Chapters"
          :key="index"
        >
          <router-link
            :to="'/chapter/' + chapter.Title"
            class="font-variant-small-caps title-fiction-links font-weight-600"
        
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