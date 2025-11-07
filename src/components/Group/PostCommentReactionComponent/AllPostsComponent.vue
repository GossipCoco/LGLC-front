<template>
  <div
    id="group-details"
    class="width-190-vh height-100-vh background-none border-none padding-2-vh card mb-3 overflowY-auto"
  >
    <group-header v-bind:group="Group" />
    <div class="row gy-2">
      <div class="col-12 col-md-12">
        <div
          class="card group-container border-none height-auto details-infos-group border-radius-12px poppins-text text-white"
          v-bind:style="bgStyle"
        >
          <div class="card-body">
            <div class="row">
              <div class="col-6" v-for="(posts, index) in Post" :key="index">
                <div class="card mb-3 background-white text-black">
                  <div class="card-body">
                    <h5 class="card-title">{{ posts.Title }}</h5>
                    <p v-html="truncateText(posts.Content, 255)"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      Background: null,
    };
  },
  created() {
    this.url = this.$route.params.id;
    this.GetAllPostsByGroupId(this.url);
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
    
    truncateText(text, maxLength) {
      if (text.length <= maxLength) {
        return text;
      }
      return text.substring(0, maxLength) + "...";
    },
    GetAllPostsByGroupId(id) {
      PostAllCommentReactions.GetAllPostsByGroupId(id)
        .then((response) => {
          this.Group = response.data.ob;
          console.log(this.Group);
          this.Post = this.Group.GroupPosts;
          this.Background = this.Group.Background;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>