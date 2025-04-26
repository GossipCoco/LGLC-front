<template>
  <div class="back-to-all-fictions-container">
    <div
      class="flex-one display-flex-column align-items-content-justify-content"
    >
      <router-link
        type="button"
        class="btn btn-primary margin-1-0-0-0"
        :to="'/allFictions/' + Author"
        >Retour à la liste mes fictions</router-link
      >
      <router-link
        type="button"
        class="btn btn-primary margin-1-0-0-0"
        :to="'/AllExistingFictionsLayout'"
        >Retour à la liste des fictions</router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "BackToFileBtnGroup",
  props: ["Author"],
};
</script>