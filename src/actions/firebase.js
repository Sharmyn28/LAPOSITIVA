import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCtZM8uE4ex4PiYEmxSD90oW18HFQNE2bM",
    authDomain: "positiva-ab6f9.firebaseapp.com",
    databaseURL: "https://positiva-ab6f9.firebaseio.com",
    projectId: "positiva-ab6f9",
    storageBucket: "positiva-ab6f9.appspot.com",
    messagingSenderId: "496770013375"
  };
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database()
export const auth = firebase.auth()
export const storage = firebase.storage()