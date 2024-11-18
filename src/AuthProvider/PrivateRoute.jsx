import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Loading from "../Components/Loading";
 

 

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.state)

    if(user){
        return children;
    }
    if(loading){
        return <Loading></Loading>;
    }

    return (
        <div>
            <Navigate state={location.pathname} to='/login'></Navigate> 
        </div>
    );
};

export default PrivateRoute;