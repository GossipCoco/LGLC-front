<template>
  <div class="logo-container">
    <router-link to="/dashboard">
      <img :src="img" class="width-15-vh height-auto padding-1-vh"/>
    </router-link>
    </div>
</template>
<script>
export default{
    name: 'Logo',
    props:['img']
}
</script>