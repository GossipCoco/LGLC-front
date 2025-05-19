<template>
  <div class="display-flex-column one-quest flex-one">
    <div
      class="display-flex-column quest-button-text height-20-vh align-items-content-justify-content vertical-align-middle"
    >
      <p
        class="display-flex-column quest-description height-5-vh width-20-vh font-weight-400 white-text display-none-responsive poppins-text"
      >
        <span class="badge text-bg-success" v-if="quest.DifficultyLevel === 'Facile'">
        {{ quest.DifficultyLevel }}
        </span>
        <span class="badge text-bg-warning" v-if="quest.DifficultyLevel === 'Moyen'">
        {{ quest.DifficultyLevel }}
        </span>
        <span class="badge text-bg-danger" v-if="quest.DifficultyLevel === 'Difficile'">
        {{ quest.DifficultyLevel }}
        </span>
         
      </p>
      <p class="display-flex-column quest-button-link height-20-vh">
        <router-link
          :to="'/QuestById/' + quest.Id"
          type="button"
          class="display-flex-column btn challenge-btn margin-4-0-0-0 width-20-vh poppins-text"
        >
          Relever le défi
        </router-link>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "QuestMissionLevel",
  props: ["quest"],
};
</script>