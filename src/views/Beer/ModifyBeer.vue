<template>
  <div class="about">
    <h1>ModifyBeer</h1>
    <el-form v-if="beer" ref="form" :model="form" label-width="120px"
             :disabled="beer.owner !== userUid">
      <el-input-number v-model="note" :step="0.25" :max="5" :min="0"></el-input-number>
      <el-form-item label="Activity name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="modifyBeer">Editer</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import firebase from 'firebase';
import { Beer, beerConverter } from '../../classes/Beer';

export default {
  name: 'ModifyBeer',
  components: {},
  data() {
    return {
      form: new Beer(),
      note: 0,
      beer: null,
      userUid: firebase.auth().currentUser.uid,
    };
  },
  computed: {
    ...mapGetters({
      userProfile: 'userProfile',
    }),
  },
  beforeCreate() {
    const db = firebase.firestore();
    db.collection('beers')
      .withConverter(beerConverter)
      .doc(this.$route.params.id)
      .get()
      .then((doc) => {
        this.beer = doc.data();
        this.form = this.beer;
      });
  },
  methods: {
    modifyBeer() {
      this.$store.dispatch('modifyBeer', this.form);
      this.$notify({
        title: 'Success',
        message: 'Ceci est un message de succès',
        type: 'success',
      });
    },
  },
};
</script>
