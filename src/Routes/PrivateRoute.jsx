import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";
import LoadingPage from "../Pages/LoadingPage";

const PrivateRoute = ({children}) => {
    const {user, loading, setLoading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <LoadingPage />
    }
    if(user && user?.email){
        setLoading(false)
        return children;
    }
    return (
    <Navigate state={location.pathname} to={"/auth/login"}></Navigate>
  )
}

export default PrivateRoute