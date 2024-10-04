<template>
  <div
    class="display-flex-column form-character-container-global flex-one opensans-text"
  >
    <div
      class="card display-flex-column card-form-create-character align-items-content-justify-content flex-one mb-12"
    ></div>
  </div>
</template>
<script>
export default {
  name: "CreateAnOriginalCharacter",
  data() {
    return {
      form: {   
        UserId: this.$store.state.auth.user.usrID,
        UserName: null,
        imageChar: null,
        Description: null,
        Biography: null,
        ClanId: null,
        Status: null,
        Genre: null,
        GradeId: null,
        Personnality: null,
      },
    };
  },
};
</script>