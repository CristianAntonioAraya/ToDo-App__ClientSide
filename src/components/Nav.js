import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Logout } from "../redux/actions/AuthActions";
import SwitchButton from "./SwitchButton"


const Nav = () => {

    const dispatch = useDispatch();    
    const navigate = useNavigate()
    const { userName } = useSelector( state => state.auth )

    const handleLogout = () => {
        console.log('clicked Logout');
        dispatch(Logout())
        localStorage.removeItem('token')
    }

    return (
        <div className="navbar__container">
            <h2 className="navbar__title" onClick={()=> { navigate('/') }}>ToDo App</h2>
            <div className="navbar__links">
                <p className="navbar__link" onClick={ () => { navigate('/settings') }}>Settings</p>
                <p className="navbar__link" onClick={ () => { navigate('/profile') }}>{userName}</p>
                <p className="navbar__link" onClick={ handleLogout }>Logout</p>
                <SwitchButton/>
            </div>
        </div>
    )};

export default Nav;
