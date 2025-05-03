<template>
  <div class="display-flex-column flex-one padding-2-vh">
    <div class="row width-80-vh">
      <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-3 col-sm-3 col-xs-3">
        <p class="text-white"><strong>Genre</strong></p>
        <p class="text-white"><strong>{{ genre }}</strong></p>
      </div>
      <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-3 col-sm-3 col-xs-3">
        <p class="text-white"><strong>Grade</strong></p>
        <p class="text-white"><strong>{{ Grade }}</strong></p>
      </div>
      <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-3 col-sm-3 col-xs-3">
        <p class="text-white"><strong>Chaton</strong></p>
        <p class="text-white"><strong>{{ kitty }}</strong></p>
      </div>
      <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-3 col-sm-3 col-xs-3">
        <p class="text-white"><strong>Apprenti</strong></p>
        <p class="text-white"><strong>{{ apprentice }}</strong></p>
      </div>
      <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-3 col-sm-3 col-xs-3">
        <p class="text-white"><strong>Guerrier</strong></p>
        <p class="text-white"><strong>{{ warrior }}</strong></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TableInformationCharacter",
  props: ["NameClan", "genre", "Grade", "kitty", "apprentice", "warrior", "ClanId"],
};
</script>