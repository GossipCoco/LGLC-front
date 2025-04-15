<template>
  <div class="chapter-text-content background-color-white flex-one overflowY-scroll">
    <p class="text-align-justify background-color-white black-text" v-html="Content"></p>
  </div>
</template>
<script>
export default {
  name: "ChapterText",
  props: ["Content"],
};
</script>