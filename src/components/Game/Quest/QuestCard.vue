<template>
  <div class="display-flex-column width-35-vh">
    <div class="card-header">
      <h6 class="width-30-vh white-text">{{ quest.Title }}</h6>
    </div>
    <div class="card-body card-quest-by-id-container padding-0">
      <div class="display-flex-row flex-one">
        <div
          class="background-image-quest width-15-vh background-size-cover flex-one"
          v-bind:style="{ backgroundImage: 'url(' + image.Image + ')' }"
        ></div>
        <quest-mission-level v-bind:quest="quest" />
      </div>
    </div>
  </div>
</template>
<script>
import QuestMissionLevel from './Components/QuestMissionLevel.vue';
export default {
  name: "QuestCard",
  props: ["quest", "image"],
  components:{
    QuestMissionLevel
  }
};
</script>