<template>
  <div class="form">
    <form @submit.prevent>
      <h1>Welcome Back</h1>
      <div>
        <label for="email">Email</label>
        <input v-model.trim="loginForm.email"
               type="text" placeholder="you@email.com" id="email"/>
      </div>
      <div>
        <label for="password">Password</label>
        <input v-model.trim="loginForm.password"
               type="password" placeholder="******" id="password"/>
      </div>
      <div v-if="errorMessage !== ''">
        {{errorMessage}}
      </div>
      <button @click="login()" class="button">Log In</button>
      <div class="extras">
        <a>Forgot Password</a>
        <router-link to="/sign-in">Create an Account</router-link>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      errorMessage: '',
      loginForm: {
        email: '',
        password: '',
      },
    };
  },
  beforeCreate() {
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.loginForm.email,
        password: this.loginForm.password,
      }).then(() => {
        this.$router.push('/');
      })
        .catch((error) => {
          this.errorMessage = error.message;
        });
    },
  },
};
</script>
