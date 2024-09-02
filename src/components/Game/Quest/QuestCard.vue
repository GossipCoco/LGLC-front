<template>
  <div class="display-flex-column quest-image-container flex-one">
    <div class="display-flex card-header quest-title">
      <h4>{{ quest.Title }}</h4>
    </div>
    <div class="card-body display-flex-column one-quest">
      <div class="card-img-top display-flex-column background-image-quest-image-container display-flex-row flex-one">
        <img :src="'/images/Fictions/' + image.Image" />
      </div>
      <div class="display-flex-column quest-button-text">
        <p class="display-flex-column quest-description">{{ quest.Description }}</p>
        <p class="display-flex-column quest-button-link">
          <router-link
            :to="'/QuestById/' + quest.Id"
            type="button"
            class="display-flex-column btn btn-primary"
          >
            Relever le défi
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "QuestCard",
  props: ['quest', 'image'],
};
</script>