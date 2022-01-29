import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {

    const { isAuth } = useSelector( state => state.auth)

    return isAuth 
        ? children
        : <Navigate to="/auth/SignIn"/>  

};

export default PrivateRoutes;
