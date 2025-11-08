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
  name: "NewResponseToPostComponent",
  components: { GroupHeader },
  data() {
    return {
      url: "",
      Group: {},
      InfoGroup: {},
      Background: null,
    };
  },
  created() {
    this.url = this.$route.params.id;
    this.GetGroupByPostId(this.url);
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
    GetGroupByPostId(id) {
      GroupService.GetGroupByPostId(id)
        .then((response) => {
          this.Group = response.data.ob;
          this.InfoGroup = this.Group.Group;
          this.Background = this.InfoGroup.Background;
          console.log("Group :", this.Group);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération du groupe :", error);
        });
    },
  },
};
</script>