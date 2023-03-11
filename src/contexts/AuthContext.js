import React, { useContext, useEffect, useState } from 'react'
// import { auth } from "../"
import {auth }from '../firebase/firebase'
const AuthContext = React.createContext()

// export function useAuth();
// return useContext();
export const useAuth = () => {
  return useContext(AuthContext);
};
export default function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  // Signs up on firebase with email and password.
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  // Sets the user to the object and we can keep track if logged in or not.
  // useEffect() lets react know to run after render
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  // Export the value for other functions to call it.
  const value = {
    currentUser,
    signup,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}