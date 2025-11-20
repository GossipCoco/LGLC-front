<template>
  <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
    <div class="card background-lineart height-60-vh">
      <div class="card-header">
        <h5 class="card-title">Membres</h5>
      </div>
      <div class="card-body">
        <div class="list-group">
          <div v-for="(Group, index) in group.UserGroups" :key="index" class="text-white">
            <img
              loading="lazy"
              :src="Group.Badge"
              :alt="alt"
              :class="'border-radius-100 display-flex-column width-5-vh height-5-vh '"
            />
            <p>{{  Group.User.UserName }}
            <img
              loading="lazy"
              :src="'/images/Avatars/' + Group.User.Avatar"
              :alt="alt"
              :class="'border-radius-100 display-flex-column width-5-vh height-5-vh '"
            />
            
          </p>
          </div>
        </div>
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