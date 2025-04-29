<template>
  <div id="accueil">
    <HeaderAccueil />
    <main class="link-faq-about-contact-container">
      <div id="about-page">
        <h2 class="color-clear-green-01">Qui sommes-nous?</h2>
        <p>Nous sommes une équipe de passionnés de la série "La Guerre des Clans" d'Erin Hunter. Notre amour pour cette saga littéraire, qui raconte les aventures captivantes de clans de chats sauvages, nous a inspirés à créer un espace dédié à cette œuvre fascinante. Nous passons des heures à discuter des personnages, des intrigues et des thèmes abordés dans ces livres, partageant ainsi notre passion commune avec une communauté grandissante de fans.</p>
        <p>En plus de notre passion pour "La Guerre des Clans", nous vouons un amour profond pour les chats. Ces créatures élégantes et mystérieuses occupent une place spéciale dans nos cœurs et dans nos vies. Nos propres félins sont souvent les sujets de nos conversations et de nos créations. Nous croyons que les chats, avec leur indépendance et leur grâce, incarnent parfaitement l'esprit des héros de la série d'Erin Hunter.</p>
        <p>Notre intérêt pour le développement informatique et les nouvelles technologies est également une partie intégrante de notre identité. Avec plus de sept ans d'expérience dans le développement, nous avons acquis des compétences solides et une expertise approfondie dans divers domaines technologiques. Cette expertise nous permet de créer des solutions innovantes et de haute qualité pour notre communauté. Nous nous efforçons d'utiliser la technologie pour enrichir l'expérience de nos utilisateurs et rendre notre plateforme aussi intuitive et engageante que possible.</p>
        <p>Ensemble, nous formons une équipe dédiée à la création d'un espace accueillant et interactif pour tous les fans de "La Guerre des Clans". Nous travaillons sans relâche pour offrir des contenus diversifiés, des discussions animées et des outils utiles pour explorer et apprécier davantage cette merveilleuse série. Notre objectif est de partager notre passion et de construire une communauté forte et unie autour de notre amour commun pour "La Guerre des Clans", les chats et la technologie.</p>
    </div>
    </main>
    <FooterAccueil />
</div>
</template>
<script>
import HeaderAccueil from './HeaderAccueil.vue';
import FooterAccueil from './FooterAccueil.vue';
export default {
    name: 'About',
    components:{HeaderAccueil, FooterAccueil}
}
</script>