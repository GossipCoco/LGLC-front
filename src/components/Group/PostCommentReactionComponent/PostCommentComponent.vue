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
        <div class="row">
            <div class="col-8">
                <h2 class="text-white">{{ postCommentReactions.Title }}</h2>
            </div>
            <div class="col-4 text-align-right">
                <p class="text-white">{{ postCommentReactions.User.UserName }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <p class="text-align-justify text-white" v-html="postCommentReactions.Content"></p> 
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PostCommentReactionsService from "../../../services/PostCommentReactions";
import GroupHeader from "../GroupComponent/GroupHeader.vue";
export default {
  name: "PostCommentReactionComponent",
  props: ["PostCommentReactions"],
    components: { GroupHeader },
  data() {
    return {
      url: "",
      postCommentReactions: {},
      Group: {},
    };
  },
   created() {
    console.log("created", this.$route.params.id);
    this.url = this.$route.params.id;
    console.log(this.url);
    this.GetAPostAllCommentReactionsById(this.url);
   },
   methods: {
    GetAPostAllCommentReactionsById(id){
        PostCommentReactionsService.GetAPostAllCommentReactionsById(id)
        .then((response) => {
          this.postCommentReactions = response.data.ob;
          console.log(this.postCommentReactions);
          this.Group = this.postCommentReactions.Group;
        })
    }
   },
};
</script>