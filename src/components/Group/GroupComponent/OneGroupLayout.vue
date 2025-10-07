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
          <div class="card-title text-dark-green">{{ group.Name }}</div>
          <div class="card-body">{{ group.Description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GroupService from "../../../services/GroupService";
import GroupImageDetail from "./GroupImageDetail.vue";
export default {
  name: "OneGroupLayout",
  components: { GroupImageDetail },
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
