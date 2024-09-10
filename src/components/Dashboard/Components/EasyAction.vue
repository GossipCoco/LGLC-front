<template>
  <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12">
    <div class="card  fiction-card">     
      <div class="card-header">
        <h4>Actions rapides</h4>
      </div>
      <div class="card-body">
        <div class="display-flex-column flex-one">
        <router-link to="/CharacterCreate" type="button" class="btn btn-primary">
          Créer un nouveau personnage
        </router-link>
        <router-link type="button" class="btn btn-primary" to="/createANewFiction">Créer une nouvelle fiction</router-link>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EasyAction'
}
</script>