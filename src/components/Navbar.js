import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

import SwitchButton from "./SwitchButton"


const Navbar = () => {
    
    const navigate = useNavigate()
    const { userName } = useSelector( state => state.auth )

    return (
        <div className="navbar__container">
            <h2 className="navbar__title" onClick={()=> { navigate('/') }}>ToDo App</h2>
            <div className="navbar__links">
                <p className="navbar__link" onClick={ () => { navigate('/settings') }}>Settings</p>
                <p className="navbar__link" onClick={ () => { navigate('/profile') }}>{userName}</p>
                <SwitchButton/>
            </div>
        </div>
)};

export default Navbar;
