<template>
  <div class="display-flex-column one-quest flex-one">
    <div
      class="display-flex-column quest-button-text height-30-vh align-items-content-justify-content vertical-align-middle"
    >
      <p
        class="display-flex-column quest-description height-5-vh width-20-vh font-weight-400 white-text display-none-responsive poppins-text"
      >
        Difficulté : {{ quest.DifficultyLevel }}
      </p>
      <p
        class="display-flex-column quest-description height-40-vh width-20-vh font-weight-400 white-text display-none-responsive poppins-text"
      >
        {{ quest.Description }}
      </p>
      <p class="display-flex-column quest-button-link height-20-vh">
        <router-link
          :to="'/QuestById/' + quest.Id"
          type="button"
          class="display-flex-column btn btn-primary margin-4-0-0-0 width-20-vh poppins-text"
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