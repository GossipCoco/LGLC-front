<template>
  <div class="display-flex-row flex-one ">
    <div class="background-image-quest background-size-cover" v-bind:style="{ backgroundImage: 'url(' + image.Image + ')',}"></div>
    <div class="card-body display-flex-column one-quest ">
      <div class="display-flex-column quest-button-text">
        <h6>{{ quest.Title }}</h6>
        <p class="display-flex-column quest-description white-text">{{ quest.Description }}</p>
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