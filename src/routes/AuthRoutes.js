import { Route, Routes } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";

const AuthRoutes = () => {
    return(
        <Routes>
            <Route path="/SignIn" element={ <SignInPage/> }/>
            <Route path="/SignUp" element={ <SignUpPage/> }/>
        </Routes>
)};  


export default AuthRoutes;
