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
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            <div class="cover-container d-flex w-100 h-100 mx-auto flex-column">
                <main class="px-3 row accueil-header">
                    <div class="title-accueil">
                        <h1>La Guerre des Clans</h1>
                        <h2>Bienvenue dans l'univers captivant de "La Guerre des Clans" !</h2>
                    </div>
                    <div class="image-accueil">
                        <div class="image-one">
                            <img src="/images/2_17ff9c3d-444c-44cd-b9fd-559dfd9e87d5.png" />
                        </div>
                    </div>
                </main>
            </div>
            <div class="container marketing">
                <div class="row">
                    <div id="rever-container" class="col-lg-4 col-image-rond">
                        <div class="image-rond">
                            <img src="/images/Accueil/OIG496.png" />
                        </div>
                        <h2 class="fw-normal">Rêvez</h2>
                        <p>Imaginez vos propres aventures de l'univers LGDC</p>
                    </div>
                    <div id="jouer-container" class="col-lg-4 col-image-rond">
                        <div class="image-rond">
                            <img src="/images/Accueil/bluestar.png" />
                        </div>
                        <h2 class="fw-normal">Jouez</h2>
                        <p>Jeux sur l'univers LGDC et même des quizz</p>
                    </div>
                    <div id="creer-container" class="col-lg-4 col-image-rond">
                        <div class="image-rond">
                            <img src="/images/Accueil/OIG210.png" />
                        </div>
                        <h2 class="fw-normal">Créez</h2>
                        <p>Imaginez vos propres chats guerriers</p>
                    </div>
                </div>
                <hr class="featurette-divider">
                <div class="row featurette">
                    <div class="col-md-1"></div>
                    <div class="col-md-5">
                        <h2 class="featurette-heading fw-normal lh-1">
                            <span class="text-body-secondary">Un univers fascinant</span>
                        </h2>
                        <p class="lead">
                            Plongez-vous dans l'aventure passionnante des quatre clans de chats sauvages qui se
                            partagent la forêt des Quatre Chênes. Que vous soyez un fan de longue date de la série
                            d'Erin Hunter ou un nouveau venu curieux, notre application vous offre une expérience
                            immersive unique. Créez vos propres personnages inédits, imaginez des histoires palpitantes
                            et partagez vos fanfictions avec une communauté passionnée. Chaque clan a ses propres
                            particularités : le Clan du Tonnerre chasse dans les sous-bois, le Clan du Vent court après
                            les lapins dans la lande, le Clan de la Rivière pêche dans les rivières et le Clan de
                            l'Ombre rôde dans les marécages sombres.
                        </p>
                    </div>
                    <div class="col-md-5">
                        <img src="/images/Accueil/12.png" />
                    </div>
                    <div class="col-md-1"></div>
                </div>
                <hr class="featurette-divider">
                <div class="row featurette">

                    <div class="col-md-1  order-md-1"></div>
                    <div class="col-md-5 order-md-3">
                        <h2 class="featurette-heading fw-normal lh-1">
                            <span class="text-body-secondary">Continuez l'aventure</span>
                        </h2>
                        <p class="lead">
                            Notre application ne se contente pas de vous offrir un espace de création. Pour les amateurs
                            de défis, découvrez nos jeux interactifs tels que le puzzle des clans ou l'attrape-souris,
                            conçus pour tester votre habileté et votre connaissance de l'univers de "La Guerre des
                            Clans". Rencontrez d'autres passionnés, échangez des idées, et explorez les nombreuses
                            possibilités qu'offre notre plateforme. Avec des fonctionnalités pensées pour les fans,
                            chaque utilisateur peut laisser libre cours à son imagination et contribuer à
                            l'enrichissement de ce monde fascinant.
                        </p>
                    </div>
                    <div class="col-md-5 order-md-2 image-row-second">
                        <img src="/images/Accueil/f3800b6f6efd.png" />
                    </div>

                    <div class="col-md-1 5 order-md-4"></div>
                </div>
                <hr class="featurette-divider">
                <div class="row featurette">
                    <div class="col-md-1"></div>
                    <div class="col-md-5">
                        <h2 class="featurette-heading fw-normal lh-1">
                            <span class="text-body-secondary">Rejoignez-nous dès aujourd'hui</span>
                        </h2>
                        <p class="lead">
                            Devenez une partie intégrante de l'univers de "La Guerre des Clans". Créez, jouez, et vivez
                            des aventures extraordinaires au cœur de la forêt des Quatre Chênes. Que les étoiles guident
                            vos pas !
                        </p>
                    </div>
                    <div class="col-md-5">
                        <img src="/images/Accueil/d444f75af71f.png" />
                    </div>

                    <div class="col-md-1"></div>
                </div>
            </div>
            <div class="container">
                <footer class="py-3 my-4">
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
                    </ul>
                    <p class="text-center text-body-secondary">&copy; 2024 Company, Inc</p>
                </footer>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'Accueil',
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    // beforeUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // },
    methods: {
        handleScroll() {
            const headerHeight = document.querySelector('header').offsetHeight;
            const scrollPosition = window.scrollY;

            if (scrollPosition > headerHeight) {
                document.getElementById('rever-container').classList.add('slide-in-left');
                document.getElementById('jouer-container').classList.add('slide-in-up');
                document.getElementById('creer-container').classList.add('slide-in-right');
            }
        }
    }
}
</script>
