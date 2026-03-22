<template>
  <div class="logo-container">
    <router-link to="/">
      <img :src="img" class="height-20-vh padding-1-vh"/>
    </router-link>
    </div>
</template>
<script>
export default{
    name: 'Logo',
    props:['img']
}
</script>