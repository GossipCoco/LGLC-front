<template>
  <ul class="list-group">
    <li class="list-group-item height-10-vh display-flex-row align-items-center" v-for="(users, index) in group.UserGroups" :key="index">
        <img loading="lazy"  :src="'/images/Avatars/'+users.User.Avatar" :alt="alt"
        :class="'border-radius-100 display-flex-column width-10-vh height-10-vh '"/>
      {{ users.User.UserName }}
    </li>
  </ul>

</template>
<script>
export default {
  name: "ListMembers",
  props: ["group"],
};
</script>