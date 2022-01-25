import SwitchButton from '../components/SwitchButton';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignUpPage = () => {

    const navigate = useNavigate()
    
    const [name, setName] = useState('Cristian Araya');
    const [email, setEmail] = useState('arayacristian1398@gmail.com');
    const [password, setPassword] = useState('123456');
    const [repeatPassword, setRepeatPassword] = useState('123456');

    const handleRegister = (e) => {
        e.preventDefault()
        
    }

    return (
        <>
            <div className='auth__theme'>
                <SwitchButton/>
            </div>
            <div className="auth__container">
                <div className="auth__content">
                    <h3 className='auth__title'>Register</h3>
                    <form onClick={ handleRegister }>
                        <div className='auth__field'>
                            <input className='auth__input' placeholder='Name' value={name} onChange={ (e) => setName(e.target.value)}/>
                            <label className='auth__label'>Name:</label>
                        </div>
                        <div className='auth__field'>
                            <input className='auth__input' placeholder='Email' value={email} onChange={ (e) => setEmail(e.target.value)} />
                            <label className='auth__label' >Email:</label>
                        </div>
                        <div className='auth__field'>
                            <input className='auth__input' placeholder='Password' value={password} onChange={ (e) => setPassword(e.target.value)} />
                            <label className='auth__label'>Password:</label>
                        </div>
                        <div className='auth__field'>
                            <input className='auth__input' placeholder='Repeat Password' value={repeatPassword} onChange={ (e) => setRepeatPassword(e.target.value)} />
                            <label className='auth__label'>Repeat Password:</label>
                        </div>
                        <button className='submit__button' type='submit' >Register</button>
                        <footer className='auth__footer'>
                            <p className='auth__text'>Already have an account?</p>
                            <p className='auth__goto' onClick={ () => { navigate('/SignIn') } } >SignIn Now</p>
                        </footer>
                    </form>
                </div>
            </div>
        </>
)};

export default SignUpPage;
