<template>
  <div>
    <!-- niveau courant -->
    <div
      class="row margin-1vh"
      v-for="(c, idx) in Comments"
      :key="c.Id || idx"
    >
      <div :class="cardClass">
        <!-- en-tête uniquement au niveau racine -->
        <div v-if="depth === 0" class="card-header">
          <div class="row">
            <div class="col-8 display-flex">
              <img :src="'/images/Avatars/'+ c.User.Avatar" class="rounded-circle avatar height-10-vh"/><h2 class="text-white post-title-text">{{ c.User.UserName }} répond : </h2>
            </div>
            <div class="col-4 text-align-right"></div>
          </div>
        </div>

        <div class="card-body">
          <p class="text-align-justify text-white" v-html="c.Content"></p>
          <!-- <footer>
            <router-link :to="'/NewResponseToComment/'+ c.Id" class="btn btn-primary margin-1vh height-5-vh">
              Répondre
            </router-link>
          </footer> -->
          <!-- enfants -->
          <div v-if="hasReplies(c)">
            <div class="display-flex align-items-center margin-top-2vh">
              <img :src="'/images/Avatars/'+ c.User.Avatar" class="rounded-circle avatar height-10-vh"/>
              <h3 class="text-white">{{c.User.UserName}} répond :</h3>
            </div>
            <div class="ms-3">
              <!-- récursion sur CE MÊME composant -->
              <CommentsComponent
                :Comments="c.Replies"
                :depth="depth + 1"
              >              
                <!-- <footer>
                  <router-link :to="'/NewResponseToComment/'+ c.Id" class="btn btn-primary margin-1vh height-5-vh">
                    Répondre
                  </router-link>
                </footer> -->
              </CommentsComponent>
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
    hasReplies(node) {
      console.log("node :", node);
      return Array.isArray(node.Replies) && node.Replies.length > 0;
    },
  },
  created() {
    // debug minimal
    // console.log("CommentsComponent depth:", this.depth, "items:", this.Comments?.length);
  },
};
</script>
