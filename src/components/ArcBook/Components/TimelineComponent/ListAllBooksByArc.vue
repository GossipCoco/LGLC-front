<template>
  <div class="col-3 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
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
        <h4 class="text-white">Liste des romans</h4>
        <div v-for="(book, index) in Books" :key="index">
          <p>
            <router-link
              class="text-white poppins-text"
              :to="'/BookByTitle/' + book.Title"
              >{{ book.Title }}</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListAllBooksByArc",
  props: ["Books"],
};
</script>