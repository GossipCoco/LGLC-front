<template>
    <div id="parallax">
        <div class="video-container"></div>
        <div class="accueil-title-image-container">
            <div class="title-accueil">
                <h1>La Guerre des Clans</h1>
                <h2>Bienvenue dans l'univers captivant de "La Guerre des Clans" !</h2>
            </div>
            <div class="image-accueil parallax">
                <div class="image-one">
                    <img src="/images/perso-detoure/Warriors(213).png" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ParallaxAccueil',
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const headerHeight = document.querySelector('header').offsetHeight;
            const scrollPosition = window.scrollY;
            const parallax = document.querySelector('.parallax .image-one');
            parallax.style.transform = `translateY(${scrollPosition * 25}px)`;
            if (scrollPosition > headerHeight) {
                document.getElementById('rever-container').classList.add('slide-in-left');
                document.getElementById('jouer-container').classList.add('slide-in-up');
                document.getElementById('creer-container').classList.add('slide-in-right');
            }
        }
    }
}

</script>