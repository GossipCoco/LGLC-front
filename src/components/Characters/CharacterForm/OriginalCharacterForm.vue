<template>
  <div class="card-body" style="height: 80vh">
    <form class="create-character-form" @submit.stop.prevent="onSubmit">
      <Transition name="slide-fade"> </Transition>
    </form>
  </div>
</template>
<script>
export default {
  name: "OriginalCharacterForm",
  date() {
    return {
      genres: [
        { name: "Mâle", id: "Mâle" },
        { name: "Femelle", id: "Femelle" },
      ],
      grades: {},
      clans: {},
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
        KitName: null,
        ApprenticeName: null,
        WarriorName: null,
      },
    };
  },
  created() {},
  methods: {
    handleOk() {
      console.log(this.form);
    },
  },
};
</script>