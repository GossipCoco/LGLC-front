<template>
  <div class="row list-fiction-card-container">
    <div
      class="col-3 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-4 mb-2 mb-sm-2 mb-2 mb-sm-2"
      v-for="(game, index) in games"
      :key="index"
    >
      <div
        class="card mb-3 game-card-global-container"
        style=""
        v-for="(fiction, index) in game.Fiction"
        :key="index"
      >
        <div class="row g-0">
          <div class="col-md-6">
            <div
              class="image-display-flex-column fiction-container"
              v-bind:style="{
                backgroundImage: 'url(' + fiction.Image + ')',
              }"
            ></div>
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title" style="color: black">
                {{ fiction.Title }}
              </h5>
              <p
                class="card-text"
                style="color: black; font-size: 14px"
                v-html="truncateText(fiction.Summary, 35)"
              ></p>
              <p class="card-text" style="color: black">
                <small class="text-body-secondary">
                  <router-link
                    class="link-text-a"
                    :to="'/fiction/' + fiction.Title"
                    >Lire</router-link
                  >
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AllCardsFictions",
  props: ["games"],
  methods: {
    truncateText(text, maxLength) {
      return text.length <= maxLength
        ? text
        : text.substring(0, maxLength) + "...";
    },
  },
};
</script>