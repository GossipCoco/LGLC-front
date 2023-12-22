<template>
  <div>
    <div class="signin-container">
      <main class="form-signin">
        <div class="card" style="width: 38rem">
          <div class="card-body">
            <h5 class="card-title">Se connecter</h5>
            <h6 class="card-subtitle mb-2 text-muted"></h6>

            <form name="login-form">
              <div class="mb-3">
                <label for="username">Username: </label>
                <input id="username" type="text" v-model="form.login" />
              </div>
              <div class="mb-3">
                <label for="password">Password: </label>
                <input id="password" type="password" v-model="form.password" />
              </div>
              <button class="btn btn-outline-dark" type="submit">Login</button>
              <br />
              <router-link to="/home" type="button">
                Se connecter directement
              </router-link>
            </form>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
};
</script>