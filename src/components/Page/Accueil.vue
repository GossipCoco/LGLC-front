<template>
    <div id="accueil">
        <HeaderAccueil />
        <main>
            <div class="cover-container">
                <main class="row accueil-header">
                    <ParallaxAccueil />
                </main>
            </div>
            <div class="container marketing">
                <TopMiddleAccueil />
                <hr class="featurette-divider">
                <BottomMiddleAccueil />
            </div>
            <FooterAccueil />
        </main>
    </div>
</template>
<script>
import HeaderAccueil from './Accueil/HeaderAccueil.vue'
import ParallaxAccueil from './Accueil/ParallaxAccueil'
import TopMiddleAccueil from './Accueil/TopMiddleAccueil'
import BottomMiddleAccueil from './Accueil/BottomMiddleAccueil'
import FooterAccueil from './Accueil/FooterAccueil'
export default {
    name: 'Accueil',
    components:{HeaderAccueil, ParallaxAccueil, TopMiddleAccueil, BottomMiddleAccueil, FooterAccueil},
    
}
</script>