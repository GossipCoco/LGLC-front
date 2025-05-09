<template>
<router-link :to="route + CurrentName" class="display-flex-column">
    <div
        class="rond-character-background border-radius-100 background-size-cover display-flex-row align-items-content-justify-content"
        v-bind:style="{
        backgroundImage: 'url(' + ClanImage + ')',
        }"
    >
        <div class="display-flex-column">
        <img class="height-auto width-15-vh" loading="lazy" :src="CharacterImage" :alt="CharacterImage"/>                  
        <p class="text-white poppins-text">{{ CurrentName }}</p>
        </div>
    </div>
</router-link>
</template>
<script>
export default {
    name: "CharacterLink",
    props:['route','ClanImage', 'CharacterImage', 'CurrentName']
}
</script>