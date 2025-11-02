<template>
  <div
    class="row margin-1vh"
    v-for="(Comments, index) in Comments"
    :key="index"
  >
    <div class="card background-color-middle-green-01">
      <div class="card-header">
        <div class="row">
          <div class="col-8">
            <h2 class="text-white post-title-text">Réponse</h2>
          </div>
          <div class="col-4 text-align-right"></div>
        </div>
      </div>
      <div class="card-body">
        <p class="text-align-justify text-white" v-html="Comments.Content"></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CommentsComponent",
  props: ["Comments"],
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>