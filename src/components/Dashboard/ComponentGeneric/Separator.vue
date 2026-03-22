<template>
    <div class="card welcome-dashboard-container background-color-dark-green-01 border-none width-100-100 margin-0-0-0-2vh">
        <div class="card-body display-flex-row align-items-content-justify-content title-dashboard-container-header">
            <h1 class=" font-variant-small-caps cinzel text-white">
                {{ Title }}
            </h1>
            <img src="/images/Logos/clan-active.png" class="height-10-vh"/>
        </div>
    </div>
</template>
<script>
export default {
    name:'Separator',
    props:['Title']
}
</script>