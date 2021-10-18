import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyAIirN1C1xBuh9S0K24aUaARPnVqeor_84",
  authDomain: "cloth-shoping-app.firebaseapp.com",
  projectId: "cloth-shoping-app",
  storageBucket: "cloth-shoping-app.appspot.com",
  messagingSenderId: "267173746792",
  appId: "1:267173746792:web:51c708b95706e8352f03dd",
  measurementId: "G-DPKDH3PMDC",
};

initializeApp(config);
export const auth = getAuth();
export const fireStore = getFirestore();
export const signOutCustom = () => signOut(auth);
//console.log(fireStore);
const provider = new GoogleAuthProvider();

export const SignInWithGoogle = () => {

  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // // The signed-in user info.
      // const user = result.user;
      //console.log(credential, token, user)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential);
      // ...
    });
};

export const SignInWithRedirect = () => {
  signInWithRedirect(auth, provider);
};
