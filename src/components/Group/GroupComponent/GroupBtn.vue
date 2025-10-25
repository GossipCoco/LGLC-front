<template>
  <div class="row height-10-vh">
    <div class="col-12 display-flex align-items-content-justify-content">
      <router-link
        to="/GroupLayout"
        class="btn btn-primary margin-1vh height-5-vh"
        >Retour à la liste des groupes</router-link
      >
      <router-link
        :to="'/CreateANewPost/' + group.Id"
        class="btn btn-primary margin-1vh height-5-vh"
        >Créer un nouveau post</router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "GroupBtn",
  props:['group']
};
</script>