<template>
  <div class="display-flex-row flex-one ">
    <div class="background-image-quest height-16-rem background-size-cover flex-one" v-bind:style="{ backgroundImage: 'url(' + image.Image + ')',}"></div>
    <div class="card-body display-flex-column one-quest flex-one width-10-rem">
      <div class="display-flex-column quest-button-text align-items-content-justify-content vertical-align-middle">
        <h6>{{ quest.Title }}</h6>
        <p class="display-flex-column quest-description text-white">{{ quest.Description }}</p>
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