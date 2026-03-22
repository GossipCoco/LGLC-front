<template>
  <div class="logo-container">
    <router-link to="/">
      <img :src="img" class="height-20-vh padding-0-0-3vh-0h"/>
    </router-link>
    </div>
</template>
<script>
export default{
    name: 'Logo',
    props:['img']
}
</script>