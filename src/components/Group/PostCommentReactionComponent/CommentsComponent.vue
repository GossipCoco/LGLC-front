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
        <div v-if="Comments.Replies.length > 0">
          <h3 class="text-white">Réponses :</h3>
          <div
            class="card background-color-light-green-01 margin-1vh"
            v-for="(reply, replyIndex) in Comments.Replies"
            :key="replyIndex"
          >
            <div class="card-body">
              <p class="text-align" v-html="reply.Content"></p>
            </div>
          </div>
        </div>
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