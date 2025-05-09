<template>
    <router-link v-if="typeCharacter === 'ExistedCharacter'" :to="route + CurrentName" class="display-flex-column">
        <div
            class="rond-character-background border-radius-100 background-size-cover
            display-flex-row align-items-content-justify-content"
            v-bind:style="{ backgroundImage: 'url(' + ClanImage + ')' }"
        >
            <div class="display-flex-column">
                <img class="height-auto width-15-vh" loading="lazy" :src="CharacterImage" :alt="CharacterImage"/>                  
                <p class="text-white poppins-text">{{ CurrentName }}</p>
            </div>
        </div>
    </router-link>
    <router-link v-if="typeCharacter === 'OC'" class="text-white roboto" :to="route + CurrentName">
        <div class="character-illustration-container border-radius-100 height-10-vh width-10-vh background-size-cover"
        v-bind:style="{ backgroundImage: 'url(' + CharacterImage + ')', }"></div>
        {{ CurrentName }}
    </router-link>
</template>
<script>
export default {
    name: "CharacterLink",
    props:['typeCharacter','route','ClanImage', 'CharacterImage', 'CurrentName']
}
</script>