<template>
  <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 card-global">
    <div class="card display-flex-column profil-card fiction-card">
      <TitleHeaderDashboard v-bind:title="UserName" v-bind:type="'username'" />
      <div class="card-body user-info-text">
        <div class="row">
          <div class="col-4">
            <p><span class="label-profil">Mes badges</span></p>
            <div class="display-flex-column">
              <div class="image_user_grade_level">
                <img
                  :src="'/images/Levels/' + level.Image"
                  :alt="level.Image"
                />
              </div>
              <div class="image_user_grade_level">
                <img :src="'/images/Levels/' + roleImage" :alt="roleImage" />
              </div>
            </div>
          </div>
          <div class="col-8">
            <p>
              <span class="label-profil">Inscription</span>
              <span>{{ formatDate(Inscription) }}</span>
            </p>
            <p>
              <span class="label-profil">Dernière connextion</span>
              <span>{{ formatDate(LastConnexion) }}</span>
            </p>
            <p>
              <span class="label-profil">Vous avez écrit</span>
              <span>{{ nBFiction }}</span
              >fictions &<span><br />{{ totalWords }}</span
              >&nbsp; mots.
            </p>
            <p>
              <span class="label-profil">Vous avez</span>
              <span>{{ totalPoints }}</span
              >&nbsp; points.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TitleHeaderDashboard from "../../Components/SpecificComponent/TitleHeaderDashboard.vue";
export default {
  name: "AvatarCard",
  props: [
    "Avatar",
    "UserName",
    "LastConnexion",
    "Inscription",
    "level",
    "Role",
    "nBFiction",
    "totalWords",
    "totalPoints",
    "roleImage",
  ],
  components: { TitleHeaderDashboard },
  data() {
    return {
      avatar: this.Avatar,
      lev: this.level,
      roleUser: this.Role,
    };
  },
  methods: {
    formatDate(isoDateString) {
      if (isoDateString) {
        const date = new Date(isoDateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      } else return "";
    },
  },
};
</script>