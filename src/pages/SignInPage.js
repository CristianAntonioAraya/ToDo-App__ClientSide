import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';


import { StartLoginEmailPassword } from '../redux/actions/AuthActions';
import SwitchButton from '../components/utils/SwitchButton';
import { validSignInForm } from '../components/utils/ValidForm';
import { unsetError } from '../redux/actions/UiAction';

const SignInPage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui)


    useEffect(() => {
        if(msgError !== null ){
            Swal.fire({
                title: msgError,
                timer: '2500',
                icon:'error',
                showCloseButton: true,
                showConfirmButton: false
            })
            dispatch(unsetError())
        }
    }, [msgError])
    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');       
    
    
    const handleLogin = (e) => {
        e.preventDefault();
        if(validSignInForm( email, password )){
            dispatch(StartLoginEmailPassword(email, password)) 
            console.log('log')
        }
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
                        <input className='auth__input'  placeholder='Email' value={email} onChange={ (e)=> setEmail(e.target.value)  }/>
                    </div>

                    <div className='auth__field'>
                        <div className='auth__icon'>
                            <FontAwesomeIcon icon={faKey}/>
                        </div>
                        <input className='auth__input' type='password' placeholder='Password' value={password} onChange={ (e) => setPassword(e.target.value)} autoComplete='on' />
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
