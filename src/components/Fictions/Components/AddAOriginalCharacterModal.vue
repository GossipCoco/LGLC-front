<template>
  <div class="col-6">
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary margin-1vh-0-0-0"
      data-bs-toggle="modal"
      data-bs-target="#AddAOriginalCharacterModalModal"
    >
      Ajouter un nouvel OC
    </button>
  </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="AddAOriginalCharacterModalModal"
      tabindex="-1"
      aria-labelledby="AddAOriginalCharacterModalModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1
              class="modal-title fs-5"
              id="AddAOriginalCharacterModalModalLabel"
              style="color: black"
            >
            Ajouter un personnage
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col">
                <label for="FirstCharacterId" class="form-label text-white"
                  >Sélectionner un personnage</label
                >
                <select
                  id="FirstCharacterId"
                  class="form-select"
                  aria-label="Default select example"
                  v-model="form.CharacterId"
                >
                  <option selected>Sélectionner le personnage</option>
                  <option
                    v-for="(character, index) in characters"
                    :value="character.Id"
                    :key="index"
                  >
                    {{ character.CurrentName }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fermer
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="AddAOriginalCharacterModal"
            >
              Ajouter le personnage
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import CharacterService from '../../../services/CharacterService';
  import GameService from '../../../services/GameService';
  export default {
    name: "AddAOriginalCharacterModalModal",
    props: ["IdGame"],
    data() {
    return {        
      usr: this.$store.state.auth.user.usrID,
      characters: {},
      form: {
        Id: null,
        GameId: this.IdGame,
        CharacterId: null,
      },
    };
  },created(){
    this.GetMyCharacter()
  },
  methods:{
    GetMyCharacter(){
      CharacterService.GetOriginaleCharacterByUser(this.usr)
      .then((response) => {
          this.characters = response.data.ob;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    AddAOriginalCharacterModal(){
      const idGame = this.IdGame;
      this.form.Id = idGame + " - " + this.form.CharacterId;
      this.form.GameId = idGame;
      GameService.AddANewOriginalCharacter(idGame, this.form)
      .then((response) => {
          if (response) {
            this.$router.push({ path: "/fiction/" + idGame });
            window.location.reload();
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }
}
  </script>