<template>
    <div class="card-body new-current-arc-container padding-2-vh text-white height-30-vh">
        <h2 class="align-items-content-justify-content">
        <router-link            
        class="poppins-text color-clear-green-01"
        :to="'/OneArc/'+ Id">
                {{ Title }}
            </router-link>
        </h2>
        <div class="summary-book-dashboard display-flex-row align-items-content-justify-content">
            <img :src="Image" width="10%" class="border-radius-12px"/>
            <div v-html="Summary" class="text-white text-align-justify overflowY-scroll summmary-book-height-dashboard poppins-text text-white padding-1-vh"></div>
        </div>
    </div>    
</template>
<script>
export default {
    name: 'ArcBookSummary',
    props: ['route', 'Id', 'Title', 'Image', 'Summary']
}
</script>