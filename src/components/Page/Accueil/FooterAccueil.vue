<template>
  <footer class="container footer">
    <div class="row">
      <div class="col-2 display-flex-row align-items-content-justify-content vertical-align-middle">
            <img src="../../../../public/images/Logos/Logo_1Footer.png"/>
        </div>
      <div class="col-10">
        <div class="py-3 my-4">
          <ul class="nav justify-content-center pb-3 mb-3">
            <li class="nav-item">
              <router-link
                to="/MentionsLegales"
                class="nav-link px-2 text-body-secondary"
              >
                Mentions Legales
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/faq" class="nav-link px-2 text-body-secondary">
                Foire aux questions
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/About"
                class="nav-link px-2 text-body-secondary"
              >
                Qui sommes-nous?
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/Contact"
                class="nav-link px-2 text-body-secondary"
              >
                Contact
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <p class="text-center text-body-secondary">&copy; {{ currentYear }} GossipCoco</p>
    </div>
    
  </footer>
</template>
<script>
export default {
  name: "FooterAccueil",
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
};
</script>