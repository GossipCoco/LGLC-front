<template>
  <div class="display-flex-column width-30-vh">
    <div class="card-header  display-flex align-items-content-justify-content">
      <h6 class="width-25-vh white-text display-flex align-items-content-justify-content">{{ quest.Title }}</h6>
    </div>
    <div class="card-body card-quest-by-id-container padding-0">
      <img :src="image.Image" class="card-img-top" :alt="image.Image" />
      <quest-mission-level v-bind:quest="quest" />
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