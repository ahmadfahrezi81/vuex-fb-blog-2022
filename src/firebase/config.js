import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAhZ6y8R7I4fI00_gI3qfhoX7gLErs9KyQ",
    authDomain: "vuex-fb-blog-2022.firebaseapp.com",
    projectId: "vuex-fb-blog-2022",
    storageBucket: "vuex-fb-blog-2022.appspot.com",
    messagingSenderId: "667480386728",
    appId: "1:667480386728:web:c6457661cd6ff8d98a669d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

const auth = getAuth();

export { db, auth };
