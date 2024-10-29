<template>
    <div class="rond-image-illustration">
        <img :src="src" :alt="alt" :class="'display-flex-column;'+classe"/>
    </div>
</template>
<script>
export default {
    name: 'ImageRondDashboard',
    props:['src', 'alt', 'classe']
}
</script>