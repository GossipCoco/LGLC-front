<template>
    <header data-bs-theme="dark">
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div class="container-fluid">
                <router-link to="/Accueil" class="navbar-brand">
                    <img src="../../../../public/images/Logos/logo1.png" />
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
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
</template>
<script>
export default {
    name: 'HeaderAccueil'
}
</script>