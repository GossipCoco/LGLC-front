<template>
  <div
    id="group-details"
    class="width-190-vh height-100-vh background-none border-none padding-2vh-2vh-10vh-2vh card mb-3 overflowY-auto"
  >
    <group-header v-bind:group="Group">
      <header-component v-bind:group="Group" />
    </group-header>
    <div class="row gy-2">
      <div class="col-12 col-md-12">
        <div
          class="card group-container background-lineart poppins-text text-white border-none height-auto details-infos-group border-radius-12px poppins-text text-white"
          v-bind:style="bgStyle"
        >
          <div class="card-body">
            <div class="row">
              <div class="col-12 mb-3">
                <router-link
                  :to="'/OneGroupLayout/' + Group.Id"
                  class="btn btn-primary margin-1vh height-5-vh"
                >
                  {{ Group.Name }}
                </router-link>
                <router-link
                  :to="'/CreateANewPost/' + Group.Id"
                  class="btn btn-primary margin-1vh height-5-vh"
                  >Créer un nouveau post</router-link
                >
              </div>
            </div>
            <extract-post-component :Post="Post" />
            <div class="row pagination-container">
              <Pagination
                v-if="!showspinner"
                :nav="nav"
                :filters="filters"
                :getDatas="'FictionPagination'"
                @FictionPagination="FictionPagination"
              />
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
import HeaderComponent from "../GroupComponent/HeaderComponent.vue";
import ExtractPostComponent from "./ExtractPostComponent.vue";
import Pagination from "../../Components/GenericComponent/Pagination.vue";

export default {
  name: "AllPostsComponent",
  components: { GroupHeader, ExtractPostComponent, Pagination, HeaderComponent },
  data() {
    return {
      url: "",
      Group: {},
      Post: [], // <- tableau
      Background: null,
      NbPosts: 0,
      showspinner: false,
      filters: [], // comme AllFictions
      width: 1700, // breakpoints identiques
      nav: {
        current: 0,
        pages: 0,
        step: 12,
      },
    };
  },
  created() {
    this.url = this.$route.params.id;
    this.initDataPosts();
  },
  computed: {
    bgStyle() {
      const src = this.Background;
      if (!src) return {};
      return {
        backgroundImage: `url("${src}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      };
    },
  },
  methods: {
    async initDataPosts() {
      try {
        this.showspinner = true;
        await this.CountAllPostByGroupId(this.url);
        // adapter le step à la largeur (même logique que AllFictions)
        if (window.innerWidth >= this.width) this.nav.step = 12;
        else this.nav.step = 8;
        await this.GetAllPostsByGroupId(this.url, this.nav);
      } catch (e) {
        console.error(e);
      } finally {
        this.showspinner = false;
      }
    },
    async FictionPagination(page) {
      // évènement émis par ton <Pagination/> (on garde le même nom)
      this.nav.current = page;
      if (window.innerWidth >= this.width) this.nav.step = 12;
      else this.nav.step = 8;
      await this.GetAllPostsByGroupId(this.url, this.nav);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    async CountAllPostByGroupId(id) {
      const res = await PostAllCommentReactions.CountAllPostByGroupId(id);
      // compat : soit {ob: {count: n}} soit {ob: n}
      const count = res?.data?.ob?.count ?? res?.data?.ob ?? 0;
      this.NbPosts = count;
      this.nav.pages = Math.ceil(count / this.nav.step || 1);
    },
    async GetAllPostsByGroupId(id, nav) {
      const res = await PostAllCommentReactions.GetAllPostsByGroupId(id, nav);
      // on s'attend à recevoir un Group avec GroupPosts paginés
      this.Group = res.data.ob || {};
      this.Post = this.Group.GroupPosts || [];
      this.Background = this.Group.Background || this.Group.Image || null;
    },
  },
};
</script>