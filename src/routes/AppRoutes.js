import { Route, Routes } from "react-router-dom"
import AddNew from "../pages/AddNewPage"
import HomePage from "../pages/HomePage"
import SettingPage from "../pages/SettingPage"

const AppRoutes = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={ <HomePage/> }/>
                <Route path="/settings" element={ <SettingPage/> }/>
                <Route path="/new" element={ <AddNew/> }/>
            </Routes>      
        </>
    )
}

export default AppRoutes
