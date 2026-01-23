<template>
  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
    <div class="card background-lineart height-60-vh">
      <div class="card-header">
        <h5 class="card-title">Membres</h5>
      </div>
      <div class="card-body">
        <div class="list-group">
          <div v-for="(Group, index) in group.UserGroups" :key="index" class="text-white">            
            <p>{{  Group.User.UserName }}</p>
            <div class="display-flex display-flex-row gap-1-vh">
              <img
                loading="lazy"
                :src="Group.Badge"
                :alt="alt"
                :class="'border-radius-100 display-flex-column width-10-vh height-10-vh '"
              />
              <img
                loading="lazy"
                :src="'/images/Avatars/' + Group.User.Avatar"
                :alt="alt"
                :class="'border-radius-100 display-flex-column width-10-vh height-10-vh '"
              />
            </div>
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