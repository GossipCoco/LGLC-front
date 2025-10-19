<template>
    <div v-for="(users, index) in group.UserGroups" :key="index"
        class="height-10-vh display-flex-row align-items-center">
        <img loading="lazy"  :src="'/images/Avatars/'+users.User.Avatar" :alt="alt"
        :class="'border-radius-100 display-flex-column width-12-vh height-12-vh '"/>
      {{ users.User.UserName }}
    </div>

</template>
<script>
export default {
  name: "ListMembers",
  props: ["group"],
};
</script>