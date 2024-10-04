<template>
  <div
    id="original-character-global-container"
    class="character-details card mb-3"
  >
    <div class="row g-0">
      <CharacterImageDetail v-bind:Image="character.Image" />
      <div class="col-8 col-md-8">
        <div class="card-body background-color-main-lineart details-infos-characters">
          <div class="display-flex-row">
            <div class="display-flex flex-one">
              <h1>{{ character.UserName }}</h1>
            </div>
            <div class="display-flex flex-one justify-content-right">
              <router-link
                class="btn btn-primary"
                to="/OriginaleCharacterByUser"
              >
                Mes personnages
              </router-link>
            </div>
          </div>
          <div class="row">
            <CharacterTabs
              v-bind:Description="character.Description"
              v-bind:Personnality="character.Personnality"
              v-bind:Biography="character.Biography"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CharacterService from "../../../services/CharacterService";
import CharacterImageDetail from "../GenericComponent/CharacterImageDetail.vue";
import CharacterTabs from "../GenericComponent/CharacterTabs.vue";
export default {
  name: "OriginalCharacterDetails",
  components: {
    CharacterImageDetail,
    CharacterTabs,
  },
  data() {
    return {
      character: {},
      url: this.$route.params.id,
    };
  },
  created() {
    this.GetOneOriginaleCharacterByName(this.url);
  },
  methods: {
    GetOneOriginaleCharacterByName(name) {
      CharacterService.GetOneOriginaleCharacterByName(name)
        .then((response) => {
          this.character = response.data.ob;
          console.log(this.character);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>