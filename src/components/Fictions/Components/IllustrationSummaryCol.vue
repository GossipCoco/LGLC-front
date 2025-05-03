<template>
    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 padding-0-0-0-5vh col-left">
        <div class="display-flex-column">
        <div
            class="display-flex-column image-fiction-container margin-21vh-0-0-0 all-illustrations-fiction-container padding-2-vh overflowY-X-hidden background-size-cover"
            v-bind:style="{
                backgroundImage: 'url(' + backgroundImageFiction + ')',
            }"
            >
        </div>
        <div class="summary-fiction-container-wrapper width-50-vh height-35-vh overflowY-scroll margin-1vh-0-0-1vh">
            <p class="text-align-justify overflowY-auto summary-height-container Noto-Sans" v-html="Summary"></p>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'IllustrationSummaryCol',
    props:['backgroundImageFiction', 'Summary']
}
</script>