<template>
  <div id="ldgc-hub" class="margin-5vh">
    <div class="row">
      <div class="col">
        <div class="card background-color-dark-green-01">
          <img
            src="/images/Backgrounds/Warriors_043355.png"
            class="card-img-top"
            alt="Warriors_043355.png"
          />
          <div class="card-body">
            <router-link to="/allCharacters" class="text-white">Les Personnages</router-link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card background-color-dark-green-01">
          <img
            src="/images/Backgrounds/Warriors_043248.png"
            class="card-img-top"
            alt="Warriors_043355.png"
          />
          <div class="card-body">
            <router-link to="/AllClansLayout" class="text-white">Les Clans</router-link>
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
            <router-link to="/AllLocationsLayout" class="text-white">
              Les lieux emblématique
            </router-link>
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
            <router-link to="/ArcBookLayout" class="text-white">Arcs & livres</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LgdcVue",
};
</script>