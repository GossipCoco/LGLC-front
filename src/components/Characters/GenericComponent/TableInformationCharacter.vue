<template>
  <div class="display-flex-column flex-one padding-2-vh margin-2vh-0">
    <div class="row width-100-100">
      <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-sm-12 col-xs-12">
        <p class="text-white"><strong>Genre</strong> : {{ genre }}</p>
      </div>
      <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-sm-12 col-xs-12">
        <p class="text-white"><strong>Grade</strong> : {{ Grade }}</p>
      </div>
      <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-sm-12 col-xs-12">
        <p class="text-white"><strong>Chaton</strong> : {{ kitty }}</p>
      </div>
      <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-sm-12 col-xs-12">
        <p class="text-white"><strong>Apprenti</strong> : {{ apprentice }}</p>
      </div>
      <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-sm-12 col-xs-12">
        <p class="text-white"><strong>Guerrier</strong> : {{ warrior }}</p>
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