import { initializeApp } from "firebase/app";
import { Alert } from "react-native";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
import { saveUserSession } from "./sessionHelper";

const firebaseConfig = {
  apiKey: "AIzaSyC3vmrUuhhFwpBWCbOgOH-W2p7uCFgUyus",
  authDomain: "whatsapp-clone-b122d.firebaseapp.com",
  projectId: "whatsapp-clone-b122d",
  storageBucket: "whatsapp-clone-b122d.appspot.com",
  messagingSenderId: "993500153726",
  appId: "1:993500153726:web:9a913225eaccf2f699152f",
  measurementId: "G-R5GSNF49QH",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

//Create User Auth

export function SignUp(email, password, navigation) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      Alert.alert("Hi Buddy!", "SuccessFully Registered");
      navigation.replace("Profile");
      saveUserSession("true");
    })
    .catch((error) => {
      alert(error.message);
    });
}

//User SignIn Auth

export function SignIn(email, password, navigation) {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      navigation.replace("Home");
      Alert.alert("Welcome!", "Login SuccessFull");
      saveUserSession("true"); //this will save a variable called is_logged_in in storage
    })
    .catch((error) => {
      alert(error.message);
    });
}
