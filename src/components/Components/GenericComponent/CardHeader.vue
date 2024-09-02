<template>
  <div class="display-flex card-header display-flex-row">
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