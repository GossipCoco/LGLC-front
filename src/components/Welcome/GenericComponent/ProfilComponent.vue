<template>
  <div class="card background-color-dark-green-01 height-70-vh">    
  <div class="card-header">
    <h5 class="card-title">{{ UserName }}</h5>
  </div>
    <div class="card-body">
      <img  loading="lazy"  :src="'/images/Avatars/' + Avatar" :alt="Avatar" 
      class="'avatar-dahboard-container border-radius-100 display-flex-column width-12-vh height-12-vh" 
      />
      <p class="white-text font-size-1em">
        Some quick example text to build on the card title and make up the bulk
        of the card’s content.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProfilComponent",
  props: [
    "Avatar",
    "UserName",
]
};
</script>