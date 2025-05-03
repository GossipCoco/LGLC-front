<template>
    <div class="margin-2vh puzzle-container border-none background-color-main-lineart flex-one card display-flex-column">
        <PuzzleGame />
    </div>

</template>

<script>
import PuzzleGame from './PuzzleGame.vue'

export default {
    components: {
        PuzzleGame
    }
}
</script>