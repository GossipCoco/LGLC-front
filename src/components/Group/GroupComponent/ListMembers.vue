<template>
  <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
    <div class="card background-lineart height-60-vh">
      <div class="card-header">
        <h5 class="card-title">Membres</h5>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li
            class="list-group-item height-10-vh display-flex-row align-items-center"
            v-for="(users, index) in group.UserGroups"
            :key="index"
          >
            <img
              loading="lazy"
              :src="'/images/Avatars/' + users.User.Avatar"
              :alt="alt"
              :class="'border-radius-100 display-flex-column width-5-vh height-5-vh '"
            />
            <p class="text-white">{{ users.User.UserName }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListMembers",
  props: ["group"],
};
</script>