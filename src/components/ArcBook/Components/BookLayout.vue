<template>
  <div class="row display-flex-row">
    <div class="col-3 illustration-arc-container">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              :src="'/images/Books/' + arc.IllustrationOne"
              :alt="arc.Title"
              class="d-block w-100"
            />
          </div>
          <div class="carousel-item">
            <img
              :src="'/images/Books/' + arc.IllustrationTwo"
              :alt="arc.Title"
              class="d-block w-100"
            />
          </div>
          <div class="carousel-item">
            <img
              :src="'/images/Books/' + arc.IllustrationThree"
              :alt="arc.Title"
              class="d-block w-100"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <!-- <img :src="'/images/Books/' + arc.IllustrationOne" :alt="arc.Title" /> -->
    </div>
    <div class="col-3 display-flex-column">
      <div class="title-arc-Image">
        <h2>{{ arc.Title }}</h2>
        <div
          class="illustration-arc-container card-image"
          v-bind:style="{
            backgroundImage: 'url(/images/Books/' + arc.Image + ')',
          }"
        ></div>
      </div>
      <div v-for="(book, index) in arc.Books" :key="index">
        <p>{{ book.Title }}</p>
      </div>
    </div>
    <div class="col-6"></div>
  </div>
</template>
<script>
export default {
  name: "BookLayout",
  props: ["arc"],
};
</script>