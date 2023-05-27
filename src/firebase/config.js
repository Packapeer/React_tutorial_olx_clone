import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAkRtp7S1LrCiKGTnKK_3Jycr-tu91Zda0",
    authDomain: "olx-clone1-a47a5.firebaseapp.com",
    projectId: "olx-clone1-a47a5",
    storageBucket: "olx-clone1-a47a5.appspot.com",
    messagingSenderId: "197762478746",
    appId: "1:197762478746:web:5c923c5f292d10dcec6523",
    measurementId: "G-JSEN9LG3HT"
  };
  firebase.initializeApp(firebaseConfig);



export default firebase;