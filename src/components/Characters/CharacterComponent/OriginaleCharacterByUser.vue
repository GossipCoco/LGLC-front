<template>
<div class="row all-my-characters-container">
  <div class="col-sm-3 mb-3 mb-sm-3"  v-for="(character, index) in allMyCharacters" :key="index">
    <div class="card">
      <img :src="character.Image" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ character.UserName }}</h5>
        <div class="card-text">
          <div
              class="card-text summary-text-font"
              v-html="truncateText(character.Description, 50)"
            ></div>
        </div>

      </div>
    </div>
  </div>
  
</div>
</template>
<script>
import CharacterService from "../../../services/CharacterService";

export default {
  name: "OriginaleCharacterByUser",
  data() {
    return {
      usr: this.$store.state.auth.user.usrID,
      allMyCharacters: {},
    };
  },
  created() {
    this.init();
  },
  methods: {
    truncateText(text, maxLength) {
      return text.length <= maxLength
        ? text
        : text.substring(0, maxLength) + "...";
    },
    init() {
      console.log(this.usr);
      this.GetOriginaleCharacterByUser(this.usr);
    },
    GetOriginaleCharacterByUser(user) {
      CharacterService.GetOriginaleCharacterByUser(user)
        .then((response) => {
          console.log(response.data.ob);
          this.allMyCharacters = response.data.ob;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>