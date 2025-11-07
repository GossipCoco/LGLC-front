<template>
  <div
    id="group-details"
    class="width-190-vh height-100-vh background-none border-none padding-2-vh card mb-3 overflowY-auto"
  >
    <group-header v-bind:group="group" />
    <div class="row gy-2">
      <div class="col-12 col-md-12">
        <div
          class="card group-container border-none height-120-vh details-infos-group border-radius-12px poppins-text text-white"
          v-bind:style="bgStyle"
        >
          <div class="card-body">
            <group-btn v-bind:group="group" />
            <div class="row height-40-vh margin-1vh">
              <group-description v-bind:group="group" />
              <list-members v-bind:group="group" />
            </div>
            <div class="row gy-4 margin-1vh">
              <group-last-post v-bind:Post="Post" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GroupService from "../../../services/GroupService";
import PostAllCommentReactions from "../../../services/PostCommentReactions";
import GroupHeader from "./GroupHeader.vue";
import GroupBtn from "./GroupBtn.vue";
import ListMembers from "./ListMembers.vue";
import GroupLastPost from "./GroupLastPost.vue";
import GroupDescription from "./GroupDescription.vue";
export default {
  name: "OneGroupLayout",
  components: {
    GroupHeader,
    ListMembers,
    GroupLastPost,
    GroupDescription,
    GroupBtn,
  },
  data() {
    return {
      url: "",
      group: {},
      Post: {},
      Background: null,
    };
  },
  created() {
    this.url = this.$route.params.id;
    this.GetPostAllCommentReactions(this.url);
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
    GetPostAllCommentReactions(id) {
      PostAllCommentReactions.GetPostAllCommentReactions(id)
        .then((response) => {
          this.Post = response.data.ob;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getGroup() {
      GroupService.GetGroupById(this.url)
        .then((response) => {
          this.group = response.data.ob;
          console.log(this.group.Background);
          this.Background = this.group.Background;
          console.log(this.Background);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getGroup();
  },
};
</script>
