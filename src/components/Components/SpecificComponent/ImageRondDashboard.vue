<template>
    <img :src="src" :alt="alt" :class="classe"/>
</template>
<script>
export default {
    name: 'ImageRondDashboard',
    props:['src', 'alt', 'classe']
}
</script>