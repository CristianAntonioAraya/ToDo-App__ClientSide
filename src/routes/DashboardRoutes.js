import { BrowserRouter, Route, Routes } from "react-router-dom"
import SettingPage from "../pages/SettingPage"
import AppRoutes from "./AppRoutes"
import AuthRoutes from "./AuthRoutes"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"

const DashBoardRoutes = () => {
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
