<template>
  <div
    id="original-character-global-container"
    class="character-details padding-1-rem card mb-3"
  >
    <div class="row g-0">
      <CharacterImageDetail v-bind:Image="character.Image">
        
      </CharacterImageDetail>
      <div class="col-8 col-md-8">
        <div class="card-body overflowY-X-hidden background-color-main-lineart details-infos-characters text-white">
          <div class="display-flex-row">
            <div class="display-flex flex-one">
              <h1 class="text-white card-title cinzel">{{ character.CurrentName }}</h1>
            </div>            
            <div class="display-flex flex-one justify-content-right">
              <router-link
                class="btn btn-primary margin-0-rem height-5-vh"
                to="/OriginaleCharacterByUser"
              >
                Retour à tous mes personnages
              </router-link>
            </div>
          </div>
          <div class="row">
            <div class="col-2">
              <p>Grade : </p>
              <p>Genre : </p>
              <p>Nom de chaton</p>
              <p>Nom d'apprenti</p>
              <p>Nom de guerrier</p>
            </div>
            <div class="col-4">
              <p>{{ grade }}</p>
              <p>{{ character.Genre }}</p>
              <p>{{ character.KitName }}</p>
              <p>{{ character.WarriorName }}</p>
              <p>{{ character.ApprenticeName }}</p>
            </div>
            <div class="col-4"></div>
            <div class="col-2 display-flex align-items-content-justify-content">
              <img :src="'/images/clans/' + symbol" />
            </div>
          </div>
          <div class="row">
            <CharacterTabs
              v-bind:CurrentName="character.CurrentName"
              v-bind:Description="character.Description"
              v-bind:Personnality="character.Personnality"
              v-bind:Biography="character.Biography"
              v-bind:Relation="relation"
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
      symbol: null,
      grade: null,
      relation: {}
    };
  },
  created() {
    this.GetOneOriginaleCharacterByName(this.url);
  },
  methods: {
    GetOneOriginaleCharacterByName(name) {
      CharacterService.GetOneOriginaleCharacterByName(name)
        .then((response) => {
          console.log(response.data.ob)
          this.character = response.data.ob;
          this.symbol = response.data.ob.Clan.Symbol
          this.grade = response.data.ob.Grade.Name
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>