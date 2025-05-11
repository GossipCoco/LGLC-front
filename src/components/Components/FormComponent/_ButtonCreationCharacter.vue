<template>
  <div :class="colClass">
    <router-link to="/CharacterCreate" type="button" class="btn btn-primary display-flex-row align-items-content-justify-content" style="width: 10vh;" title="Créer un nouveau personnage">
        <img src="/images/icons/cat-solid-whitd.svg" style="width: 2rem;"/>
        <img src="/images/icons/plus-solid.svg" style="width: 1rem;"/>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "ButtonCreationCharacter",
  props:['class'],
  data(){
    return {
        colClass: this.class
    }
  }
};
</script>