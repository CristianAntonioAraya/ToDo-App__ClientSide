import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {

    const {token} = useSelector( state => state.auth)

    console.log('Es ruta publica');

    return token 
        ? <Navigate to="/"/>  
        : children
        
};

export default PublicRoutes;

