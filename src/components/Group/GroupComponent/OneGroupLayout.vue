<template>
  <div
    id="group-details"
    class="width-190-vh height-100-vh background-none border-none padding-2-vh card mb-3 overflowY-auto"
  >
    <group-header v-bind:group="group"/>
    <div class="row gy-2">
      <div class="col-12 col-md-12">
        <div class="card group-container border-none height-120-vh background-none details-infos-group border-radius-12px poppins-text text-white">          
          <div class="card-body">
            <group-description v-bind:group="group"/>          
            <div class="row gy-4 margin-1vh">
              <list-members v-bind:group="group"/>
              <group-last-post v-bind:Post="Post"/>
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
export default {
  name: "OneGroupLayout",
  components: { GroupHeader, ListMembers, GroupLastPost, GroupDescription },
  data() {
    return {
      url: "",
      group: {},
      Post:{}
    };
  },
  created() {
    console.log("created", this.$route.params.id);
    this.url = this.$route.params.id;
    console.log(this.url);
    this.GetPostAllCommentReactions(this.url);
  },
  methods: {
    GetPostAllCommentReactions(id){
      PostAllCommentReactions.GetPostAllCommentReactions(id)
      .then((response) => {
        this.Post = response.data.ob;
        console.log(this.Post);
      })
      .catch((e) => {
        console.log(e);
      });
    },
    getGroup() {
      GroupService.GetGroupById(this.url)
        .then((response) => {
          this.group = response.data.ob;
          console.log(this.group);
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
