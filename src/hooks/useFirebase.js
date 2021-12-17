import { useEffect, useState } from "react";
import initializeFirebase from "../components/pages/Login/firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged ,  signInWithEmailAndPassword, signOut , GoogleAuthProvider , signInWithPopup , updateProfile    } from "firebase/auth";

//initialize firebase app
initializeFirebase();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
   
    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, history, location, name)=>{
      setIsLoading(true)
      
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          
          setAuthError('');

          const newUser = {email, displayName:name};
          setUser(newUser);
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            
          }).catch((error) => {
            
          });
          const destination = location?.state?.from || '/';
    history.replace(destination);
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

    const loginUser = (email, password, location, history) =>{
      setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const destination = location?.state?.from || '/';
    history.replace(destination);
    
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

    // google Sign Authentication 
    const signInWithGoogle = (location, history) =>{
      setIsLoading(true)
      signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const destination = location?.state?.from || '/';
        history.replace(destination);
        const user = result.user;
        setAuthError('');
        // ...
      }).catch((error) => {
        setAuthError(error.message);
      }).finally(()=> setIsLoading(false));
    }

    return{
        user,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        authError,
        signInWithGoogle,
        
        
    }
  
}

export default useFirebase;