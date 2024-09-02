<template>
    <img :src="src" :alt="alt" :class="'display-flex-column;'+classe"/>
</template>
<script>
export default {
    name: 'ImageRondDashboard',
    props:['src', 'alt', 'classe']
}
</script>