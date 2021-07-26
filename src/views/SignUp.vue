<template>
  <div class="form">
    <form @submit.prevent>
      <h1>Welcome Back</h1>
      <div>
        <label for="nickname">Pseudo</label>
        <input v-model.trim="signInForm.nickname"
               type="text" placeholder="Pseudo" id="nickname"/>
      </div><div>
        <label for="email">Email</label>
        <input v-model.trim="signInForm.email"
               type="text" placeholder="you@email.com" id="email"/>
      </div>
      <div>
        <label for="password">Password</label>
        <input v-model.trim="signInForm.password"
               type="password" placeholder="******" id="password"/>
      </div>
      <div v-if="errorMessage !== ''">
        {{errorMessage}}
      </div>
      <button @click="signUp()" class="button">Sign In</button>
      <div class="extras">
        <router-link to="/login">Log In</router-link>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'SignUp',
  data() {
    return {
      errorMessage: '',
      signInForm: {
        nickname: '',
        email: '',
        password: '',
      },
    };
  },
  beforeCreate() {
  },
  methods: {
    signUp() {
      this.errorMessage = '';
      if (this.signInForm.nickname !== '') {
        this.$store.dispatch('signup', this.signInForm)
          .then(() => {
            this.$router.push('/');
          })
          .catch((error) => {
            this.errorMessage = error.message;
          });
      } else {
        this.errorMessage = 'Merci de spécifier un pseudo';
      }
    },
  },
};
</script>
