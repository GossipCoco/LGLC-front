<template>
  <div class="quest-image-container">
    <div class="card-header quest-title">
      <h4>{{ quest.Title }}</h4>
    </div>
    <div class="card-body one-quest">
      <div class="card-img-top background-image-quest-image-container">
        <img :src="'/images/Fictions/' + image.Image" />
      </div>
      <div class="quest-button-text">
        <p class="quest-description">{{ quest.Description }}</p>
        <p class="quest-button-link">
          <router-link
            :to="'/QuestById/' + quest.Id"
            type="button"
            class="btn btn-primary"
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