<template>
  <div
    id="original-character-global-container"
    class="character-details padding-2-vh card mb-3"
  >
    <div class="row g-0">
      <CharacterImageDetail v-bind:Image="character.Image" />
      <div class="col-8 col-md-8">
        <div class="card-body overflowY-X-hidden background-color-main-lineart details-infos-characters border-radius-12px text-white">
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
            <div class="col-12">
              <div class="information-global-character">
                <div class="display-flex-row character-info-general-container">
                  <div class="clan-logo-container">
                    <router-link type="button" class="btn btn-primary" :to="'/clan/'+Clan.Id">
                      <img :src="'/images/clans/'+symbol" />
                    </router-link>
                  </div>
                  <TableInformationCharacter
                    v-bind:NameClan="Clan.Name"
                    v-bind:genre="character.Genre"
                    v-bind:Grade="grade"
                    v-bind:kitty="character.KitName"
                    v-bind:apprentice="character.ApprenticeName"
                    v-bind:warrior="character.WarriorName"
                    v-bind:ClanId="Clan.Id"
                  />
                </div>
              </div>
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
import TableInformationCharacter from "../GenericComponent/TableInformationCharacter.vue";
export default {
  name: "OriginalCharacterDetails",
  components: {
    CharacterImageDetail,
    CharacterTabs,
    TableInformationCharacter
  },
  data() {
    return {
      character: {},
      url: this.$route.params.id,
      symbol: null,
      grade: null,
      relation: {},
      Clan:{}
    };
  },
  created() {
    this.GetOneOriginaleCharacterByName(this.url);
  },
  methods: {
    GetOneOriginaleCharacterByName(name) {
      CharacterService.GetOneOriginaleCharacterByName(name)
        .then((response) => {
          console.log(response.data.ob.Clan)
          this.Clan = response.data.ob.Clan
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