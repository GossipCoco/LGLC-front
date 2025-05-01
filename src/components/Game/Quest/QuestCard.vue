<template>
  <div class="display-flex-column card-fiction-container">
    <div class="card-header">
      <h6 class="width-5-vh">{{ quest.Title }}</h6>
    </div>
    <div class="card-body card-quest-by-id-container">
      <div class="display-flex-row flex-one">
        <div
          class="background-image-quest width-10-vh height-16-rem background-size-cover flex-one"
          v-bind:style="{ backgroundImage: 'url(' + image.Image + ')' }"
        ></div>
        <div
          class="card-body display-flex-column one-quest flex-one width-10-rem"
        >
          <div
            class="display-flex-column quest-button-text height-30-vh align-items-content-justify-content vertical-align-middle"
          >
            <p
              class="display-flex-column quest-description font-weight-400 text-white display-none-responsive"
            >
              {{ quest.Description }}
            </p>
            <p class="display-flex-column quest-button-link">
              <router-link
                :to="'/QuestById/' + quest.Id"
                type="button"
                class="display-flex-column btn btn-primary margin-1-0-0-0"
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