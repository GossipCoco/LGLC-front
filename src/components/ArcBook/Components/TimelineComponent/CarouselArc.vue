<template>
 <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xxl-4">
      <div :id="arc.Id" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              :src="arc.IllustrationOne"
              :alt="arc.Title"
              class="image-book"
            />
          </div>
          <div class="carousel-item">
            <img
              :src="arc.IllustrationTwo"
              :alt="arc.Title"
              class="d-block w-100"
            />
          </div>
          <div class="carousel-item">
            <img
              :src="arc.IllustrationThree"
              :alt="arc.Title"
              class="d-block w-100"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          :data-bs-target="'#'+arc.Id"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          :data-bs-target="'#'+arc.Id"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>     
    </div>
</template>
<script>
export default {
    name: 'CarouselArc',
    props: ['arc']
}
</script>