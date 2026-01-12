<template>
  <div id="creation-hub" class="margin-10vh-20vh">
    <div class="row row-cols-4 row-cols-md-4 g-4">
      <div class="col">
        <div class="card background-color-dark-green-01">
          <img
            src="/images/Backgrounds/Warriors_043355.png"
            class="card-img-top"
            alt="Warriors_043355.png"
          />
          <div class="card-body">
            <router-link to="/OriginaleCharacterByUser" class="text-white"
              >Mes Personnages</router-link
            >
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card background-color-dark-green-01">
          <img
            src="/images/Backgrounds/Warriors_043355.png"
            class="card-img-top"
            alt="Warriors_043355.png"
          />
          <div class="card-body">
            <router-link :to="'/allFictions/' + usrId" class="text-white"
              >Mes fictions</router-link
            >
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card background-color-dark-green-01">
          <img
            src="/images/Backgrounds/Warriors_043355.png"
            class="card-img-top"
            alt="Warriors_043355.png"
          />
          <div class="card-body">
            <router-link to="/AllExistingFictionsLayout" class="text-white"
              >Lire des fictions</router-link
            >
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card background-color-dark-green-01">
          <img
            src="/images/Backgrounds/Warriors_043355.png"
            class="card-img-top"
            alt="Warriors_043355.png"
          />
          <div class="card-body">
            <router-link to="/createANewFiction" class="text-white"
              >Nouvelle fiction</router-link
            >
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card background-color-dark-green-01">
          <img
            src="/images/Backgrounds/Warriors_043355.png"
            class="card-img-top"
            alt="Warriors_043355.png"
          />
          <div class="card-body">
            <router-link to="/CreateAnOriginalCharacter" class="text-white"
              >Créer un personnage</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CreationVue",
  data() {
    return {
      usrId: this.$store.state.auth.user.usrID,
    };
  },
};
</script>