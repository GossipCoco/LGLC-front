<template>
    <div>

    </div>
</template>
<script>
export default {
    name: 'CharacterCard',
    props: ["characters"],
    data(){
        return{
            allCharacters: this.characters
        }
    }
}
</script>