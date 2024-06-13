<template>
  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
    <div class="card fiction-card">
      <div class="card-header">
        <h4>Personnages Aléatoires</h4>
      </div>
      <div class="border-gradient-decoration"></div>
      <div class="card-body dashboard-character-container">
        <!-- {{ randomCharacters }} -->
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
  </div>
</template>
<script>
export default {
  name: 'CharacterRandom',
  props: ['randomCharacters']
}
</script>