<template>
  <div class="card card-image-layout clan-detail-layout display-flex-row mb-3">
    <div
      class="card-image clan-detail-card border-card-color"
      v-bind:style="{
        backgroundImage: 'url(' + clan.Image + ')',
      }"
    ></div>
    <div class="card-body">
      <h5 class="card-title">{{ clan.Name }}</h5>
      <div class="card-text">
        <p>{{ clan.Description }}</p>
        <div
          class="display-flex-row flex-one align-items-content-justify-content all-characters-list-containers"
        >
          <div
            class="flex-one display-flex-column"
            v-for="(character, index) in clan.Warriors"
            :key="index"
          >
            <div
              class="display-flex-column flex-one indivual-caracter-container"
            >
              <img
                class="img-fluid"
                :src="character.Character.Image"
                :alt="character.Character.Image"
              /><br />

              <router-link
                :to="'/characterDetails/' + character.Character.Id"
                type="button"
                class="btn"
              >
                {{ character.Character.CurrentName }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ClanService from "../../services/ClansServices";
export default {
  name: "ClanDetails",
  data() {
    return {
      url: "",
      clan: {},
      CurrentName: null,
      Image: null,
    };
  },
  created() {
    this.url = this.$route.params.id;
  },
  mounted() {
    this.getClan();
  },
  methods: {
    getClan() {
      ClanService.getClanByName(this.url)
        .then((response) => {
          this.clan = response.data.ob;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
