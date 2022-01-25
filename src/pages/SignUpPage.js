import SwitchButton from '../components/SwitchButton';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className='auth__theme'>
                <SwitchButton/>
            </div>
            <div className="auth__container">
                <div className="auth__content">
                    <h3 className='auth__title'>Register</h3>
                    <form>
                        <div className='auth__field'>
                            <input className='auth__input' placeholder='Name'/>
                            <label className='auth__label'>Name:</label>
                        </div>
                        <div className='auth__field'>
                            <input className='auth__input' placeholder='Email'/>
                            <label className='auth__label'>Email:</label>
                        </div>
                        <div className='auth__field'>
                            <input className='auth__input' placeholder='Password'/>
                            <label className='auth__label'>Password:</label>
                        </div>
                        <div className='auth__field'>
                            <input className='auth__input' placeholder='Repeat Password'/>
                            <label className='auth__label'>Repeat Password:</label>
                        </div>
                        <button className='submit__button'>Register</button>
                        <footer className='auth__footer'>
                            <p className='auth__text'>Already have an= account?</p>
                            <p className='auth__goto' onClick={ () => { navigate('/SignIn') } } >SignIn Now</p>
                        </footer>
                    </form>
                </div>
            </div>
        </>
)};

export default SignUpPage;
