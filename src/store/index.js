import { createStore } from 'vuex';
import * as fb from '../firebase';
import { beerConverter } from '../classes/Beer';

export default createStore({
  state: {
    userProfile: null,
    beers: [],
  },
  getters: {
    userProfile: (state) => state.userProfile,
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val;
    },
    addBeer(state, val) {
      state.beers.push(val);
    },
    modifyBeer(state, val) {
      state.beers.push(val);
    },
    removeBeer(state, val) {
      state.beers.push(val);
    },
  },
  actions: {
    async login({ dispatch }, form) {
      const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password);
      dispatch('fetchUserProfile', user);
    },
    async signup({ dispatch }, form) {
      const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password);
      await fb.usersCollection.doc(user.uid)
        .set({
          nickname: form.nickname,
        });
      return dispatch('fetchUserProfile', user);
    },
    async fetchUserProfile({ commit }, user) {
      const userProfile = await fb.usersCollection.doc(user.uid)
        .get();
      commit('setUserProfile', userProfile.data());
      return userProfile;
    },
    async logout({ commit }) {
      await fb.auth.signOut();
      return commit('setUserProfile', null);
    },
    async addBeer({ commit }, form) {
      await fb.beersCollection.doc()
        .withConverter(beerConverter)
        .set(form);
      return commit('addBeer', null);
    },
    async modifyBeer({ commit }, form) {
      if (form.id) {
        await fb.beersCollection.doc(form.id)
          .withConverter(beerConverter)
          .set(form, { merge: true });
      }
      return commit('modifyBeer', null);
    },
    async removeBeer({ commit }, beer) {
      await fb.beersCollection.doc(beer.uid)
        .delete();
      return commit('removeBeer', null);
    },
  },
  modules: {},
});
