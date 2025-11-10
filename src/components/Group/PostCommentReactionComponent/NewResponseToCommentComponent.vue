<template>
  <div
    id="group-details"
    class="width-190-vh height-100-vh background-none border-none padding-2-vh card mb-3 overflowY-auto"
  >
    <group-header v-bind:group="InfoGroup" />
    <div class="row gy-2">
      <div class="col-12 col-md-12">
        <div
          class="card group-container border-none height-auto details-infos-group border-radius-12px poppins-text text-white"
          v-bind:style="bgStyle"
        >
          <div class="card-body"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GroupService from "../../../services/GroupService";
import GroupHeader from "../GroupComponent/GroupHeader.vue";
export default {
  name: "NewResponseToCommentComponent",
  components: {
    GroupHeader,
  },
  data() {
    return {
      url: null,
      Group: {},
      InfoGroup: {},
      Background: null,
      form: {
        Content: "", // HTML renvoyé par l’éditeur
        UserId: this.$store.state.auth.user.usrID,
        PostId: null,
        ParentId: this.$route.params.id,
      },
    };
  },
  created() {
    this.url = this.$route.params.id;
    this.GetGroupByCommentById(this.url);
  },
  computed: {
    bgStyle() {
      const src = this.Background;
      console.log("Background source:", src);
      if (!src) return {};
      return {
        backgroundImage: `url("${src}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      };
    },
  },
  methods: {
    GetGroupByCommentById(id) {
      GroupService.GetGroupByCommentById(id)
        .then((response) => {
          this.Group = response.data.ob;
          console.log(this.Group);
          this.InfoGroup = this.Group.GroupPost.Group;
          this.form.PostId = this.Group.GroupPost.Id;
          this.Background = this.InfoGroup.Background;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>