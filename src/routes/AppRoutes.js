import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import SignInPage from "../pages/SignInPage"
import SettingPage from "../pages/SettingPage"
import SignUpPage from "../pages/SignUpPage"

const AppRoutes = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <HomePage/> }/>
                <Route path="/settings" element={ <SettingPage/> }/>
                <Route path="/SignIn" element={<SignInPage/> }/>
                <Route path="/SignUp" element={<SignUpPage/> }/>
            </Routes>      
        </BrowserRouter>    
    )
}

export default AppRoutes
