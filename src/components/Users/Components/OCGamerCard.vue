<template>
  <hr />
  <h1 class="text-white">Fiche personnages</h1>
  <hr />
  <div class="all-characters-by-user-container background-color-main-lineart height-75-vh overflowY-scroll overflowX-hidden">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col-3" v-for="(gamer, index) in gamers" :key="index">        
          <div class="display-flex width-40-vh align-items-content-justify-content">
            <div class="card border-none background-color-main-lineart display-flex align-items-content-justify-content">
              <div class="card-header width-40-vh">
                <h3 class="card-title cinzel margin-2vh-0-0-0">
                  <router-link :to="'/OriginaleCharacterDetails/' + gamer.CurrentName" class="text-white">
                    {{ gamer.CurrentName }}
                  </router-link>
                </h3>
              </div>
              <div class="card-body display-flex-row">
                <img
                  :src="gamer.Image"
                  class="card-img-top avatar-gamer border-radius-100 width-15-vh height-15-vh"
                  :alt="gamer.UserName"
                />
                <div class="information-character-container overflowY-X-hidden width-20-vh">
                  <p>Clan de naissance : {{ gamer.Clan.Name }}</p>
                  <p>Statut actuel : {{ gamer.Status }}</p>
                  <p>Genre du personnage : {{ gamer.Genre }}</p>
                </div>
              </div>
            </div>
          </div>        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "OCGamerCard",
  props: ["gamers"],
  
};
</script>