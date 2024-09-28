<template>
<div class="row">
  <div class="col" v-for="(fiction, index) in allFictions" :key="index">
    <div class="card">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="fiction.Image" class="img-fluid rounded-start" :alt="fiction.Image" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ fiction.Title }}</h5>
            <div class="card-text" v-html="truncateText(fiction.Summary, 10)">              
            </div>
            <p class="card-text">
              <small class="text-body-secondary"><router-link :to="'/fiction/'+fiction.Title">Lire la fiction</router-link></small>
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
  props: {
    allFictions: {
      type: Array,
      required: true,
    },
  },
  methods: {
    truncateText(text, maxLength) {
      return text.length <= maxLength ? text : text.substring(0, maxLength) + '...';
    }
  },
};
</script>
