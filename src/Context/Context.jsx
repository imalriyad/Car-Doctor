/* eslint-disable react/prop-types */
import { createContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { useEffect } from "react";
import { useState } from "react";
export const AuthContext = createContext(null);
const Context = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading,setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
    
  };

  const SigniniWithEmail = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);

  };

  const googleLogin = () => {
    setLoading(true)
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false)
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    createUser,
    SigniniWithEmail,
    googleLogin,
    logout,
    user,
    isLoading
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default Context;
