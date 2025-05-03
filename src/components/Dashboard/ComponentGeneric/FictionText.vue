<template>
  <div class="summaray-title-text flex-one display-flex-column margin-0-0-0-2vh">
    <p>
      <span class="last-chapter-text poppins-text font-weight-600 text-ternary-green">
        <router-link class="poppins-text text-ternary-green font-size-1em title-fiction-link" :to="'/fiction/' + FictionTitle">
          {{ FictionTitle }}
        </router-link>
      </span>
    </p>
    <p>
      <router-link
        class="last-chapter-text-link poppins-text font-size-1 font-weight-400 text-white"
        :to="'/chapter/' + ChapterTitle"
      >
        {{ truncateText(ChapterTitle, 30) }}
      </router-link>
    </p>
  </div>
</template>
<script>
export default {
  name: "FictionText",
  props: ["FictionTitle", "ChapterTitle"],
  methods: {
    truncateText(text, maxLength) {
      if (text.length <= maxLength) {
        return text;
      }
      return text.substring(0, maxLength) + "...";
    },
  }
};
</script>