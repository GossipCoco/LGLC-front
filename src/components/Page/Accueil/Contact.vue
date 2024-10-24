<template>
  <div id="accueil">
    <HeaderAccueil />
    <main class="link-faq-about-contact-container">
      <div id="about-page">
        <h2>Nous contacter</h2>
        <div class="row">
          <div class="col-12">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label text-white"
                >Votre Email</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label text-white"
                >Votre message</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <button type="button" class="btn btn-primary btn-lg">Envoyer votre message</button>
          </div>
        </div>
      </div>
    </main>
    <FooterAccueil />
  </div>
</template>
  <script>
import HeaderAccueil from "./HeaderAccueil.vue";
import FooterAccueil from "./FooterAccueil.vue";
export default {
  name: "Contact",
  components: { HeaderAccueil, FooterAccueil },
};
</script>