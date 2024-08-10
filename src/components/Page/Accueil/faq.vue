<template>
  <div id="accueil">
    <HeaderAccueil />
    <main class="link-faq-about-contact-container">
      <div id="mentions-legales-page">
        <div class="mentions-legales-text">
          <h2>Foire aux questions</h2>
          <h3>FAQ</h3>

          <div v-for="(faq, index) in AllFaq" :key="index">
            <div v-html="faq.Title"></div>
            <p v-html="faq.Content"></p>
          </div>
          
        </div>
      </div>      
    </main>
    <FooterAccueil />
  </div>
</template>
<script>
import HomeService from "../../../services/HomeService";
import FooterAccueil from "./FooterAccueil.vue";
import HeaderAccueil from "./HeaderAccueil.vue";
export default {
  name: "faq",
  components: { HeaderAccueil, FooterAccueil },
  data(){
    return{
        AllFaq: {}
    }
  },
  created(){
    this.getfaq()
  },
  methods:{
    getfaq(){
        HomeService.getfaq()
        .then((response) => {
            this.AllFaq = response.data.ob
            console.log(this.AllFaq)
        })
        .catch(err => {
            console.log(err)
        })
    }
  }
};
</script>