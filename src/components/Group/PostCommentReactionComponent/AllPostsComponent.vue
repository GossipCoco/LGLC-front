<template>
  <div
    id="group-details"
    class="width-190-vh height-100-vh background-none border-none padding-2-vh card mb-3 overflowY-auto"
  >
    <group-header v-bind:group="Group" />
    <div class="row gy-2">
      <div class="col-12 col-md-12">
        <div
          class="card group-container background-lineart poppins-text text-white border-none height-auto details-infos-group border-radius-12px poppins-text text-white"
          v-bind:style="bgStyle"
        >
          <div class="card-body">
            <div class="row">
                <div class="col-12 mb-3">
                    <router-link :to="'/OneGroupLayout/' + Group.Id" class="btn btn-primary margin-1vh height-5-vh">
                        {{ Group.Name }}
                    </router-link>                  
                </div>
            </div>
            <div class="row">
              <div class="col-6" v-for="(posts, index) in Post" :key="index">
                <div class="card mb-3 background-lineart poppins-text text-white">
                  <div class="card-body">
                    <h5 class="card-title">{{ posts.Title }}</h5>
                    <p v-html="truncateText(posts.Content, 500)"></p>
                    <p>
                        <router-link :to="'/PostComment/' + posts.Id" class="btn btn-primary"
                        >Voir plus</router-link>
                    </p>
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
      NbPosts: null,
      nav:{
        current: 0,
        pages: 0,
        step: 12,      
      }
    };
  },
  created() {
    this.url = this.$route.params.id;
    this.GetAllPostsByGroupId(this.url, this.nav);
    this.CountAllPostByGroupId(this.url);
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
    CountAllPostByGroupId(id){
        PostAllCommentReactions.CountAllPostByGroupId(id)
            .then((response) => {
            this.NbPosts = response.data.ob;
            console.log(this.NbPosts);
            })
            .catch((e) => {
            console.log(e);
            });
    },
    GetAllPostsByGroupId(id, nav) {
      PostAllCommentReactions.GetAllPostsByGroupId(id, nav)
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