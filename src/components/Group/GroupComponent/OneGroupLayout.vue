<template>
  <div></div>
</template>
<script>
import GroupService from "../../../services/GroupService";
export default {
  name: "OneGroupLayout",
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
      console.log(this.url)
        .then((response) => {
          this.group = response.data.ob;
          console.log(this.group);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },  mounted() {
    this.getGroup();
  },
};
</script>
