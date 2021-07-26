<template>
  <div class="home">
    <p v-if="userProfile">
      Bonjour {{userProfile.nickname}}
    </p>
    <beers-list></beers-list>
    <button v-if="userProfile" @click="logout()">Log OUT</button>
    <div v-if="userProfile">
      <router-link to="/add-beer">Add beer</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import { auth } from '../firebase';
import BeersList from '../components/BeersList.vue';

export default {
  name: 'Home',
  components: { BeersList },
  computed: {
    ...mapGetters({
      userProfile: 'userProfile',
    }),
  },
  beforeCreate() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('fetchUserProfile', user);
      }
    });
  },
  methods: {
    logout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/');
      });
    },
  },
};
</script>
