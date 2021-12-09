import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  setDoc,
  getDoc,
  getDocs,
  doc,
  collection,
  writeBatch,
} from "firebase/firestore";

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
export const signOutCustom = async () => await signOut(auth);
export const customzedProfileData = async (userAuth, additionalData) => {
  if (!userAuth) return null;

  const { uid, displayName, email } = userAuth;
  const userRef = doc(fireStore, "users", uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    try {
      const createdAt = new Date();
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return { userRef, userSnap };
};

export const customCreateUser = async (email, password, displayName) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  const { userRef, userSnap } = await customzedProfileData(user, {
    displayName,
  });

  return { userRef, userSnap, user };
};

export const SignInEmailPassword = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

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

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectToAdd
) => {
  const collectionRef = collection(fireStore, collectionKey);

  const batch = writeBatch(fireStore);
  objectToAdd.forEach((obj) => {
    const newDocRef = doc(collectionRef);
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const getDataFromCollection = async (collectionKey) => {
  const collectionRef = collection(fireStore, collectionKey);
  const querySnapshot = await getDocs(collectionRef);
  return querySnapshot.docs.map(item => item.data() )
};
