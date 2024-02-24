import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: "face-look-b2af2.appspot.com",
//   messagingSenderId: "457880280524",
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDjOzUxJ2N7M48i6HfaXHMNge1VfNj-nQU",
  authDomain: "face-look-b2af2.firebaseapp.com",
  projectId: "face-look-b2af2",
  storageBucket: "face-look-b2af2.appspot.com",
  messagingSenderId: "457880280524",
  appId: "1:457880280524:web:caac3b5421dd6753c21169",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerUser = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    console.log(res);
    return res.user;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const loginUser = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log(res);
    return res.user;
  } catch (error) {
    throw new Error(error);
  }
};

const resetPass = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw new Error(error);
  }
};

const googleSingIn = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (error) {
    throw new Error(error);
  }
};

const fbSingIn = async () => {
  try {
    await signInWithPopup(auth, fbProvider);
  } catch (error) {
    throw new Error(error);
  }
};

const githubSignIn = async () => {
  try {
    await signInWithPopup(auth, githubProvider);
  } catch (error) {
    throw new Error(error);
  }
};

export {
  auth,
  app,
  registerUser,
  loginUser,
  resetPass,
  googleSingIn,
  fbSingIn,
  githubSignIn,
};
