<template>
    <div id="accueil">
        <HeaderAccueil />
        <main class="link-faq-about-contact-container">
            <div id="mentions-legales-page">
                <div class="mentions-legales-text">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="color-clear-green-01">Mentions Légales</h2>
                            <p class="white-text">Éditeur du site :</p>
                            <p class="white-text">Nom de l'entreprise</p>
                            <p class="white-text">Adresse de l'entreprise</p>
                            <p class="white-text">Numéro de téléphone</p>
                            <p class="white-text">Adresse e-mail de contact</p>
                            <p class="white-text">Numéro SIRET</p>
                            <p class="white-text">Directeur de la publication :[Nom]</p>
                            <h3 class="white-text">Hébergement :</h3>
                            <p class="white-text">Nom de l'hébergeur</p>
                            <p class="white-text">Adresse de l'hébergeur</p>
                            <p class="white-text">Numéro de téléphone de l'hébergeur</p>
                            <h3 class="white-text">Propriété intellectuelle :</h3>
                            <p class="white-text">L'ensemble des éléments édités au sein de l'application "La Guerre des Clans", incluant
                                notamment
                                les textes, images, logos, et vidéos, constitue des œuvres au sens des dispositions de
                                l'article
                                L112-1 du Code de la Propriété Intellectuelle et sont la propriété exclusive de [Nom de
                                l'entreprise], sauf mentions particulières. En conséquence, toute représentation ou
                                reproduction, intégrale ou partielle, qui pourrait être faite sans le consentement de
                                leurs
                                auteurs ou de leurs ayants droit, est illicite.</p>

                            <h3 class="white-text">Responsabilité :</h3>
                            <p class="white-text">[L'entreprise] ne saurait être tenue responsable des éventuels dommages directs ou
                                indirects
                                pouvant découler de l'accès ou de l'utilisation du site et/ou de l'application "La
                                Guerre des
                                Clans", y compris l’inaccessibilité, les pertes de données, et/ou la présence de virus
                                sur le
                                site.</p>

                        </div>
                    </div>
                </div>
            </div>
        </main>
        <FooterAccueil />
    </div>
</template>
<script>
import HeaderAccueil from './HeaderAccueil.vue';
import FooterAccueil from './FooterAccueil.vue';
export default {
    name: 'MentionsLegales',
    components:{
        HeaderAccueil,
        FooterAccueil
    }
}
</script>