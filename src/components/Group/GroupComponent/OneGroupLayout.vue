<template>
  <div
    id="group-details"
    class="width-190-vh height-95-vh background-none border-none padding-2-vh card mb-3"
  >
    <div class="row g-0">
      <div class="col-4 col-md-4">
        <group-image-detail v-bind:Image="group.Image"/>
      </div>
      <div class="col-8 col-md-8">
        <div class="card border-none height-95-vh background-color-main-lineart details-infos-characters border-radius-12px poppins-text text-white">          
          <div class="card-title text-white">{{ group.Name }}</div>
          <div class="card-body">
            <p>{{ group.Description }}</p>
            <div class="row">
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">                
                <list-members v-bind:group="group"/>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                
                <div v-for="(posts, index) in group.GroupPosts" :key="index">
                  <h2>{{ posts.Title}}</h2>
                  <p>{{ posts.Content }}</p>
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
import GroupService from "../../../services/GroupService";
import GroupImageDetail from "./GroupImageDetail.vue";
import ListMembers from "./ListMembers.vue";
export default {
  name: "OneGroupLayout",
  components: { GroupImageDetail, ListMembers },
  data() {
    return {
      url: "",
      group: {},
    };
  },
  created() {
    console.log("created", this.$route.params.id);
    this.url = this.$route.params.id;
    console.log(this.url);
  },
  methods: {
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
