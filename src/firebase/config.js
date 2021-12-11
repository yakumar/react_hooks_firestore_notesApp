import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBA5ubjZ6NU441YHQZ7CzePmkeEP48wKmA",
  authDomain: "reacttest-9d533.firebaseapp.com",
  projectId: "reacttest-9d533",
  storageBucket: "reacttest-9d533.appspot.com",
  messagingSenderId: "849120999623",
  appId: "1:849120999623:web:241354cee9e34105b126e2"
});

export const db = getFirestore()

