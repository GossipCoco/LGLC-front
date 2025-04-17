<template>
  <div class="row display-flex align-items-content-justify-content">
    <div class="col-6">
      <div class="image_user_grade_level">
        <div clas="display-flex-column">
          <p class="text-white poppins-text">Rôle : {{ NameRole }}</p>
          <img :src="'/images/Levels/' + Image" :alt="Image" loading="lazy"/>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div class="image_user_grade_level">
        <div clas="display-flex-column">
          <p class="text-white poppins-text">Niveau {{ LevelName }}</p>
          <img :src="'/images/Levels/' + roleImage" :alt="roleImage" loading="lazy"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RoleLevel",
  props: ["NameRole", "Image", "LevelName", "roleImage"],
};
</script>