<template>
  <div>
    <div
      class="row margin-1vh"
      v-for="(comment, index) in Comments"
      :key="index"
    >
      <div :class="cardClass">
        <div class="card-header">
          <div class="row">
            <div class="col-8 display-flex">
              <img :src="'/images/Avatars/'+ comment.User.Avatar" class="rounded-circle avatar height-10-vh"/><h2 class="text-white post-title-text">{{ comment.User.UserName }} répond : </h2>
            </div>
            <div class="col-4 text-align-right"></div>
          </div>
        </div>
        <div class="card-body">
          <p class="text-align-justify text-white" v-html="comment.Content"></p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "CommentsComponent",
  props: {
    Comments: { type: Array, default: () => [] },
    depth: { type: Number, default: 0 },
  },
  computed: {
    cardClass() {
      return this.depth === 0
        ? "card background-color-middle-green-01"
        : "card background-color-middle-green-01 margin-1vh";
    },
  },
  methods: {

  },
  created() {
    // debug minimal
    // console.log("CommentsComponent depth:", this.depth, "items:", this.Comments?.length);
  },
};
</script>
