import { useEffect, useState } from "react";
import initializeFirebase from "../components/pages/Login/firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged ,  signInWithEmailAndPassword, signOut  } from "firebase/auth";

//initialize firebase app
initializeFirebase();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
   

    const auth = getAuth();

    const registerUser = (email, password)=>{
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          
          setAuthError('')
          })
          .catch((error) => {
            
            setAuthError (error.message);
            
          })
          .finally(()=> setIsLoading(false));
    }

    useEffect(() => {
     const unsubscribe=   onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
              setUser({})
            }
            setIsLoading(false);
          });
          return () => unsubscribe;
    },[]);

    const loginUser = (email, password) =>{
      setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    setAuthError('');
  })
  .catch((error) => {
    
    setAuthError (error.message);
  }).finally(()=> setIsLoading(false));
    }

    const logOut = ()=>{
      setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          }).finally(()=> setIsLoading(false));
    }

    return{
        user,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        authError,
        
        
    }
  
}

export default useFirebase;