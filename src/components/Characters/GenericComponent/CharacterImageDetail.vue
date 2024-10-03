<template>
  <div class="col-4 col-md-4">
    <div class="parallax">
      <div class="parallax__layer parallax__layer--back">
        <div
          class="character-details-card background-size-cover diaplay-flex background-size-cover card-image border-card-color original-character-contain"
          v-bind:style="{
            backgroundImage: 'url(' + Image + ')',
          }"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'CharacterImageDetail',
    props:['Image']
}
</script>