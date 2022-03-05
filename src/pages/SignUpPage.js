import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch  } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey, faUser} from '@fortawesome/free-solid-svg-icons';

import SwitchButton from '../components/utils/SwitchButton';
import { StartRegister } from '../redux/actions/AuthActions';



const SignUpPage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const [userName, setUserName] = useState('Cristian Araya');
    const [email, setEmail] = useState('arayacristian1398@gmail.com');
    const [password, setPassword] = useState('123456');
    const [repeatPassword, setRepeatPassword] = useState('123456');


    const handleRegister = (e) => {
        e.preventDefault()
        dispatch(StartRegister(userName, email, password))
        navigate('/')
    }

    return (
        <>
            <SwitchButton/>
            <div className="auth__container">
                    <h3 className='auth__title'>Register</h3>
                    <form className='auth__form' onSubmit={ handleRegister }>

                        <div className='auth__field'>
                            <div className='auth__icon'>
                                <FontAwesomeIcon icon={faUser}/>
                            </div>
                            <input className='auth__input' placeholder='Name' value={userName} onChange={ (e) => setUserName(e.target.value)}/>
                        </div>

                        <div className='auth__field'>
                            <div className='auth__icon'>
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </div>
                            <input className='auth__input' placeholder='Email' value={email} onChange={ (e) => setEmail(e.target.value)} />
                        </div>

                        <div className='auth__field'>
                            <div className='auth__icon'>
                                <FontAwesomeIcon icon={faKey}/>
                            </div>
                            <input className='auth__input' placeholder='Password' value={password} onChange={ (e) => setPassword(e.target.value)} />
                        </div>

                        <div className='auth__field'>
                            <div className='auth__icon'>
                                <FontAwesomeIcon icon={faKey}/>
                            </div>
                            <input className='auth__input' placeholder='Repeat Password' value={repeatPassword} onChange={ (e) => setRepeatPassword(e.target.value)} />
                        </div>

                        <button className='button__submit' type='submit' >Register</button>

                        <footer className='auth__footer'>
                            <p className='auth__text'>Already have an account?</p>
                            <p className='auth__redirect' onClick={ () => { navigate('/auth/SignIn') } } >SignIn Now</p>
                        </footer>
                    </form>
            </div>
        </>
)};

export default SignUpPage;
