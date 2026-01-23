<template>
  <div
    id="group-details"
    class="width-100-100 height-100-vh background-none border-none padding-2vh-2vh-10vh-2vh card mb-3 overflowY-auto"
  >
    <group-header v-bind:group="group">
      <header-component v-bind:group="group" />
    </group-header>
    <div class="row gy-2 height-auto">
      <div class="col-12 col-md-12">
        <div
          class="card group-container border-none height-auto details-infos-group width-100-100 border-radius-12px poppins-text text-white"
          v-bind:style="bgStyle"
        >
          <div class="card-body">
            <div class="row height-auto margin-1vh">
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
import ListMembers from "./ListMembers.vue";
import GroupLastPost from "./GroupLastPost.vue";
import GroupDescription from "./GroupDescription.vue";
import HeaderComponent from "./HeaderComponent.vue";
export default {
  name: "OneGroupLayout",
  components: {
    GroupHeader,
    ListMembers,
    GroupLastPost,
    GroupDescription,
    // GroupBtn,
    HeaderComponent
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
          console.log("Group data:", this.group);
          this.Background = this.group.Background;
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