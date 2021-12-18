import { useEffect, useState } from "react";
import initializeFirebase from "../components/pages/Login/firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged ,  signInWithEmailAndPassword, signOut , GoogleAuthProvider , signInWithPopup , updateProfile  } from "firebase/auth";

//initialize firebase app
initializeFirebase();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
   
    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history)=>{
      setIsLoading(true)
      //save user to database
      saveUser(email, name, 'POST');

        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          
          setAuthError('');
          history.replace('/');

          const newUser = {email, displayName: name};

          setUser(newUser);
          

          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            
          }).catch((error) => {
            
          });
          
          
          })
          .catch((error) => {
            
            setAuthError (error.message);
            
          })
          .finally(()=> setIsLoading(false));
    }

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
      setAuthError('');
      
      signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const destination = location?.state?.from || '/';
        history.replace(destination);
        const user = result.user;
        saveUser(user.email, user.displayName,  'PUT');
        
        
        // ...
      }).catch((error) => {
        setAuthError(error.message);
      }).finally(()=> setIsLoading(false));
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

     useEffect(()=>{
        fetch(`https://afternoon-sands-44312.herokuapp.com/users/${user.email}`)
        .then(res=> res.json())
        .then(data=> setAdmin(data.admin))
     }, [user.email])

    const saveUser = (email, displayName, method) =>{

        const user = {email, displayName};
        fetch('https://afternoon-sands-44312.herokuapp.com/users', {
          method:method,
          headers:{
            'content-type' : 'application/json'
          },
          body:JSON.stringify(user)
        })
        .then()
    }

  

    return{
        user,
        admin,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        authError,
        signInWithGoogle,
        
        
    }
  
}

export default useFirebase;