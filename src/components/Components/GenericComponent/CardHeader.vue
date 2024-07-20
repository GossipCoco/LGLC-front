<template>
  <div class="card-header title-chapter-container">
    <h2>{{ Title }}</h2>
    <slot></slot>
  </div>
</template>
<script>
export default{
    name: 'CardHeader',
    props: ['Title']
}
</script>