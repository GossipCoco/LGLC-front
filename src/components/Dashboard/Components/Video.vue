<template>
    <div class="row top-left-dashboard">
        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 height-45-vh video-card-global">
            <div class="card background-lineart border-none video-card height-45-vh margin-0-0-0-1vh">
                <TitleHeaderDashboard v-bind:title="'Vidéo promo'"  v-bind:type="'video'"/>
                <div class="card-body display-flex-column align-items-content-justify-content">
                    <iframe width="450" height="253" src="https://www.youtube.com/embed/4dUeUWFWmro?si=Xn99pTQvOPcI6Ept" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>        
        </div>
    </div>
</template>
<script>
import TitleHeaderDashboard from "../../Components/SpecificComponent/TitleHeaderDashboard.vue";
export default {
    name:'Video',
    components: { TitleHeaderDashboard}
}
</script>