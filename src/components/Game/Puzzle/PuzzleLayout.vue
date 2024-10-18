<template>
    <div class="dashboard-max-card-container border-none background-color-main-lineart flex-one card display-flex-column fiction-container">
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