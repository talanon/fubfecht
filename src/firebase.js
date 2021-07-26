import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAhW-5Co-lSu4ItNZ5v8Up_895jV8zhCRM',
  authDomain: 'fub-fecht.firebaseapp.com',
  projectId: 'fub-fecht',
  storageBucket: 'fub-fecht.appspot.com',
  messagingSenderId: '617475820788',
  appId: '1:617475820788:web:136729ea8e46f2f60da2a1',
  measurementId: 'G-8M3BFRVKMR',
};

firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection('users');
const beersCollection = db.collection('beers');

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  beersCollection,
};
