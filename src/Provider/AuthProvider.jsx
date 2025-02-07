import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
 
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);


    const handleSignIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleSignUp = (email, passowrd) => {
        return createUserWithEmailAndPassword(auth,email, passowrd)
    }
    
    const userLogOut = ()=> {
        return signOut(auth)
        
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return ()=> {
            unSubscribe()
        }
    },[auth])
    
    const AuthInfo = {
        handleSignUp,
        handleSignIn,
        setUser,
        userLogOut,
        user
    }

  return (
    <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider