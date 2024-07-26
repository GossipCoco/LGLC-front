<template>
    <div class="container">
        <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item">
                    <router-link to='/MentionsLegales' class="nav-link px-2 text-body-secondary">
                        Mentions Legales
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to='/faq' class="nav-link px-2 text-body-secondary">
                        Foire aux questions
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to='/About' class="nav-link px-2 text-body-secondary">
                        Qui sommes-nous?
                    </router-link>                    
                </li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Contact</a></li>
            </ul>
            <p class="text-center text-body-secondary">&copy; 2024 GossipCoco</p>
        </footer>
    </div>
</template>
<script>
export default{
    name: 'FooterAccueil'
}
</script>