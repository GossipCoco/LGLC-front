<template>
  <div class="single-timeline-area">
    <div
      class="timeline-date wow fadeInLeft"
      data-wow-delay="0.1s"
      style="
        visibility: visible;
        animation-delay: 0.1s;
        animation-name: fadeInLeft;
      "
    >
      <p>{{ arc.Title }}</p>
    </div>
    <div class="row">
      <div
        class="col-2 col-sm-12 col-md-2 col-lg-2 col-xxl-2 image-book-container"
      >
        <img :src="arc.IllustrationOne" :alt="arc.Title" class="image-book" />
      </div>
      <div class="col-10 col-sm-12 col-md-10 col-lg-10 col-xxl-10">
        <div class="row">
          <div class="col-12 display-flex-row align-items-content-justify-content">
            <h2>{{ arc.Title }}</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6 col-lg-6">
            <div
              class="single-timeline-content d-flex wow fadeInLeft"
              data-wow-delay="0.3s"
              style="
                visibility: visible;
                animation-delay: 0.3s;
                animation-name: fadeInLeft;
              "
            >
              <div class="timeline-text">
                <div v-html="arc.Summary" class="text-align-justify"></div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <div
              class="single-timeline-content d-flex wow fadeInLeft"
              data-wow-delay="0.3s"
              style="
                visibility: visible;
                animation-delay: 0.3s;
                animation-name: fadeInLeft;
              "
            >
              <div class="timeline-text">
                <h4>Liste des romans</h4>
                <div v-for="(book, index) in arc.Books" :key="index">
                  <p>
                    <router-link :to="'/BookByTitle/' + book.Title">{{
                      book.Title
                    }}</router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BookLayout",
  props: ["arc"],
};
</script>