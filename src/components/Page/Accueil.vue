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
                <div class="top-middle-accueil hidden">
                    <TopMiddleAccueil />
                </div>
                <hr class="featurette-divider">
                <div class="bottom-middle-accueil hidden">
                    <BottomMiddleAccueil />
                </div>
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
    mounted() {
    // Initialisation du détecteur de scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in'); // Ajoute la classe quand l'élément est visible
        }
      });
    });

    // Cibler les éléments TopMiddleAccueil et BottomMiddleAccueil
    const topElement = document.querySelector('.top-middle-accueil');
    const bottomElement = document.querySelector('.bottom-middle-accueil');

    // Observer les deux éléments
    if (topElement) observer.observe(topElement);
    if (bottomElement) observer.observe(bottomElement);
  },
};
</script>