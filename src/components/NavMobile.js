import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Logout } from "../redux/actions/AuthActions";


const NavMobile = () => {

    const dispatch = useDispatch();    
    const navigate = useNavigate()
    // const { userName } = useSelector( state => state.auth )

    const toggleMenu = () => {
        const menu = document.getElementById('nav__mobile')
        const routes = document.getElementById('routes')
        menu.classList.toggle('nav-mobile__hide')
        routes.classList.toggle('shadow')
    }

    const handleLogout = () => {
        console.log('clicked Logout');
        dispatch(Logout())
        localStorage.removeItem('token')
    }

    return (
        <>
            <div className='nav-mobile__container'>
                <FontAwesomeIcon className='nav-mobile__icon-open' icon={faBars} onClick={toggleMenu}/>
                <div className='nav-mobile__content nav-mobile__hide' id='nav__mobile'>
                    <div className='nav-mobile__links'>

                        <FontAwesomeIcon className='nav-mobile__icon-close' icon={faTimes} onClick={toggleMenu}/>

                        <p className='nav-mobile__link' onClick={() => navigate('/settings')}>My Profile</p>

                        <p className='nav-mobile__link' onClick={() => navigate('profile')}>settings</p>

                        <p className='nav-mobile__link' onClick={ handleLogout }>Logout</p>

                    </div>
                </div>
                <p className='nav-mobile__title' onClick={() => navigate('/')}>
                    ToDo App
                </p>
            </div>
        </>
    )}

export default NavMobile;
 