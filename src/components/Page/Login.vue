<template>
  <div class="row">
    <div class="col-4"></div>
    <div class="col-4">
      <div class="card login-card">
        <div class="card-header"><h2 class="text-dark-green">Se connecter à son compte</h2></div>
        <div class="card-body" height="25vh">
          <div class="login-container">            
            <form @submit.prevent="login" class="row g-3 needs-validation">
              <div class="row">
                <div class="col">
                  <div class="form-group">
                    <div class="mb-3">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        v-model="email"
                        class="form-control"
                        id="email"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-group">
                    <div class="mb-3">
                      <label for="password">Mot de passe</label>
                      <input
                        type="password"
                        v-model="password"
                        class="form-control"
                        id="password"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <button type="submit" class="btn btn-primary">
                    Se connecter
                  </button>
                </div>
                <div class="col">
                  <router-link
                    type="button"
                    class="btn btn-primary"
                    to="/Register"
                    >Créer un compte</router-link
                  >
                </div>
              </div>
            </form>
            <div v-if="error" class="error-message">{{ error }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4"></div>
  </div>
</template>
<script>
import JwtAPI from "../../api/JwtApi";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: "",
      falsePassword: null,
    };
  },
  created() {
    this.$store.state.auth.user === null;
    JwtAPI.IsLogged();
  },
  methods: {
    login(e) {
      e.preventDefault();
      let email = this.email;
      let pwd = this.password;
      this.$store
        .dispatch("auth/login", {
          Email: email,
          Password: pwd,
        })
        .then(
          () => {
            this.$router.push({ path: "/Dashboard" });
          },
          (error) => {
            if (!error) {
              this.falsePassword = "Login ou Mot de passe incorrect";
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          }
        )
        .catch((errors) => {
          console.log("Cannot log in", errors);
          this.falsePassword = "Login ou Mot de passe incorrect";
        });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.email = "";
      this.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>