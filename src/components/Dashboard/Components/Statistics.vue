<template>
  <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12  card-global">
    <div class="card border-none fiction-card">      
      <div class="card-header">
        <h4>Quelques chiffres</h4>
      </div>
      <div class="card-body">
        <p>Vous avez écrit {{ nBFiction }} fictions.</p>
        <p>Vous avez écrit {{ totalWords }} mots.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Statistics",
  props: ['nBFiction', 'totalWords'],
}
</script>