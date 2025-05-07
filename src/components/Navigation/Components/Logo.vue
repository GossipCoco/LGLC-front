<template>
  <div class="logo-container">
    <router-link to="/dashboard">
      <img :src="img" class="height-15-vh"/>
    </router-link>
    </div>
</template>
<script>
export default{
    name: 'Logo',
    props:['img']
}
</script>