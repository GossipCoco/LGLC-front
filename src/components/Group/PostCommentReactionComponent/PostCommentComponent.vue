<template>
  <div
    id="post-comment-details"
    class="width-190-vh height-auto background-none border-none padding-2-vh card mb-3 overflowY-auto"
  >
    <group-header v-bind:group="Group" />
    <div
      class="card group-container border-none height-auto background-lineart details-infos-group border-radius-12px poppins-text text-white"
      v-bind:style="bgStyle"
    >
      <div class="card-body">
        <div class="row height-10-vh">
          <div class="col-12 display-flex align-items-content-justify-content">
            <router-link :to="'/OneGroupLayout/' + Group.Id" class="btn btn-primary margin-1vh height-5-vh">
              {{ Group.Name }}
            </router-link>
          </div>
        </div>
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
import PostCardComponent from "./PostCardComponent.vue";
import CommentsComponent from "./CommentsComponent.vue";
export default {
  name: "PostCommentReactionComponent",
  props: ["PostCommentReactions"],
  components: { GroupHeader, PostCardComponent, CommentsComponent },
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
      console.log("Background source:", src);
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
          console.log(response.data.ob);
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