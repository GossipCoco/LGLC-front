<template>
  <div
    class="summaray-title-text flex-one display-flex-column align-items-content-justify-content"
  >
    <p>
      <span
        class="last-chapter-text poppins-text font-size-1-25 font-weight-600 font-variant-small-caps text-ternary-green"
      >
        {{ FictionTitle }}
      </span>
    </p>
    <p>
      <router-link
        class="last-chapter-text poppins-text font-size-1-25 font-weight-600 font-variant-small-caps text-white"
        :to="'/chapter/' + ChapterTitle"
      >
        {{ ChapterTitle }}
      </router-link>
    </p>
  </div>
</template>
<script>
export default {
  name: "FictionText",
  props: ["FictionTitle", "ChapterTitle"],
};
</script>