<template>
  <div></div>
</template>
<script>
export default {
  name: "WelcomeLayout",
  data() {
    return {
      showspinner: false,
      usrId: this.$store.state.auth.user.usrID,
    };
  },
};
</script>