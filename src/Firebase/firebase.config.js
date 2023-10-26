import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyD2tAk4sS_QMhEMkhddh2xvz78rlSYa97U",
  authDomain: "firbase-introduction.firebaseapp.com",
  projectId: "firbase-introduction",
  storageBucket: "firbase-introduction.appspot.com",
  messagingSenderId: "557273876110",
  appId: "1:557273876110:web:db2337a5cdf2aaa5742bdf",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
