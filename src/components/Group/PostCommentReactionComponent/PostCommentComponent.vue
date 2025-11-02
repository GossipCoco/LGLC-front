<template>
  <div
    id="post-comment-details"
    class="width-190-vh height-100-vh background-none border-none padding-2-vh card mb-3 overflowY-auto"
  >
    <group-header v-bind:group="Group" />
    <div
      class="card group-container border-none height-120-vh background-lineart details-infos-group border-radius-12px poppins-text text-white"
    >
      <div class="card-body">
        <PostCardComponent v-bind:post="postCommentReactions" v-bind:UserName="UserName" />
        <comments-component v-bind:Comments="Comments" />
        <!-- <div class="row margin-1vh" v-for="(Comments, index) in Comments" :key="index"  >
            <div class="card background-color-middle-green-01">
              <div class="card-header">
                <div class="row">
                  <div class="col-8">
                    <h2 class="text-white post-title-text">Réponse</h2>
                  </div>
                  <div class="col-4 text-align-right">                    
                  </div>
                </div>
              </div>
              <div class="card-body ">
                <p
                  class="text-align-justify text-white"
                  v-html="Comments.Content"
                ></p>
              </div>
            </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import PostCommentReactionsService from "../../../services/PostCommentReactions";
import GroupHeader from "../GroupComponent/GroupHeader.vue";
import PostCardComponent from "./PostCardComponent.vue";
import CommentsComponent from "./CommentsComponent.vue";
export default {
  name: "PostCommentReactionComponent",
  props: ["PostCommentReactions"],
  components: { GroupHeader, PostCardComponent, CommentsComponent},
  data() {
    return {
      url: "",
      postCommentReactions: {},
      Comments:{},
      Group: {},
      UserName: null,
    };
  },
  created() {
    this.url = this.$route.params.id;
    this.GetAPostAllCommentReactionsById(this.url);
  },
  methods: {
    GetAPostAllCommentReactionsById(id) {
      PostCommentReactionsService.GetAPostAllCommentReactionsById(id).then(
        (response) => {
            this.postCommentReactions = response.data.ob;
            this.Group = this.postCommentReactions.Group;
            this.UserName = this.postCommentReactions.User.UserName;
            this.Comments = this.postCommentReactions.GroupComments;
        }
      );
    },
  },
};
</script>