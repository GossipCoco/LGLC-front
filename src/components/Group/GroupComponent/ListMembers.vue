<template>
  <div>
    <ul>
      <li v-for="(users, index) in group.UserGroups" :key="index">
        <p>
            <img loading="lazy"  :src="'/images/Avatars/'+users.User.Avatar" :alt="alt" 
                :class="'avatar-dahboard-container border-radius-100 display-flex-column width-12-vh height-12-vh '" 
      />{{ users.User.UserName }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "ListMembers",
  props: ["group"],
};
</script>