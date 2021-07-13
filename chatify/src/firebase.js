import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyD8XpWwEesuPo_M0PgnQZQyIvLl-tS8Ylg",
    authDomain: "chatify-firebase.firebaseapp.com",
    projectId: "chatify-firebase",
    storageBucket: "chatify-firebase.appspot.com",
    messagingSenderId: "23840573600",
    appId: "1:23840573600:web:aba2878d5083ba4bc161c5"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider }
export default db;