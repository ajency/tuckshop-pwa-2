import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
	  apiKey: "AIzaSyB7dEdxlQDHUTlEJmWm2jTnjr2XxbW6e94",
	  authDomain: "tuckshop-3.firebaseapp.com",
	  databaseURL: "https://tuckshop-3.firebaseio.com",
	  projectId: "tuckshop-3",
	  storageBucket: "tuckshop-3.appspot.com",
	  messagingSenderId: "560785862071",
	  appId: "1:560785862071:web:a1477aab0b2c6653"
});

firebase.firestore().enablePersistence()
  .catch(function(err) {
      if (err.code == 'failed-precondition') {
          console.log("Multiple tabs open, persistence can only be enabled in one tab at a a time.");
      } else if (err.code == 'unimplemented') {
          console.log("The current browser does not support all of the features required to enable persistence");
      }
  });

const db = firebaseApp.firestore();
export default db;