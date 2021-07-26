<template>
  <div class="about">
    <h1>AddBeer</h1>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addBeer">Créer</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import firebase from 'firebase';

export default {
  name: 'AddBeer',
  components: {},
  data() {
    return {
      form: {
        name: '',
        owner: '',
      },
    };
  },
  computed: {
    ...mapGetters({
      userProfile: 'userProfile',
    }),
  },
  methods: {
    addBeer() {
      this.form.owner = firebase.auth().currentUser.uid;
      this.$store.dispatch('addBeer', this.form).then(() => {
        this.$router.push('/');
      });
    },
  },
};
</script>
