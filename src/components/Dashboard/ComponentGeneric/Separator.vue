<template>
    <div class="card welcome-dashboard-container background-lineart border-none width-190-vh">
        <div class="card-body display-flex-row align-items-content-justify-content title-dashboard-container-header">
            <h1 class=" font-variant-small-caps cinzel text-white">
                {{ Title }}
            </h1>
        </div>
    </div>
</template>
<script>
export default {
    name:'Separator',
    props:['Title']
}
</script>