<template>
    <div id="accueil">
        <header data-bs-theme="dark">
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div class="container-fluid">
                    <router-link to="/Accueil" class="navbar-brand">
                        <img src="../../../public/images/Logos/logo1.png" />
                    </router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav me-auto mb-2 mb-md-0">
                            <li class="nav-item">
                                <router-link to="/Accueil">Accueil</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/login">Se connecter</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/Register">Créer son compte</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            <div id="mentions-legales-page">
                <div class="mentions-legales-text">
                    <div class="card">
                        <div class="card-body">
                            <h2>Foire aux questions</h2>
                            <h3>FAQ</h3>
                            <h4>1. Comment créer un personnage ?</h4>
                            <P>
                                Pour créer un personnage, connectez-vous à votre compte, puis cliquez sur "Créer un
                                personnage" dans le menu principal. Suivez les instructions pour personnaliser votre
                                chat sauvage.
                            </P>

                            <h4>2. Comment puis-je partager mes fanfictions ?</h4>
                            <p>
                                Vous pouvez partager vos fanfictions en allant dans la section "Communauté" et en
                                cliquant sur "Partager une fanfiction". Assurez-vous que votre histoire respecte les
                                règles de notre communauté.
                            </p>
                            <h4>3. Comment jouer aux jeux interactifs ?</h4>
                            <p>
                                Les jeux interactifs sont accessibles via le menu "Jeux". Sélectionnez le jeu de votre
                                choix et suivez les instructions à l'écran pour jouer.
                            </p>
                            <h4>4. Est-ce que l'application est gratuite ?</h4>
                            <P>
                                Oui, l'application est gratuite. Certaines fonctionnalités supplémentaires peuvent être
                                disponibles via des achats intégrés.</p>

                            <h4>5. Comment contacter le support technique ?</h4>
                            <P>

                                Pour toute assistance, veuillez nous contacter via notre formulaire de contact
                                disponible dans la section "Contact" du site.

                            </p>

                        </div>

                    </div>
                </div>

            </div>
        </main>
    </div>

</template>
<script>
export default {
    name: 'faq'
}
</script>