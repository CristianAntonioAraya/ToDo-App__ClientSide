import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {

    const {token} = useSelector( state => state.auth)

    console.log('Es ruta privada');

    return token 
        ? children
        : <Navigate to="/auth/SignIn"/>  

};

export default PrivateRoutes;
