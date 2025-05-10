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
        <div class="display-flex-column one-quest flex-one">
          <div
            class="display-flex-column quest-button-text height-30-vh
            align-items-content-justify-content vertical-align-middle"
          >
            <p
              class="display-flex-column quest-description height-5-vh width-20-vh
              font-weight-400 white-text display-none-responsive poppins-text"
            >
              Difficulté : {{ quest.DifficultyLevel }}
            </p>
             <p
              class="display-flex-column quest-description height-40-vh width-20-vh
              font-weight-400 white-text display-none-responsive poppins-text"
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "QuestCard",
  props: ["quest", "image"],
};
</script>