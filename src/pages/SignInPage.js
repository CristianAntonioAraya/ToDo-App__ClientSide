import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';


import { StartLoginEmailPassword } from '../redux/actions/AuthActions';
import SwitchButton from '../components/SwitchButton';

const SignInPage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('arayacristian1398@gmail.com');
    const [password, setPassword] = useState('123456');       
    
    
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(StartLoginEmailPassword(email, password))
        navigate('/')
    }

    return (
        <>
        <SwitchButton/>
            <div className='auth__container'>
                <h3 className='auth__title'>Login</h3>
                <form className='auth__form' onSubmit={ handleLogin }>

                    <div className='auth__field'>
                        <div className='auth__icon'>
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </div>
                        <input className='auth__input' placeholder='Email' value={email} onChange={ (e)=> setEmail(e.target.value) }/>
                    </div>

                    <div className='auth__field'>
                        <div className='auth__icon'>
                            <FontAwesomeIcon icon={faKey}/>
                        </div>
                        <input className='auth__input' type='password' placeholder='Password' value={password} onChange={ (e) => setPassword(e.target.value)} />
                    </div>

                    <button className='button__submit' type='submit'>Login</button>
                    <footer className='auth__footer'>
                        <p className='auth__text'>Don't have account?</p>
                        <p className='auth__redirect' onClick={ () => { navigate('/auth/SignUp') } } >Signup Now</p>
                    </footer>
                </form>
            </div>
        </>
)};

export default SignInPage;
