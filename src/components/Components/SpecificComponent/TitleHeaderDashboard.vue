<template>
  <div class="card-header">
    <h4 v-if="type === 'username'"><router-link :to="'/getUserBy/' + title">{{ title }}</router-link></h4>
    <h4 v-else>{{ title }}</h4>
  </div>
</template>
<script>
export default {
    name: 'TitleHeaderDashboard',
    props: ['title', 'type']
}
</script>