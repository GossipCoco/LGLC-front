<template>
  <div
    id="post-comment-details"
    class="width-100-100 height-auto background-none border-none  padding-2vh-2vh-10vh-2vh  card mb-3 overflowY-auto"
  >
    <group-header v-bind:group="Group">
      <header-component v-bind:group="Group" />
    </group-header>
    <div
      class="card group-container border-none height-auto background-lineart details-infos-group border-radius-12px poppins-text text-white"
      v-bind:style="bgStyle"
    >
      <div class="card-body">
        <PostCardComponent
          v-bind:post="postCommentReactions"
          v-bind:UserName="UserName"
        />
        <comments-component v-bind:Comments="Comments" />
      </div>
    </div>
  </div>
</template>
<script>
import PostCommentReactionsService from "../../../services/PostCommentReactions";
import GroupHeader from "../GroupComponent/GroupHeader.vue";
import HeaderComponent from "../GroupComponent/HeaderComponent.vue";
import PostCardComponent from "./PostCardComponent.vue";
import CommentsComponent from "./CommentsComponent.vue";
export default {
  name: "PostCommentReactionComponent",
  props: ["PostCommentReactions"],
  components: { GroupHeader, PostCardComponent, CommentsComponent, HeaderComponent },
  data() {
    return {
      url: "",
      postCommentReactions: {},
      Comments: {},
      Group: {},
      UserName: null,
      Background: null,
    };
  },
  created() {
    this.url = this.$route.params.id;
    this.GetAPostAllCommentReactionsById(this.url);
  },
  computed: {
    bgStyle() {
      // 1) source = Background si dispo, sinon group.Background, sinon group.Image
      const src = this.Background;
      if (!src) return {}; // => pas de style tant qu’on n’a rien (évite url(null))
      return {
        backgroundImage: `url("${src}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      };
    },
  },
  methods: {
    GetAPostAllCommentReactionsById(id) {
      PostCommentReactionsService.GetAPostAllCommentReactionsById(id)
      .then(
        (response) => {
          this.Background = response.data.ob.Group.Background;
          this.postCommentReactions = response.data.ob;
          this.Group = this.postCommentReactions.Group;
          this.UserName = this.postCommentReactions.User.UserName;
          this.Comments = this.postCommentReactions.Comments;
        }
      )
      .catch((e) => {
        console.log(e);
      });
    },
  },
};
</script>