import SwitchButton from '../components/SwitchButton';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className='auth__theme'>
                <SwitchButton/>
            </div>
            <div className="auth__container">
                <div className="auth__content">
                    <h3 className='auth__title'>Login</h3>
                    <form>
                        <div className='auth__field'>
                            <input className='auth__input' placeholder='Email'/>
                            <label className='auth__label'>Email:</label>
                        </div>
                        <div className='auth__field'>
                            <input className='auth__input' placeholder='Password'/>
                            <label className='auth__label'>Password:</label>
                        </div>
                        <button className='submit__button'>Login</button>
                        <footer className='auth__footer'>
                            <p className='auth__text'>Don't have account?</p>
                            <p className='auth__goto' onClick={ () => { navigate('/SignUp') } } >Signup Now</p>
                        </footer>
                    </form>
                </div>
            </div>
        </>
)};

export default SignInPage;
