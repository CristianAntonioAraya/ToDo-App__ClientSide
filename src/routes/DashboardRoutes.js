import { BrowserRouter, Route, Routes } from "react-router-dom"
import { renewToken } from "../redux/actions/AuthActions"
import AppRoutes from "./AppRoutes"
import AuthRoutes from "./AuthRoutes"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"
import { useDispatch } from 'react-redux';

const DashBoardRoutes = () => {

    const token = localStorage.getItem('token');
    const dispatch = useDispatch()
    
    if(token){
        dispatch(renewToken())
    }

    return ( 
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route path="/auth/*" element={ 
                    <PublicRoutes>
                        <AuthRoutes/>
                    </PublicRoutes> 
                }/> 
                
                {/* Private Routes */}
                <Route path="/*" element={ 
                    <PrivateRoutes>
                        <AppRoutes/>
                    </PrivateRoutes>
                }/> 
            </Routes>      
        </BrowserRouter>    
    )
}

export default DashBoardRoutes
