import { createContext, useState } from "react"

export const AuthContext = createContext(null);
 
const AuthProvider = ({children}) => {
    const [user, SetUser ] = useState({
        name: "samriddha dewan",
        age: 23
    });
    
    const AuthInfo = {
        user, 
        SetUser
    }

  return (
    <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider