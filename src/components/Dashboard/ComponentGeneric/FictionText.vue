<template>
  <div class="summaray-title-text flex-one display-flex-column margin-0-0-0-2vh">
    <p>
      <span class="last-chapter-text poppins-text font-size-1-25 font-weight-600 font-variant-small-caps text-ternary-green">
      <router-link class="poppins-text text-ternary-green font-size-1em title-fiction-link" :to="'/fiction/' + FictionTitle">{{ FictionTitle }}</router-link>
      </span>
    </p>
    <p>
      <router-link
        class="last-chapter-text-link poppins-text font-size-1-25 font-weight-600 font-variant-small-caps text-white"
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