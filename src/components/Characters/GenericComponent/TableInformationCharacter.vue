<template>
  <div class="display-flex-column flex-one padding-2-vh margin-2vh-0">
    <div class="row width-100-100">
      <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-sm-2 col-xs-2">
        <p class="text-white"><strong>Genre</strong></p>
        <p class="text-white">{{ genre }}</p>
      </div>
      <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-3 col-sm-3 col-xs-3">
        <p class="text-white"><strong>Grade</strong></p>
        <p class="text-white">{{ Grade }}</p>
      </div>
      <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-sm-2 col-xs-2">
        <p class="text-white"><strong>Chaton</strong></p>
        <p class="text-white">{{ kitty }}</p>
      </div>
      <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-3 col-sm-3 col-xs-3">
        <p class="text-white"><strong>Apprenti</strong></p>
        <p class="text-white">{{ apprentice }}</p>
      </div>
      <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-3 col-sm-3 col-xs-3">
        <p class="text-white"><strong>Guerrier</strong></p>
        <p class="text-white">{{ warrior }}</p>
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