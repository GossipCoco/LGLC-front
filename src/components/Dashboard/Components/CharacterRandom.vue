<template>
  <div class="col-xxl-3 col-xl3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
    <div class="card fiction-card">
      <div class="card-header">
        <h4>Personnages Aléatoires</h4>
      </div>
      <div class="border-gradient-decoration-character"></div>
      <div class="card-body dashboard-character-container">
        <div class="row">
          <div class="col-12 character-col">
            <div class="character-l1" v-for="character in randomCharacters" :key="character.Id">
              <img class="img-fluid" :src="'/images/Characters/' + character.Image" :alt="character.Image" />
              <br>
              <span>
                <router-link :to="'/characterDetails/' + character.Id">
                  {{ character.CurrentName }}
                </router-link>
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <router-link to="/CharacterCreate" type="button" class="btn btn-primary">
              Créer un nouveau personnage
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CharacterRandom',
  props: ['randomCharacters']
}
</script>