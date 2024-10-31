<template>
  <hr />
  <h1 class="text-white">Fiche personnages</h1>
  <hr />
  <div class="all-characters-by-user-container overflowY-hidden overflowX-hidden">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col-3" v-for="(gamer, index) in gamers" :key="index">
        <div class="col-11">
          <div class="display-flex  align-items-content-justify-content">
            <div class="card display-flex align-items-content-justify-content">
              <div class="card-header">
                <h3 class="card-title cinzel">{{ gamer.CurrentName }}</h3>
              </div>
              <div class="card-body display-flex-row">
                <img
                  :src="gamer.Image"
                  class="card-img-top avatar-gamer"
                  :alt="gamer.UserName"
                />
                <div class="information-character-container overflowY-X-hidden">
                  <p>Clan de naissance : {{ gamer.ClanId }}</p>
                  <p>Statut actuel : {{ gamer.Status }}</p>
                  <p>Genre du personnage : {{ gamer.Genre }}</p>
                </div>
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