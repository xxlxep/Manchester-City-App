import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBQZIc1LNc2cr3lRmM-crLhG9zQhx_0vHQ',
  authDomain: 'manchester-city-app-6d8f0.firebaseapp.com',
  databaseURL: 'https://manchester-city-app-6d8f0.firebaseio.com',
  projectId: 'manchester-city-app-6d8f0',
  storageBucket: 'manchester-city-app-6d8f0.appspot.com',
  messagingSenderId: '477140412402',
};
firebase.initializeApp(config);

const firebaseDB = firebase.database();

const firebaseMatches = firebaseDB.ref('matches');

const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
  firebase,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebaseDB,
  firebasePlayers,
};
