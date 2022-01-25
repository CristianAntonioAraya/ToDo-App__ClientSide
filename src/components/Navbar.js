import { useNavigate } from "react-router-dom"

import SwitchButton from "./SwitchButton"


const Navbar = () => {
    
    const navigate = useNavigate()

    return (
        <div className="navbar__container">
            <h2 className="navbar__title" onClick={()=> { navigate('/') }}>ToDo App</h2>
            <div className="navbar__links">
                <p className="navbar__link" onClick={ () => { navigate('/settings') }}>Settings</p>
                <p className="navbar__link" onClick={ () => { navigate('/profile') }}>My Profile</p>
                <SwitchButton/>
            </div>
        </div>
)};

export default Navbar;
