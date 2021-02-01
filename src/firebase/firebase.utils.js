import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAsosRZjzUpSwH7_r_7FD2wKAV9LjF-Wlo",
    authDomain: "wmama-db.firebaseapp.com",
    projectId: "wmama-db",
    storageBucket: "wmama-db.appspot.com",
    messagingSenderId: "335537275724",
    appId: "1:335537275724:web:6aec2e688eb910cfc3c5e9",
    measurementId: "G-4D2ZCXFEJT"

}

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;