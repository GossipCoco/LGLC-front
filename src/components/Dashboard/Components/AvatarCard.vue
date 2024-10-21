<template>
  <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 card-global">
    <div class="card border-none display-flex-column profil-card fiction-card background-lineart">
      <TitleHeaderDashboard v-bind:title="UserName" v-bind:type="'username'" />
      <div class="card-body user-info-text">
        <div class="row display-flex align-items-content-justify-content">
          <div class="col-6">
            <div class="image_user_grade_level">
              <span class="text-white">{{ NameRole }}</span><br>
                <img
                  :src="'/images/Levels/' + level.Image"
                  :alt="level.Image"
                />
              </div>
          </div>
          <div class="col-6">
            <div class="image_user_grade_level">
              <span class="text-white">{{ LevelName }}</span><br>
                <img :src="'/images/Levels/' + roleImage" :alt="roleImage" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-7">
            <p><span class="label-profil">Inscription</span></p>
            <p><span class="label-profil">Dernière connextion</span></p>
            <p><span class="label-profil">Nb de fictions</span></p>
            <p><span class="label-profil">Nb de mots écrits</span></p>
            <p><span class="label-profil">Vous avez</span></p>
          </div>
          <div class="col-5">
            <p> <span>{{ formatDate(Inscription) }}</span> </p>
            <p> <span>{{ formatDate(LastConnexion) }}</span></p>
            <p><span>{{ nBFiction }}</span>&nbsp;fictions</p>
            <p><span> {{ totalWords }}</span>&nbsp;mots.</p>
            <p><span>{{ totalPoints }}</span>&nbsp; points.</p>
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
    "NameRole",
    "LevelName"
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