import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
 
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState([])
    console.log(user)

    const handleSignUp = (email, passowrd) => {
        return createUserWithEmailAndPassword(auth,email, passowrd)
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
        setUser,
        user
    }

  return (
    <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider