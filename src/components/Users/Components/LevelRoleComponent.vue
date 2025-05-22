<template>
  <div class="display-flex-row role-level-user-container">
    <div class="display-flex-column">
      <p class="roboto roboto">Niveau {{ nameLevel }}</p>
      <img
        :src="'/images/Levels/' + imageLevel"
        :alt="imageLevel"
        loading="lazy"
        class="width-15-vh height-15-vh"
      />
    </div>
    <div class="display-flex-column">
      <p class="roboto roboto">Rôle {{ nameRole }}</p>
      <img
        :src="'/images/Levels/' + imageRole"
        :alt="imageRole"
        loading="lazy"
        class="width-15-vh height-15-vh"
      />
    </div>
  </div>
</template>
<script>
export default {
    name:'LevelRoleComponent',
    props:['imageLevel', 'nameLevel', 'nameRole', 'imageRole']
}
</script>