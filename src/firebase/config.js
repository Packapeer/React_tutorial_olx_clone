import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import "firebase/compat/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZqdDuzVJbn7_2Egaqx2EMA96S7apQLp4",
    authDomain: "fir-f5793.firebaseapp.com",
    projectId: "fir-f5793",
    storageBucket: "fir-f5793.appspot.com",
    messagingSenderId: "583871396234",
    appId: "1:583871396234:web:9046b20d6afaaea2973073",
    measurementId: "G-JS5HE2V577"
  };


  export default firebase.initializeApp(firebaseConfig);