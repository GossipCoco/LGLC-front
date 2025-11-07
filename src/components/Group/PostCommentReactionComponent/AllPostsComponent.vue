<template>
  <div
    id="group-details"
    class="width-190-vh height-100-vh background-none border-none padding-2-vh card mb-3 overflowY-auto"
  >
  <group-header v-bind:group="Group" />
   
  </div>
</template>
<script>
import PostAllCommentReactions from "../../../services/PostCommentReactions";
import GroupHeader from "../GroupComponent/GroupHeader.vue";
export default {
  name: "AllPostsComponent",
  components: {
    GroupHeader,
  },
  data() {
    return {
      url: "",
      Post: {},
      Group: {},
    };
  },
  created() {
    this.url = this.$route.params.id;
    this.GetAllPostsByGroupId(this.url);
  },
  methods: {
    GetAllPostsByGroupId(id) {
      PostAllCommentReactions.GetAllPostsByGroupId(id)
        .then((response) => {
          this.Group = response.data.ob;
          console.log(this.Group);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>