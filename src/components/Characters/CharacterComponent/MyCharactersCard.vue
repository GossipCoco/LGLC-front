<template>
    <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-10">
        <div
            id="all-characters-container-card"
            class="row all-characters-container-card width-100-100"
        >
            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 display-flex-row align-items-content-justify-content character-container overflowY-X-hidden">
                <div class="card-character-container width-30-vh height-35-vh original-character-card-container"
                    v-for="(character, index) in allMyCharacters"
                    :key="index"
                >
                    <div class="card-group display-flex">
                        <div class="card individual-character-card background-position-50-percent
                        height-35-vh background-lineart margin-1vh">
                            <BackgroundImage v-bind:Image="character.Image" />
                            <CharacterCardBody
                            v-bind:id="character.Id"
                            v-bind:name="character.CurrentName"
                            v-bind:route="'/OriginaleCharacterDetails/'"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BackgroundImage from '../GenericComponent/BackgroundImage.vue'
import CharacterCardBody from '../GenericComponent/CharacterCardBody.vue'
export default {
    name: 'MyCharactersCard',
    props:['allMyCharacters'],
    components:{
        BackgroundImage, CharacterCardBody
    }
}
</script>