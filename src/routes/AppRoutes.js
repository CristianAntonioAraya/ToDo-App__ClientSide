import { Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar"
import HomePage from "../pages/HomePage"
import SettingPage from "../pages/SettingPage"


const AppRoutes = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={ <HomePage/> }/>
                <Route path="/Setting" element={ <SettingPage/> }/>
            </Routes>      
        </>
    )
}

export default AppRoutes
