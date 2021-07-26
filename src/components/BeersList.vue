<template>
  <div class="beers">
    <ul>
      <li v-for="beer in beers" :key="beer.id">
        <router-link :to="{ name: 'ModifyBeer', params: { id: beer.id }}">
          {{beer.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase';
import { beerConverter } from '../classes/Beer';

export default {
  name: 'BeersList',
  data() {
    return {
      beers: [],
    };
  },
  created() {
    const db = firebase.firestore();
    db.collection('beers').withConverter(beerConverter)
      .onSnapshot((querySnapshot) => {
        this.beers = [];
        querySnapshot.forEach((doc) => {
          this.beers.push(doc.data());
        });
      });
  },
};
</script>
